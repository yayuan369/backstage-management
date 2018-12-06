/*
 * @Author: jing lijuan
 * @Date: 2018-11-30 14:20:44
 * @LastEditors: jing lijuan
 * @LastEditTime: 2018-12-06 15:23:36
 * @Description: 
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面布局
import Layout from '@/views/layout/lauout.vue'

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
    redirect:'/permission/index',//重定向地址，在面包屑中点击会重定向去的地址
    alwaysShow:true,  //设置 alwaysShow: true，它就会忽略之前定义的规则，一直显示根路由
    meta:{
      title:'权限', //设置该路由在侧边栏和面包屑中展示的名字
      icon:'#icon-huiyuanquanyi', //设置该路由的图标
      roles:['admin','editor'], //设置该路由进入的权限，支持多个权限叠加
    },
    children:[
      {
        path:'page',
        component:() => import('@/views/permission/page'),
        name:'PagePermission',
        meta:{
          title:'页码',
          roles:['admin'],
          icon:'#icon-daizhenhuanzhe'
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '用户权限',
          icon:'#icon-gerenxinxi'
        }
      }
    ]

  },
  {
    path: '/example',
    name: 'Example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: 'Example',
      icon: '#icon-daizhenhuanzhe',
      roles:['admin','editor'],
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/example/table/index'),
        meta: {
          title: 'Table',
          roles:['admin'],
          icon: '#icon-huiyuan'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/example/tree/index'),
        meta: {
          title: 'Tree', //设置该路由在侧边栏和面包屑中展示的名字
          icon: '#icon-huiyuanquanyi', //设置该路由的图标
          roles:['admin','editor']
        }
      }
    ]
  },
]
