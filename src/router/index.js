import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import RegisterUser from '@/components/profile/RegisterUser'
import LoginPass from '@/components/forms/FormJson'
import PasswordReset from '@/components/profile/PasswordReset'
import PasswordResetLink from '@/components/profile/PasswordResetLink'
import ProfilePanel from '@/components/profile/ProfilePanel'

import FormCreate from '@/components/forms/FormCreate'

Vue.use(VueRouter)


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/profile')
}
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', redirect: to => {
        // the function receives the target route as the argument
        return "/form/login"
      }
    }
    /*{
      path: '/login',
      alias: "/",
      name: 'LoginPass',
      component: LoginPass,
      beforeEnter: ifNotAuthenticated,
    }*/,
    {
      path: '/register',
      name: 'RegisterUser',
      component: RegisterUser,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/password/reset',
      name: 'PasswordReset',
      component: PasswordReset,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/password/reset/:token',
      name: 'PasswordResetLink',
      component: PasswordResetLink,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/profile',
      name: 'ProfilePanel',
      component: ProfilePanel,
      beforeEnter: ifAuthenticated,

    },
    {
      path: '/form/:form',
      name: 'FormCreate',
      component: FormCreate
    }


  ]
})