<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    if (localStorage.getItem("isLoggedIn") || this.isLoggedIn) {
      this.$router.push("home");
    } else {
      this.$router.push("login");
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>

<style>

</style>
