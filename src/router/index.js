import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//import Loader from '@/components/Loader'
const Dashboard = () => import('@/components/Dashboard')
const Forum = () => import('@/components/Forum')
const Rank = () => import('@/components/Rank')
const Rules = () => import('@/components/Rules')
const Signup = () => import('@/components/Profile/Signup')
const Signin = () => import('@/components/Profile/Signin')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '*',
      name:'Home',
      component: Home
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
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/',
    //   name: 'Loader',
    //   component: Loader
    // },
  ],
  mode: 'history',
})
