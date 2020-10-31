<template>
  <div class="tab_layout">
    <i @click="changeTab('home')" id="home" class="material-icons active_tab onetab" style="margin: 20px">dashboard</i>
    <i @click="changeTab('profile')" id="profile" class="material-icons base_color_neon onetab" style="margin: 20px"
      >show_chart</i
    >
  </div>
</template>

<script>
export default {
  name: "TabLayout",
  methods: {
    changeTab(tab){
      var selected = document.getElementById(tab);
      var unselected = document.getElementById(this.$store.state.tab);
      selected.classList.remove('base_color_neon');
      selected.classList.add('active_tab');
      unselected.classList.remove('active_tab');
      unselected.classList.add('base_color_neon');
      this.$store.commit('changeTab',tab);
    }
  }
};
</script>

<style>
.tab_layout {
  display: flex;
  flex: 0.05;
  min-height: 100vh;
  flex-direction: column;
  background-color: rgb(223, 213, 213);
  box-shadow: rgb(163, 158, 158);
}
.onetab{
  justify-content: space-between;
}
</style>