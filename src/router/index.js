import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面布局
import Layout from '@/views/layout/lauout.vue'

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    //当设置 noredirect 的时候该路由在面包屑导航中不可被点击
    redirect: '/dashboard',
    //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
    name: 'Dashboard',
    //当hidden设置 true 的时候该路由不会在侧边栏出现
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: '#icon-daizhenhuanzhe'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/example/table/index'),
        meta: {
          title: 'Table',
          icon: '#icon-huiyuanquanyi'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/example/tree/index'),
        meta: {
          title: 'Tree',  //设置该路由在侧边栏和面包屑中展示的名字
          icon: '#icon-gerenxinxi2'  //设置该路由的图标
        }
      }
    ]
  },
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
// constantRouterMap： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
//asyncRouterMap： 代表那些需求动态判断权限并通过 addRouters 动态添加的页面。
export const asyncRouterMap = [

]
