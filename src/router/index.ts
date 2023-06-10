import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/donde-estamos',
    name: 'donde-estamos',
    component: () => import('../components/DondeEstamos.vue')
  }
  ,
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../components/VistaProductos.vue')
  }
  ,
  {
    path: '/instrumentos/:id',
    name: 'detalle-instrumento',
    component: () => import('../components/DetalleInstrumento.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
