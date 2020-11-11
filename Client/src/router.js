import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import WkMainPage from './views/WorkSpace/WkMainPage.vue';

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path:'/register',
    component: Register
  },
  {
    path: '/workspace',
    component: WkMainPage
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});