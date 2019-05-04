<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('Reset Password') }}</div>

          <div class="card-body">
            <form method="POST">
              <input type="hidden" name="token" :value="token">
              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    v-validate="'required|email'"
                    class="form-control"
                    name="email"
                    :class="{ 'is-invalid' : errors.has('email')}"
                    required
                    autofocus
                  >
                  <span
                    v-if="errors.has('email')"
                    
                    class="invalid-feedback"
                    role="alert"
                  >
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
                    ref="password"
                    required
                  >
                  
                  <span v-if="errors.has('password')" class="invalid-feedback" role="alert">
                    <strong>{{ errors.first('password') }}</strong>
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
                    id="password-confirm"
                    type="password"
                    v-validate="'required|min:6|max:10|confirmed:password'"
                    class="form-control"
                    :class="{ 'is-invalid' : errors.has('password_confirmation')}"
                    name="password_confirmation"
                    required
                  >
                  <span v-if="errors.has('password_confirmation')" class="invalid-feedback" role="alert">
                    <strong>{{ errors.first('password_confirmation') }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ $t('Reset Password') }}</button>
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
export default {
  data: function() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      token: this.$route.params.token
    };
  }
};
</script>

<style>
</style>
