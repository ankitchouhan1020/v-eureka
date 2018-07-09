import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Dashboard from '@/components/Dashboard'
import Forum from '@/components/Forum'
import Rank from '@/components/Rank'
import Rules from '@/components/Rules'
import Signup from '@/components/Profile/Signup'
import Signin from '@/components/Profile/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

  ]
})
