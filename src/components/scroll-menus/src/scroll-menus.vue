<template>
<div class="nav-wrap">
      <div class="nav">
        <p class="l-grade"></p>
        <ul class="nav-menus">
          <li class="nav-item" v-for="item in config" :key="item.url" @click="changeHeader(item.menu_name)">
            <router-link :to="item.url" active-class="active">{{item.menu_name}}</router-link>
          </li>
        </ul>
        <p class="r-grade"></p>
        <p class="more-menus">
          <i class="more-icon icon iconfont" @click="changeNav">&#xe772;</i>
        </p>
      </div>
</div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Inject} from 'vue-property-decorator'
@Component({})
export default class ScrollMenus extends Vue{
  // props
  @Prop({default: []})
  config: object[]

  // data
  shwoAllMenus: boolean = false

  // methods
  changeHeader(val: string): void{
    this.$emit('change-title', val)
  }
  changeNav(){
    this.$emit('show-all-menus', true)
  }
}

</script>
<style lang="scss">
@import "../../common/style/mixin.scss";
.nav-wrap {
  position: relative;
  height: 1rem;
  background-color: #3e98f0;
  .nav {
    overflow: hidden;
    position: relative;
    .l-grade {
      position: absolute;
      left: 16px;
      top: 0px;
      width: 25px;
      height: 1rem;
      background-image: linear-gradient(to right, rgb(62, 152, 240) 0, rgba(62, 152, 240, .2) 100%)
    }
    .r-grade{
      position: absolute;
      right: .9rem;
      top: 0px;
      width: 25px;
      height: 1rem;
      background-image: linear-gradient(to left, rgb(62, 152, 240) 0, rgba(62, 152, 240, .2) 100%)
    }
    .more-menus{
      position: absolute;
      top: 2px;
      right: 0;
      background-color: rgb(62, 152, 240);
      width: 0.9rem;
      height: 0.9rem;
      .more-icon{
        line-height: 1rem;
      }
    }
    .nav-menus {
      overflow: hidden;
      height: 1.2rem;
      overflow-x: auto;
      display: flex;
      display: -webkit-flex;
      margin: 0 50px 0 17px;
      .nav-item {
        line-height: 1rem;
        font-weight: 200;
        // flex: 1;// flex-grow:1;flex-shrink:1;flex-basis:auto; 平均分配剩余空间
        flex: 0 0 25%;
        .active {
          color: #fff;
          font-weight: 500;
        }
        a {
          font-size: 0.4rem;
          color: #fff;
        }
      }
    }
  }
}

</style>
