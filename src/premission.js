// 权限管理
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'// 进度条 style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress配置

// 权限判断函数
function hasPermission(roles,permissionRoles){
    if(roles.indexOf('admin') >= 0)
    return true;    //admin
    // 权限直接传递
    if (!permissionRoles) return true
    
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect'];// 没有重定向白名单

router.beforeEach((to,from,next) => {
    NProgress.start();  //开始
    // 确定是否有 token
    if(getToken()){
        if(to.path === '/login'){
            next({path:'/'});
            NProgress.done();   //如果当前页面是dashboard将不会触发afterEach挂钩，所以手动处理它
        }else{
            if(store.getters.roles.length === 0){// 判断当前用户是否已拉取完user_info信息
                // 拉取user_info
                store.dispatch('GetUserInfo')
                .then(res=>{
                    const roles = res.data.roles;   //such as: ['editor','develop']
                    store.dispatch('GenerateRoutes',{roles})// 根据roles权限生成可访问的路由表
                    .then(()=>{
                        router.addRoutes(store.getters.addRoutes);  //动态添加可访问路由
                        next({ ...to, replace: true }); //hack方法 确保addRoutes已完成,设置replace：true，这样导航就不会留下历史记录
                    })
                })
                .catch((err)=>{
                    store.dispatch('FedLogOut')
                    .then(()=>{
                        Message.error(err || 'Verification failed, please login again');
                        next({path:'/'});
                    })
                })
            }else{
                 // 没有动态改变权限的需求可直接next() 删除下方权限判断
                 if(hasPermission(store.getters.roles, to.meta.roles)){
                     next();
                 } else{
                    next({ path: '/401', replace: true, query: { noGoBack: true }})
                 }
            }
        }
    } else {
        // 没有 token
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
        } else {
            next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
            NProgress.done(); // 如果当前页面是登录将不会触发afterEach挂钩，所以手动处理它
        }
    }
})


router.afterEach(() => {
    NProgress.done() // 结束
  })
