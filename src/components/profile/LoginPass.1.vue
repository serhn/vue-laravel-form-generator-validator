<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('Login') }}</div>
          <div class="card-body">
            <form method="POST" @submit.prevent="login">
              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid' : errors.has('email')}"
                    v-model="email"
                    name="email"
                    autofocus
                    required
                  >
                  <span v-if="errors.has('email')" class="invalid-feedback">
                    <strong>{{ errors.first('email') }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('Password') }}</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-validate="'required|min:6|max:10'"
                    :class="{ 'is-invalid' : errors.has('password')}"
                    name="password"
                    v-model="password"
                    required
                  >
                  <span v-if="errors.has('password')" class="invalid-feedback" role="alert">
                    <strong
                      v-for="(error,index) in errors.collect('password')"
                      :key="index"
                    >{{ error }}</strong>
                  </span>
                </div>
              </div>
<!--
              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember">
                    <label class="form-check-label" for="remember">{{ $t('Remember Me') }}</label>
                  </div>
                </div>
              </div>
-->
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ $t('Login') }}</button>

                  <router-link
                    :to="{ name: 'PasswordReset'}"
                    class="btn btn-link"
                  >{{ $t('Forgot Your Password?') }}</router-link>
                  <router-link
                    :to="{ name: 'RegisterUser'}"
                    class="btn btn-link"
                  >{{ $t('Register') }}</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaravelVee from "@/mixins/LaravelVee";
export default {
  //props: ["action"],
  mixins: [LaravelVee],
  data: function() {
    return {
      errorEmail: false,
      errorPassword: false,
      email: "",
      password: "",
      errorEmailMesPassword: ""
    };
  },
  // mounted(){
  //    alert(process.env.APP_URL);
  // },
  methods: {
    login() {
      if (this.errors.any()) return false;
      const { email, password } = this;
      this.$store
        .dispatch("authRequest", { email, password })
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => {
          this.laravelVee(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
