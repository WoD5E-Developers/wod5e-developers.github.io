// Vue logic
import { createRouter, createWebHistory } from 'vue-router'

// Main Components
import OverviewComponent from '@/components/Overview/overview.vue'
import NotFoundComponent from '@/components/NotFound/notfound.vue'

// Variables
const baseTitle = "WOD5E for FoundryVTT"

// Define the routes
const routes = [
  {
    name: `${baseTitle}`,
    path: '/',
    component: OverviewComponent
  },
  // Add a component to redirect people from the old wod5e-docs site to the new one
  {
    name: `${baseTitle} / 404`,
    path: '/wod5e-docs/:catchAll(.*)*',
    component: OverviewComponent
  },
  {
    name: `${baseTitle} / 404`,
    path: '/:catchAll(.*)*',
    component: NotFoundComponent
  }
]

// Set up the router and export
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Handle events that happen before loading the next page
router.beforeEach((to, from, next) => {
  if (to.href.match(/\/#/)) {
    router.push(to.href.replace(/\#\//, ''))
  }

  // Handle updating the page title
  document.title = to.name ? to.name : baseTitle
  document.head.querySelector("[property='og:title'][content]").content = to.name ? to.name : baseTitle

  // Tell the router to go to the next page
  next()
})

export default router
