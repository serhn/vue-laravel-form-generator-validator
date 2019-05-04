<template>
  <div class="custom-control custom-checkbox mb-3">
    <input
      v-model="enabled"
      name="enabled"
      :class="{ 'is-invalid' : errors.has('enabled')}"
      v-validate="validate"
      type="checkbox"
      class="custom-control-input"
      :id="id"
    
    >
    <label class="custom-control-label" :for="id">{{label}}</label>
    <div class="invalid-feedback">{{ errors.first('enabled') }}</div>
  </div>
</template>

<script>
export default {
  props: ["id","name","label","validate","placeholder"],
  data: function() {
    return { enabled: "" };
  },
  inject: ['$validator'],
};
</script>

<style>
</style>
