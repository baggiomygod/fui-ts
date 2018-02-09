import Vue from 'vue'
import App from './App.vue'
// import router from './router/index'
import VueResource from 'vue-resource'
// import store from './store'
import Fui from '../src/fui'
// import 'commons/style/index.scss'
// import './main.scss'
import 'static/css/icon_font/iconfont.css' // 引入图标库

Vue.config.productionTip = false
Vue.use(Fui)
Vue.use(VueResource)
/* eslint-disable no-new */
const init = new Vue({
  el: '#sell',
  // store,
  // router,
  render: h => h(App)
})
