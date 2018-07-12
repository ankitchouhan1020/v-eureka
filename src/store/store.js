import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    loading:false,
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
      // storageBucket: "eureka-5bd43.appspot.com",
      // messagingSenderId: "389158541916"
    }),
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
    },
    setLoading(state,payload){
      state.loading = payload;
    },
    setError(state,payload){
      state.error = payload;
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
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then( (result) => {
        if(result.additionalUserInfo.isNewUser === false){
           let newUser = {
            id: result.user.uid,
            fullName: result.additionalUserInfo.profile.name,
          };
          //this.database.ref('users').push(this.newUser);
          let ref = firebase.database().ref('scores');
          ref.push(newUser);
          commit('setUser',newUser);
          console.log(newUser);
        }
          console.log('I am auth by google');
        }
      ).catch(() => {
          console.log('Google auth error !!');
        });

    },
    signUserUp({commit},payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then(
      user => {
        commit('setLoading',false);
        const newUser = {
            id : user.user.uid,
            onLevel : 1,
            branch: payload.branch,
            fullName: payload.fullName,
            newsletter: payload.newsletter,
        };
        function writeUserData() {
          firebase.database().ref('users/' + user.user.id).set({
            fullName: payload.fullName,
            newsletter: payload.newsletter,
            branch: payload.branch,
            onLevel : 1,
          });
          var newPostKey = firebase.database().ref().child('users').push().key;
        }
        console.log(newUser);
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
    signUserIn ({commit}, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading',false);
            const newUser = {
              id: user.user.uid,
              fullName: payload.name,
            };
            commit('setUser', newUser);
            console.log(newUser)
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
        console.log('Signed Out,I"m onLogout actions');
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
    }
  }
});
