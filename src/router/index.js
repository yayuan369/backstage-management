import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面布局
import Layout from '@/views/layout/lauout.vue'

export const constantRouterMap = [{
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
