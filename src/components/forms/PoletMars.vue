<template>
  <div>
    <h3 id="form-grid">Mars flight application</h3>
    <p>One-way flight on a manned spacecraft</p>
    <form method="POST" @submit.prevent="sendForm()">
      <FormInput
        placeholder="Last"
        id="lastName"
        label="Last name"
        name="lastName"
        validate="required|min:3|alpha_num"
      ></FormInput>
      <FormInput
        placeholder="First"
        id="firstName"
        label="First Name"
        name="firstName"
        validate="required|min:3"
      ></FormInput>
      <FormInput
        placeholder="Middle"
        id="middleName"
        label="Middle name"
        name="middleName"
        validate="required|min:3"
      ></FormInput>

      <form-phone
        placeholder="+380 00 123-45-67"
        id="mobilePhone"
        label="Mobile phone"
        name="mobilePhone"
        validate="required|min:3"
      ></form-phone>
      <FormInput
        placeholder="E-Mail"
        id="emailForm"
        label="Email address"
        name="emailForm"
        validate="required|email"
      ></FormInput>
      <FormSelect :options="[1,2,3,4,5,6]" id="select" label="Example select"></FormSelect>
      <FormCheckbox id="confirm" validate label="Check this custom checkbox"></FormCheckbox>
      <form-submit>Sign in</form-submit>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/fields/FormInput";
import FormSelect from "@/components/fields/FormSelect";
import FormCheckbox from "@/components/fields/FormCheckbox";
import FormPhone from "@/components/fields/FormPhone";
import FormSubmit from "@/components/fields/FormSubmit";
export default {
  data: function() {
    return {
      msg: "",
      email: ""
    };
  },
  components: {
    FormInput,
    FormSelect,
    FormCheckbox,
    FormPhone,
    FormSubmit
  },

  methods: {
    sendForm() {
      alert("ha");
      this.$validator.validateAll();
      //this.$validator.validate().then(result => {
      //this.$validator.validateAll()
      //if (!result) {
      // do stuff if not valid.
      // }
      //alert(result);
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
