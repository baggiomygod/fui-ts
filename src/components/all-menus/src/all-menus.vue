<template>
  <div class="nav-wrap-all">
    <div class="nav">
      <nav-title></nav-title>
      <!-- <transition name="slide-down"> -->
        <nav-list class="menus-list" :config="config"
                  @change-title="changeHeader"
                  v-show="menusStatus"></nav-list>
      <!-- </transition> -->
      <p class="more-menus">
        <i class="more-icon icon iconfont" @click="changeNav">&#xe76e;</i>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import navTitle from './nav-title.vue'
  import navList from './nav-list.vue'
  import {Vue, Component, Prop} from 'vue-property-decorator'
  @Component({
    components:{
      'nav-title':navTitle,
      'nav-list':navList
    }
  })
  export default class ScrollMenus extends Vue{
    // props
    @Prop({default: []})
    config: object[]

    @Prop({default: false})
    menusStatus: boolean

    // methods
    changeHeader(val: string){
      this.$emit('change-title', val)
    }
    changeNav(){
      this.$emit('show-all-menus', false);
    }
  }
</script>
<style lang="scss">
@import "../../common/style/mixin.scss";

.nav-wrap-all {
  position: relative;
  height: auto;
  background-color: #3e98f0;
  z-index: 10;
  .nav {
    overflow: hidden;
    position: relative;
    .more-menus {
      position: absolute;
      top: 6px;
      right: 0;
      background-color: rgb(62, 152, 240);
      width: 0.8rem;
      height: 0.8rem;
      box-sizing: border-box;
      opacity: 1; // transition: .3s ease-out;
      .more-icon {
        line-height: 1rem;
      }
    }
  }
}

// .menus-list{
  // .slide-down-active,
  // .slide-down-leavr{
  //   transition: opacity .3s ease-out;
  // }
  // .slide-down-enter,
  // .slide-down-leave-to{
  //   opacity:0
  // }
// }
</style>
