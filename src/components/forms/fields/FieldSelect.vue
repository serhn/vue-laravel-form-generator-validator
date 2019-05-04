<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <select class="form-control" :id="id">
      <option v-for="(option,index) in options" :key="index" >{{option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["id","name","label","validate","placeholder","options"],
  inject: ['$validator'],
};
</script>

<style>
</style>
