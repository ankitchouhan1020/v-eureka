import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Questions from '@/components/Question'
//import Loader from '@/components/Loader'
const Dashboard = () => import('@/components/Dashboard');
const Forum = () => import('@/components/Forum');
const Rank = () => import('@/components/Rank');
const Rules = () => import('@/components/Rules');
const Signup = () => import('@/components/Profile/Signup');
const Signin = () => import('@/components/Profile/Signin');
import AuthGuard from './AuthGuard'

Vue.use(Router);
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
      component: Dashboard,
      beforeEnter: AuthGuard
    },
    {
      path: '/Questions',
      name: 'Questions',
      component: Questions,
      beforeEnter: AuthGuard
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules,
      beforeEnter: AuthGuard
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum,
      beforeEnter: AuthGuard
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      beforeEnter: AuthGuard
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
/*    {
      path: '/',
      name: 'Home',
      component: Home
    },*/
  ],
  mode: 'history',
})
