import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import Estoque from '../pages/Estoque.vue';
import Historico from '../pages/Historico.vue';
import Comanda from '../pages/Comanda.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/estoque', component: Estoque },
  { path: '/historico', component: Historico },
  { path: '/comanda', component: Comanda },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});