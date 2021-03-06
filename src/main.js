// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import AsyncComputed from 'vue-async-computed'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'
import {store} from '@/store/store'
import * as firebase from 'firebase'

Vue.use(Vuetify, {
  theme: {
    first:'#045D55',
    accent:'#33333F',
    success: '#373740',
    primary: '#1EB980',
    secondary: '#33333D',
    error: '#1eb980',
    third: '#B0BEC5',
    info: '#72DEFF',
    fourth: '#515162'
  },
  iconfont: 'mdi' ,// 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(AsyncComputed);
Vue.config.productionTip = false;

new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    return this.$store.getters.config;
  }
});
