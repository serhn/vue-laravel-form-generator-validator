<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{form.name}}</div>
          <div class="card-body">
            <form method="POST" @submit.prevent="login">
              <div v-for="(field,key) in form.fields" :key="key">
                <!-- <keep-alive> -->
                <component v-bind:is="field.component" v-model="field.value" :field="field"></component>
                <!-- </keep-alive> -->
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    <span>{{submitNameComputed}}</span>
                  </button>

                  <router-link
                    v-for="(link, key) in form.links"
                    :key="key"
                    :to="link.href"
                    class="btn btn-link"
                  >{{link.text}}</router-link>
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
import InputText from "@/components/forms/fields/InputText";
import InputConfirmPassword from "@/components/forms/fields/InputConfirmPassword";
//import FieldSelect from "@/components/fields/FieldSelect";
//import FieldCheckbox from "@/components/fields/FieldCheckbox";
//import FieldPhone from "@/components/fields/FieldPhone";
//import FieldSubmit from "@/components/fields/FieldSubmit";
export default {
  props: ["form"],
  mixins: [LaravelVee],
  data: function() {
    return {
      email: "",
      password: "",
      comp: "FieldText",
      keyField: -1
    };
  },

  computed: {
    submitNameComputed: function() {
      if (!this.form.submitName) {
        return this.$t("Submit");
      }
      return this.form.submitName;
    }
  },
  components: {
    InputText,
    InputConfirmPassword
  },
  // mounted(){
  //    alert(process.env.APP_URL);
  // },
  methods: {
    vModel() {},
    login() {
      //alert(this.email);
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
  },
  inject: ["$validator"]
};
</script>

<style scoped>
</style>
