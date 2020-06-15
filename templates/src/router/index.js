import Vue from 'vue'
import VueRouter from 'vue-router'
import configRoutes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes: configRoutes })
router.beforeEach((to, from, next) => {
  document.title = to.meta && to.meta.title ? to.meta.title : ''
  next()
})
export default router
