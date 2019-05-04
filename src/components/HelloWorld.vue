<template>
  <transition name="component-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
//import ProfilePanel from "./profile/ProfilePanel";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted(){
    //alert("ha");
  }
  // components: {
  //   "profile-panel": ProfilePanel
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
