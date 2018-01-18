declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

// 全局变量设置
declare module 'vue/types/vue' {
  interface Vue {
    // $Message: any,
    // $Modal: any
    $router: any
  }
}

// declare global {
//   const _: typeof lodash
// }


// 告诉ts-loader把html理解成字符串
// declare module "*.html" {
//   let template: string;
//   export default template;
// }
