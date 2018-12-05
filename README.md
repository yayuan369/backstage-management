# backstage-management

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


```项目基于 vue、vuex、element-UI、axios 等技术,使用了阿里的iconfont图标```


侧边栏菜单的路由icon

main.js文件引入
import './assets/iconfont/iconfont' //引入iconfont.js
全局引入SvgIcon组件

然后整个项目就可以使用这个组件了
<svg-icon icon-class="icon名称" />

