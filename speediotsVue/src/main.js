import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import './style.css';
import App from './App.vue';

const HomeView = () => import('./pages/Home.vue');
const AboutView = () => import('./pages/About.vue');
const Gt2View = () => import('./pages/Gt2.vue');
const Gt3View = () => import('./pages/Gt3.vue');
const Gt4View = () => import('./pages/Gt4.vue');
const LoginView = () => import('./pages/Login.vue');
const NascarView = () => import('./pages/Nascar.vue');
const NewsView = () => import('./pages/News.vue');
const RaceRegisterView = () => import('./pages/RaceRegister.vue');
const RegisterView = () => import('./pages/Register.vue');
const RulesView = () => import('./pages/Rules.vue');
const ScheduleView = () => import('./pages/Schedule.vue');
const SupportersView = () => import('./pages/Supporters.vue');

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/gt2', component: Gt2View },
  { path: '/gt3', component: Gt3View },
  { path: '/gt4', component: Gt4View },
  { path: '/login', component: LoginView },
  { path: '/nascar', component: NascarView },
  { path: '/news', component: NewsView },
  { path: '/race-register', component: RaceRegisterView },
  { path: '/register', component: RegisterView },
  { path: '/rules', component: RulesView },
  { path: '/schedule', component: ScheduleView },
  { path: '/supporters', component: SupportersView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
