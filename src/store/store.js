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
    }
  },
  getters: {
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
    }
  },
  actions: {
    clearError({commit}){
      commit('clearError');
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
        commit('setUser',newUser);
        console.log(newUser)
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
        console.log('Signed Out , In logout actions');
        commit('setUser', null);
      }).catch(function(error) {
        console.error('Sign Out Error', error);
      });
    },
    // loader ({commit}) {
    //   const l = loader;
    //   this[l] = !this[l];
    //   setTimeout(() => (this[l] = false), 3000);
    //   loader = null
    // },
    stopLoading({commit}){
      commit('setLoading', false);
    },
    clearUser({commit}){
      commit('setUser', null);
    }
  }
});
