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
      // {title: 'Dashboard', icon: 'dashboard', path: 'dashboard'},
      {title: 'Questions', icon: 'dashboard', path: 'questions'},
      // {title: 'Hall Of Fame', icon: 'person_pin', path: 'rank'},
      {title: 'FAQ', icon: 'forum', path: 'forum'},
      {title: 'Contact Us', icon: 'layers', path: 'rules'},
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
       //console.log("setLevel Called !!");
        let ref = firebase.database().ref('users/' + state.user.id );
        ref.update({
          "onLevel" : payload,
        });
    },
    incrementPoint(state,payload){
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date+' '+time;

      let prevPoint = state.user.points;
      let prevDay = state.user.myDay;
      let flag = state.user.flag;
      let currentDay = payload;
      let ref1 = firebase.database().ref('users/' + state.user.id );
      let testFlag = flag[currentDay];
      if(!testFlag.status){
          ref1.update({
            "points" : prevPoint + 10,
          });
         let flagRef = ref1.child("flag").child(currentDay).update({"status": true,"lastSubmit": dateTime});
          //console.log("Points Incremented !!");
        }
        else{
         // console.log('Already Submitted Answer At Previous Time !!')
        }
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
                points: 0,
                flag:{
                  '1':{'status': false,'lastSubmit': null},
                  '2':{'status': false,'lastSubmit': null},
                  '3':{'status': false,'lastSubmit': null},
                  '4':{'status': false,'lastSubmit': null},
                  '5':{'status': false,'lastSubmit': null},
                },
              };
              userRef.set(newUser);
              //console.log("New user I am with uuid: " + uuid);
              commit('setUser', newUser);
            }
            else{
              userRef.on("value",function (snapshot) {
                let user = snapshot.val();
                //console.log(user);
                let oldUser = {
                    id: user.id ,
                    fullName: user.fullName,
                    points: user.points,
                    flag: user.flag,
                };
                //console.log("Old user it is");
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
            points: 0,
          flag:{
            '1':{'status': false,'lastSubmit': null},
            '2':{'status': false,'lastSubmit': null},
            '3':{'status': false,'lastSubmit': null},
            '4':{'status': false,'lastSubmit': null},
            '5':{'status': false,'lastSubmit': null},
          },
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
              //console.log("Error: " + error.code);
            });
          }
        )
        .catch(
          error => {
            commit('setLoading',false);
            commit('setError',error);
           // console.log(error);
          }
        )
    },
    onLogout ({commit}) {
      firebase.auth().signOut().then(function() {
        //console.log('Signed Out Action');
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
    },
    incrementPoint({commit},payload){
      commit('incrementPoint',payload);
    }
  }
});
