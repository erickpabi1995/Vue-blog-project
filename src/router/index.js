import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import JobDetails from '../views/JobDetails.vue'
import Tried from '../views/Tried.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:id',
    name: 'JobDetails',
    component:JobDetails
  },
  {
    path:"/try",
    name:Tried,
    component:Tried
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
