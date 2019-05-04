<template>
  <button class="btn btn-dark" @click.prevent="logout">{{$t("Logout")}} {{user.name}}</button>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("authLogout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>
