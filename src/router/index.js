import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: () => import( '../views/Overview.vue')
  },
  //,{
    //path: '/editor/:moduleName/:documentTitle',
  //  name: 'editor',
  //  component: () => import( '../views/Writer.vue')
  //},
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: routes,
})

export default router
