<template>
  <div class="portal-wrap">
  <f-header :title="propsHeader"></f-header>
  <f-scroll-menus v-if="!showAllMenus"
                    :config="menusConfig"
                    @change-title="changeTitle"
                    @show-all-menus="changeMenus"></f-scroll-menus>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import header from './components/header.vue';
@Component({
  components:{
    'f-header': header
  }
})
export default class Portal extends Vue {
  menusConfig: any[] = [
        {menu_name:'FUI',url:'/fui'},
        {menu_name:'vue2',url:'/vue2'},
        {menu_name:'typescript',url:'/ts-list'},
        {menu_name:'pwa',url:'/pwa'},
        {menu_name:'flex',url:'/flex'},
        {menu_name:'d3.js',url:'/d3js'},
        {menu_name:'notes',url:'/web-notes'},
        {menu_name:'animate',url:'/anmiation'},
        {menu_name:'3D',url:'/3D'},
        {menu_name:'webGL',url:'/webGL'},
        {menu_name:'canvas',url:'/canvas'},
        {menu_name:'app',url:'/app'},
      ]
      propsHeader: string = 'fui'
      showAllMenus: boolean = false

  name:string = 'fui'
  // 提供   父组件到子组件提供一些服务和数据时用 @Provide @Inject
  @Provide('users') users: object =  {name:'fan', age: 11}

  changeTitle(headerName: string){
    this.propsHeader = headerName
  }
  changeMenus(showMenus: boolean){
    this.showAllMenus = showMenus
  }
}
</script>
