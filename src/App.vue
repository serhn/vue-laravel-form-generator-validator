<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created: function() {
    this.axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch(AUTH_LOGOUT);
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
  }
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
//@import '../node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css';
</style>
