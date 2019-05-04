<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('Login') }}</div>
          <div class="card-body">
            <form method="POST" @submit.prevent="login">
              <field-text
                placeholder="login"
                v-model="email"
                :label="$t('Email')"
                name="email"
                validate="required|email"
              ></field-text>
              <field-text
                placeholder="password"
                type="password"
                v-model="password"
                name="password"
                :label="$t('Password')"
                validate="required|min:6|max:10"
              ></field-text>
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
import FieldText from "@/components/forms/fields/FieldText";
//import FieldSelect from "@/components/fields/FieldSelect";
//import FieldCheckbox from "@/components/fields/FieldCheckbox";
//import FieldPhone from "@/components/fields/FieldPhone";
//import FieldSubmit from "@/components/fields/FieldSubmit";
export default {
  //props: ["action"],
  mixins: [LaravelVee],
  data: function() {
    return {
      email: "",
      password: "",
      comp: "FieldText"
    };
  },
  components: {
    FieldText
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
