import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {Route} from 'vue-router'
import Vue from 'vue'

declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route,
    $http: any,
    style: object,
    getBoundingClientRect: any,
  }
}



// 全局变量设置
// declare global {
//   const _: typeof lodash
// }
// declare module 'vue/types/vue' {
  // interface Vue {
    // $Message: any,
    // $Modal: any
  // }
// }

// iview 全局方法
// declare module 'vue/types/vue' {
//   interface Vue {
//     $Message: any,
//     $Modal: any
//   }
// }

// 告诉ts-loader把html理解成字符串
// declare module "*.html" {
//   let template: string;
//   export default template;
// }
