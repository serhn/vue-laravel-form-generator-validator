<template>
  <div>

    <div class="form-group row">
      <label :for="idComputed" class="col-md-4 col-form-label text-md-right">{{field.label}}</label>

      <div class="col-md-6">
        <input
          :type="typeComputed"
          class="form-control"
          :id="idComputed"
          :class="{ 'is-invalid' : errors.has(field.name)}"
          v-on:input="updateValue($event.target.value)"
          v-validate="field.validate"
          :name="field.name"
          :placeholder="field.placeholder"
        >
        <span v-if="errors.has(field.name)" class="invalid-feedback" role="alert">
          <strong v-for="(error,index) in errors.collect(field.name)" :key="index">{{ error }}</strong>
        </span>
      </div>
    </div>

    <div class="form-group row">
      <label
        for="password-confirm"
        class="col-md-4 col-form-label text-md-right"
      >{{field.labelConfirm}}</label>

      <div class="col-md-6">
        <input
          v-validate="field.validate+'|confirmed:password'"
          id="password-confirm"
          type="password"
          class="form-control"
          :class="{ 'is-invalid' : errors.has('password_confirmation')}"
          v-model="password_confirmation"
          name="password_confirmation"
          :data-vv-as="field.name"
        >
        <span v-if="errors.has('password_confirmation')" class="invalid-feedback" role="alert">
          <strong
            v-for="(error,index) in errors.collect('password_confirmation')"
            :key="index"
          >{{ error }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["field", "value"],
  data: function() {
    return {
      //field.i
    };
  },
  computed: {
    idComputed: function() {
      if (!this.field.id) {
        return this.field.name;
      }
      return this.field.id;
    },
    typeComputed: function() {
      if (!this.field.type) {
        return "text";
      }
      return this.field.type;
    }
  },
  data: function() {
    return { txt: "" };
  },
  inject: ["$validator"],
  methods: {
    updateValue(value) {
      //this.$emit("input", value);
    }
  }
};
</script>

<style>
</style>
