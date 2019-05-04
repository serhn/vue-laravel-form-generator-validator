<template>
  <form-json v-if="formData.fields" :form="formData"></form-json>
</template>

<script>
import FormJson from "@/components/forms/FormJson";
export default {
  computed: {
    formData: function() {
      if (this.$route.params.form === "register") {
        return {
          action: "",
          name: "Register",
          submitName: "Register",
          fields: [
            {
              component: "InputText",
              placeholder: "name",
              label: "Name",
              name: "name",
              validate: "required|min:3",
              value: "valUE",
              dataVvAs: "dataVvAs"
            },
            {
              component: "InputText",
              placeholder: "login",
              label: "Email",
              name: "email",
              validate: "required|email",
              value: "eto@test.email"
            },
            {
              component: "InputText",
              placeholder: "password",
              type: "password",
              name: "password",
              label: "Password",
              validate: "required|min:6|max:10"
            }/*,
            {
              component: "InputText",
              placeholder: "password confirmation",
              type: "password",
              name: "password_confirmation",
              label: "Password Confirmation",
              validate: "required|min:6|max:10|confirmed:password",
              dataVvAs: "password"
            }
            */
          ],
          links: [
            {
              href: "/form/login",
              text: "Login"
            }
          ]
        };
      }
      if (this.$route.params.form === "forgot_password") {
        return {
          action: "",
          name: "Forgot Password",
          submitName: "Reset Password",
          fields: [
            {
              component: "InputText",
              placeholder: "login",
              label: "Email",
              name: "email",
              validate: "required|email",
              model: "email",
              value: "valUE"
            }
          ],
          links: [
            {
              href: "/form/register",
              text: "Register"
            },
            {
              href: "/form/login",
              text: "Login"
            }
          ]
        };
      }
      if (this.$route.params.form === "login") {
        return {
          action: "",
          name: "Login",
          submitName: "Login",
          fields: [
            {
              component: "InputText",
              placeholder: "login",
              label: "Email",
              name: "email",
              validate: "required|email",
              value: "valUE"
            },
            {
              component: "InputText",
              placeholder: "password",
              type: "password",
              name: "password",
              label: "Password",
              validate: "required|min:6|max:10"
            }
          ],
          links: [
            {
              href: "/form/forgot_password",
              text: "Forgot Your Password?"
            },
            {
              href: "/form/register",
              text: "Register"
            }
          ]
        };
      }
      return {};
    }
  },
  mounted() {
    //alert("ha");
    //this.$router.currentRoute.path;
  },
  components: {
    FormJson
  }
};
</script>

<style>
</style>
