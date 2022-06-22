import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '../views/AboutMeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectFilter from '../views/ProjectFilter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutMeView
    },
    {
      path: '/projects',
      component:  ProjectsView,
     
    },
    {
      path: '/projects/:name',
      name : 'projectFilter',
      props : true,
      component:  ProjectFilter,
    },
    {
      path: '/projects?name',
      name: 'projects',
      component:  ProjectsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
