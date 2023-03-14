import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
    meta: {title: 'Welcome'},
  },
  {
    path: '*',
    component: PageNotFound,
    meta: {title: '404'},
  },

]

const router = new VueRouter(
  {
    mode: 'history',
    routes
  }
)

const DEFAULT_TITLE = document.title;

router.afterEach((to) => {

  Vue.nextTick(() => {

    if (to.meta && (to.meta).title) {
      document.title = (to.meta).title + ' | ' + DEFAULT_TITLE
    } else {
      document.title = DEFAULT_TITLE
    }
  })
})


export default router