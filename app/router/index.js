import Vue from 'vue'
import VueRouter from 'vue-router'
import DataEntry from './module/data-entry'
import DateDisplay from './module/data-display'

Vue.use(VueRouter)

// 清除  跳转同一页面 router 报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout'),
    children: [
      {
        path: 'data-entry',
        component: () => import('@/views/data-entry'),
        children: DataEntry
      },
      {
        path: 'data-display',
        component: () => import('@/views/data-display'),
        children: DateDisplay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
