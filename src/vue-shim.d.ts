import VueRouter from 'vue-router'
import {Route} from 'vue-router'
import Vue from 'vue'
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

// 全局变量设置
// 让ts识别$router
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route
  }
}

// declare module 'vue/types/vue' {
//   interface Vue {
    // $Message: any,
    // $Modal: any
//   }
// }

// declare global {
//   const _: typeof lodash
// }


// 告诉ts-loader把html理解成字符串
// declare module "*.html" {
//   let template: string;
//   export default template;
// }
