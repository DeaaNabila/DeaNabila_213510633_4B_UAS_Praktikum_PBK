import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cuaca from '../components/Cuaca.vue';
import Lokasi from '../components/Lokasi.vue';
import Stopwatch from '../components/Stopwatch.vue';
import Game from '../components/Game.vue';
import Foto from '../components/Foto.vue';

const routes = [
  { path: '/ ', name: 'Home', component: Home},
  { path: '/cuaca', name: 'Cuaca', component: Cuaca },
  { path: '/lokasi', name: 'Lokasi', component: Lokasi },
  { path: '/stopwatch', name:'Stopwatch', component: Stopwatch },
  { path: '/game', name: 'Game', component: Game },
  { path: '/foto', name: 'Foto', component: Foto},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
