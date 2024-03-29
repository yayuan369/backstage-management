import {  asyncRouterMap,  constantRouterMap} from '@/router'

//   通过meta.role判断是否与当前用户权限匹配
//   @param roles
//   @param route

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.rolea.includes(role));
  } else {
    return true;
  }
}

// 递归过滤异步路由表，返回符合用户角色权限的路由表
//   @param routes asyncRouterMap
//   @param roles

function filterAsyncRouter(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const temp = { ...route };
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRouter(temp.children, roles);
      }
      res.push(temp);
    }
  });
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        let accessedRouters;
        if (roles.includes('admin')) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
