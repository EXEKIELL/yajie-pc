// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import '../static/css/swiper.min.css'
import '../static/js/swiper.min'
import $ from 'jquery'
import api from '../static/js/mainPublic'
import VueAMap from 'vue-amap';
Vue.prototype.$api = api;
Vue.prototype.VueAMap = VueAMap;
Vue.config.productionTip = false;
Vue.prototype.$baseLink = 'http://archie.web.hengdikeji.com';
Vue.use(ElementUI);
Vue.use(VueAMap);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




