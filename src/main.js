// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Cookies from 'js-cookie';
import store from './store';
import i18n from './lang'; //导入语言
import './premission'; //权限控制

// 引入element-UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', //设置element-UI自适应尺寸
  i18n: (key, value) => i18n.t(key, value) //兼容vue-i18n@6.x
});



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => (App)
})
