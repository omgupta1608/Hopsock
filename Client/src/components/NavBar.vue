<template>
  <nav class="purple accent-3">
    <div class="nav-wrapper">
      <h3 class="brand-logo" style="margin: 15px">HOPSOCK</h3>
      <ul
        id="nav-mobile"
        class="right hide-on-med-and-down"
        :style="[
          isProfileOpen
            ? { 'background-color': '#aa00ff' }
            : { 'background-color': '#d500f9' },
        ]"
      >
        <li>
          <a href="#">
            <i
              @click="openProfile"
              id="home"
              class="material-icons active_tab onetab"
              >person</i
            ></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    openProfile() {
      this.$store.commit("openProfile", !this.$store.state.openProfile);
    },
  },
  computed: {
    isProfileOpen() {
      return this.$store.state.openProfile;
    },
  },
};
</script>