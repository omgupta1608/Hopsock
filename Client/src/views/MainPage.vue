<template>
  <div class="main_area">
    <div class="sidebar">
      <a @click="changeMainTab('home')" id="home" class="active">Home</a>
      <a @click="changeMainTab('workspaces')" id="workspaces">Work Spaces</a>
      <a @click="changeMainTab('settings')" id="settings">Settings</a>
      <a @click="changeMainTab('logout')" id="logout">Log Out</a>
    </div>

    <div class="content">
     <div v-if="mainTab == 'home'">
       <Home/>
     </div>
     <div v-if="mainTab == 'workspaces'">
       <WorkSpaces/>
     </div>
     <div v-if="mainTab == 'settings'">
       <Settings/>
     </div>
     <div v-if="mainTab == 'logout'">
       <Logout/>
     </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import WorkSpaces from './WorkSpace.vue';
import Settings from './Settings.vue';
import Logout from './Logout.vue';
export default {
  name: "MainPage",
  methods: {
    changeMainTab(tab){
      var selected = document.getElementById(tab);
      var unselected = document.getElementById(this.$store.state.maintab);
      unselected.classList.remove('active');
      selected.classList.add('active');
      this.$store.commit('changeMainTab',tab);
      if(tab == 'logout') this.$store.commit('toggleAuth',!this.$store.state.isLoggedIn);
    }
  },
  components:{
    Home,
    WorkSpaces,
    Settings,
    Logout
  },
  computed:{
    mainTab(){
      return this.$store.state.maintab;
    }
  }
};
</script>

<style>
.content{
    height: 100vh;
    width: 84.5vw;
}
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: rgb(198, 145, 220);
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #e17ff5;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 100%;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 100%;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  height: 100%;
  width: 100%;
}
</style>