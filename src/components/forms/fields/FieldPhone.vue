<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <masked-input
      type="text"
      class="form-control"
      :id="id"
      :class="{ 'is-invalid' : errors.has(name)}"
      v-model="txt"
      v-validate="validate"
      :name="name"
      :placeholder="placeholder"
      :mask="['+', /[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/,'-', /\d/, /\d/,'-', /\d/, /\d/]"
      
     />
    <div v-if="errors.has(name)" class="invalid-feedback">{{ errors.first(name) }}</div>
  </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
export default {
  props: ["id","name","label","validate","placeholder"],
  data: function() {
    return { txt: "" };
  },
  inject: ['$validator'],
  components:{
    MaskedInput
  }
};
</script>

<style>
</style>
