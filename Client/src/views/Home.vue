<template>
  <div id="app">
   <div v-if="isLoggedIn" class="main">
      <NavBar/>
      <Profile v-if="openProfile"/>
      <MainPage v-if="!openProfile" />
      
      <!-- <Profile v-if="tab == 'profile'" /> -->
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import MainPage from '../views/MainPage.vue';
import Profile from '../views/Profile.vue';
export default {
  name: 'App',
  components: {
    MainPage,
    NavBar,
    Profile
  },
  computed: {
    openProfile(){
        return this.$store.state.openProfile;
    },
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
    }
  },
}
</script>

<style>
</style>
