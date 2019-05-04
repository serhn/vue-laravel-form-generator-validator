<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('Reset Password') }}</div>

          <div class="card-body">
            <form method="POST" @submit.prevent="passwordReset">
              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                >{{ $t('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="text"
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
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ $t('Reset Password') }}</button>
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
import LaravelVee from "@/mixins/LaravelVee";
export default {
  mixins: [LaravelVee],
  data: function() {
    return {
      email: ""
    };
  },
  methods: {
    passwordReset() {
      if (this.errors.any()) return false;
      const { email } = this;
      this.$store
        .dispatch("passwordResetRequest", { email })
        .then(() => {
          this.$router.push("/");
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
