import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import VeeValidate from "vee-validate"

Vue.use(VeeValidate);

Vue.use(VueAxios, axios)
//import axios from "axios";


//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

if (store.state.token) {
  axios.defaults.headers.common['Authorization'] ="Bearer "+ store.state.token
}

/*
window.axios = require('axios');
let token = store.state.token
//alert(store.state.token)
if (token) {
  alert(token);
    window.axios.defaults.headers.common['Authorization'] = token;
   // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} 
*/
//else {
///    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
///}

import App from './App.vue'

//require("../node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js")



Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')