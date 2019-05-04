<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('Register') }}</div>

          <div class="card-body">
            <form method="POST" @submit.prevent="register">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ $t('Name') }}</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    v-validate="'required'"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid' : errors.has('name')}"
                    v-model="name"
                    value
                    name="name"
                    required
                    autofocus
                  >
                  
                  <span v-if="errors.has('name')" class="invalid-feedback">
                    <strong>{{ errors.first('name') }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input
                    
                    name="email"
                    id="email"
                    type="email"
                    class="form-control"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid' : errors.has('email')}"
                    v-model="email"
                    value
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
                    v-validate="'required|min:6|max:10'"
                    :class="{ 'is-invalid' : errors.has('password')}"
                    name="password"
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="password"
                    ref="password"
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

              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('Confirm Password') }}</label>

                <div class="col-md-6">
                  <input
                    v-validate="'required|min:6|max:10|confirmed:password'"
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid' : errors.has('password_confirmation')}"
                    v-model="password_confirmation"
                    name="password_confirmation"
                    data-vv-as="password"
                    required
                  >
                  <span
                    v-if="errors.has('password_confirmation')"
                    class="invalid-feedback"
                    role="alert"
                  >
                    <strong
                      v-for="(error,index) in errors.collect('password_confirmation')"
                      :key="index"
                    >{{ error }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ $t('RegisterUser') }}</button>
                  <router-link :to="{ name: 'LoginPass'}" class="btn btn-link">{{ $t('Login') }}</router-link>
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
import  LaravelVee  from '@/mixins/LaravelVee';
export default {
  // props: ["action"],
  data: function() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      name: ""
    };
  },
  mixins:[LaravelVee],
  methods: {
    register() {
      if (this.errors.any()) return false;
      const { email, password, name } = this;
      this.$store
        .dispatch("registerRequest", { email, password, name })
        .then(() => {
          //this.$router.push("/");
           //alert("ha");
           this.$router.push("/profile");
        })
        .catch(error => {
          this.laravelVee(error)
        });
    }
  }
};
</script>

<style>
</style>
