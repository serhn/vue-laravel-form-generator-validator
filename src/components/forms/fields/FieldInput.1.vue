<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <input
      :type="fieldType"
      class="form-control"
      :id="id"
      :class="{ 'is-invalid' : errors.has(name)}"
      v-model="txt"
      v-validate="validate"
      :name="name"
      :placeholder="placeholder"
    >
    <div v-if="errors.has(name)" class="invalid-feedback">{{ errors.first(name) }}</div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "label", "validate", "placeholder", "type"],
  computed: {
    fieldType: function ()  {
      if (!this.type) {
        return "text"
      }
      return this.type
    }
  },
  data: function() {
    return { txt: "" };
  },
  inject: ["$validator"]
};
</script>

<style>
</style>
