import components from './components'
const install = (Vue) => {
  Vue.component('f-scroll-menus', components.scrollMenus)
  Vue.component('f-all-menus', components.allMenus)
  Vue.component('f-close', components.close)
  Vue.component('f-list', components.list)
}

export default {
  install
}
