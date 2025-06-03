import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Connexion from '../components/Connexion.vue';
import Inscription from '../components/Inscription.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/connexion', component: Connexion },
  { path: '/inscription', component: Inscription }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
