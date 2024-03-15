import { createRouter, createWebHistory } from 'vue-router'

import ProjectsView from '../views/ProjectsView.vue'
import WorksView from '../views/WorksView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import DetailView from '../views/DetailView.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUsView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactUsView
    },
    {
      path: '/details/:view/:id',
      name: 'details',
      component: DetailView
    },
    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
