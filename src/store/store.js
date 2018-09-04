import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    loading:false,
    loading2: false,
    error:null,
    beforeLoginNav: [
      {title: 'Home', icon: 'home', path: 'home'},
      {title: 'Sign Up', icon: 'face', path: 'signup'},
      {title: 'Sign in', icon: 'lock_open', path: 'signin'},
    ],
    afterLoginNav: [
      {title: 'Dashboard', icon: 'dashboard', path: 'dashboard'},
      {title: 'Hall Of Fame', icon: 'person_pin', path: 'rank'},
      {title: 'Rules', icon: 'layers', path: 'rules'},
      {title: 'Forum', icon: 'forum', path: 'forum'},
    ],
    loader: null,
    config: firebase.initializeApp({
      apiKey: "AIzaSyClFfBS46nktb8Vu7LK69GsFlLip5iv4fQ",
      authDomain: "eureka-5bd43.firebaseapp.com",
      databaseURL: "https://eureka-5bd43.firebaseio.com",
      projectId: "eureka-5bd43",
    }),
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
    },
    setLoading(state,payload){
      state.loading = payload;
    },
    setLoading2(state,payload){
      state.loading2 = payload;
    },
    setError(state,payload){
      state.error = payload;
    },
    setLevel(state,payload){
       console.log("setLevel Called !!");
        let ref = firebase.database().ref('users/' + state.user.id );
        ref.update({
          "onLevel" : payload,
        });
    },
    clearError(state){
      state.error = null;
    },
    clearUser(state){
      state.user = null;
    },
  },
  getters: {
    config(state){
      return state.config;
    },
    user(state){
      return state.user;
    },
    loading(state){
      return state.loading;
    },
    loading2(state){
      return state.loading2;
    },
    loader(state){
      return state.loader;
    },
    error(state){
      return state.error;
    },
    beforeLoginNav(state){
      return state.beforeLoginNav;
    },
    afterLoginNav(state){
      return state.afterLoginNav;
    },
  },
  actions: {
    clearError({commit}){
      commit('clearError');
    },
    signInWithGoogle({commit}){
        commit('setLoading2', true);
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          let uuid = result.user.uid;
          let userRef = firebase.database().ref('users/' + uuid );
            if (result.additionalUserInfo.isNewUser === true) {
              let newUser = {
                id: uuid,
                fullName: result.additionalUserInfo.profile.name,
                onLevel: 1,
                college: null,
                branch: null,
              };
              userRef.set(newUser);
              console.log("New user I am with uuid: " + uuid);
              commit('setUser', newUser);
            }
            else{
              userRef.on("value",function (snapshot) {
                let user = snapshot.val();
                let oldUser = {
                    id: user.id ,
                    fullName: user.fullName,
                    onLevel: user.onLevel,
                    college: user.college,
                    branch: user.branch,
                  };
                console.log("Old user it is");
                commit('setUser', oldUser);
              });
            }
            commit('setLoading2', false);
            console.log('Auth by google successful.');
          }
        ).catch(() => {
          let errorCode = error.code;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          }
        });
      },
    signUserUp({commit},payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then(
      user => {
        commit('setLoading',false);
        firebase.database().ref('users/' + user.user.uid).set({
            id : user.user.uid,
            fullName: payload.fullName,
            onLevel : 1,
            branch: payload.branch,
            newsletter: payload.newsletter,
          });
        firebase.auth().signOut();
      })
        .catch(
          error => {
            commit('setLoading',false);
            commit('setError',error);
            console.log(error);
          }
        )
      },
    signUserIn ({commit}, payload){
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading',false);
            firebase.database().ref('users/' + user.user.uid ).on("value",function(snapshot){
              let newUser = snapshot.val();
              commit('setUser', newUser);
              // console.log(newUser.onLevel);
              //commit('setLevel',newUser.onLevel);
            },function(error){
              console.log("Error: " + error.code);
            });
          }
        )
        .catch(
          error => {
            commit('setLoading',false);
            commit('setError',error);
            console.log(error);
          }
        )
    },
    onLogout ({commit}) {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out Action');
        commit('setUser', null);
      }).catch(function(error) {
        console.error('Sign Out Error', error);
      });
    },
    stopLoading({commit}){
      commit('setLoading', false);
    },
    clearUser({commit}){
      commit('setUser', null);
    },
    setLevel({commit},payload){
      commit('setLevel',payload);
    }
  }
});
