<template>
  <div class="portal-wrap">
  <f-header :title="propsHeader"></f-header>
  <f-scroll-menus v-if="!showAllMenus"
                    :config="menusConfig"
                    @change-title="changeTitle"
                    @show-all-menus="changeMenus"></f-scroll-menus>
  <f-all-menus v-else
                :config="menusConfig"
                :menus-status="showAllMenus"
                @change-title="changeTitle"
                @show-all-menus="changeMenus"></f-all-menus>
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import header from './components/header.vue';
import portalConfig from './portal.config.ts'
@Component({
  components:{
    'f-header': header
  }
})
export default class Portal extends Vue {
  menusConfig: any[] = portalConfig.menus
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
<style lang="scss">
@import '../../commons/style/transition/fade.scss';

</style>
