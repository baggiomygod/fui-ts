import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Fui from '../src/fui'
import 'commons/style/index.scss'
import './main.scss'
import 'static/css/icon_font/iconfont.css' // 引入图标库

Vue.config.productionTip = false
Vue.use(Fui)
/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})
router.push('/ts-list')
