import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/register',
    component: Register
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});