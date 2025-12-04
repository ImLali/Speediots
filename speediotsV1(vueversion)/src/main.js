import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import './style.css';
import App from './App.vue';

const HomeView = () => import('./Home.vue');
const AboutView = () => import('./About.vue');

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
