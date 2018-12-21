/*
 * @Author: jing lijuan
 * @Date: 2018-11-30 14:20:44
 * @LastEditors: jing lijuan
 * @LastEditTime: 2018-12-21 13:53:49
 * @Description: 
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面布局
import Layout from '@/views/layout/layout.vue'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    //当设置 noredirect 的时候该路由在面包屑导航中不可被点击
    redirect: '/dashboard',
    //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      noCache: true //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true  //当hidden设置 true 的时候该路由不会在侧边栏出现
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true  //当hidden设置 true 的时候该路由不会在侧边栏出现
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
  {
    path:'/permission',
    name:'permission',  //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
    component:Layout,
    redirect:'/permission/directive',//重定向地址，在面包屑中点击会重定向去的地址
    alwaysShow:true,  //设置 alwaysShow: true，它就会忽略之前定义的规则，一直显示根路由
    meta:{
      title:'权限', //设置该路由在侧边栏和面包屑中展示的名字
      icon:'#icon-setting-permissions', //设置该路由的图标
      roles:['admin','editor'], //设置该路由进入的权限，支持多个权限叠加
    },
    children:[
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '用户权限',
          icon:'#icon-gerenxinxi',
          noCache: true // 不会被 <keep-alive> 缓存
        }
      },
      {
        path:'page',
        component:() => import('@/views/permission/page'),
        name:'PagePermission',
        meta:{
          title:'页码',
          roles:['admin'],
          icon:'#icon-daizhenhuanzhe'
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'Example',
    component: Layout,
    redirect: '/example/icons',
    alwaysShow:true,
    meta: {
      title: '零星栗子',
      icon: '#icon-zuzhiqunzu',
      roles:['admin','editor'],
    },
    children: [
      {
        path: 'icons',
        name: 'Icons',
        component: () => import('@/views/example/icons/index'),
        meta: {
          title: 'Icons', //设置该路由在侧边栏和面包屑中展示的名字
          icon: '#icon-biaoxingfill', //设置该路由的图标
          roles:['admin','editor']
        }
      }
    ]
  },
]
