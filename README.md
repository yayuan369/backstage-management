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


小记:

当我们在页面上点击一个按钮，它会触发(dispatch)一个action, action 随后会执行(commit)一个mutation, mutation 立即会改变state,  state 改变以后,我们的页面会state 获取数据，页面发生了变化;
state对象,是定义的一些变量,就是我们需要存储的变量
mutations是用于修改state中属性的方法集合




侧边栏菜单的路由icon

main.js文件引入
import './assets/iconfont/iconfont' //引入iconfont.js
全局引入SvgIcon组件

然后整个项目就可以使用这个组件了
<svg-icon icon-class="icon名称" />

