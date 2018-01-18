import components from './components'
const install = (Vue) => {
  Vue.component('f-scroll-menus', components.scrollMenus)
  Vue.component('f-close', components.close)
}

export default {
  install
}
