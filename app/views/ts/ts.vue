<template>
  <div class="ts-wrap container-wrap">
    <ul class="ts-list">
    <li>
      <img class="list-logo" :src="logoUrl" alt="fui">
      <router-link class="item-name" to="/ts-list/base-data">base-data</router-link>
      <i class="view-icon icon iconfont icon-xiangyou1"></i>
    </li>
    <li>
      <img class="list-logo" :src="logoUrl" alt="fui">
      <router-link class="item-name" to="/ts-list/interface">interface</router-link>
      <i class="view-icon icon iconfont icon-xiangyou1"></i>
    </li>
    <li>
      <img class="list-logo" :src="gitLogoUrl" alt="fui">
      <a class="item-name" href="https://github.com/baggiomygod/fui">github</a>
      <i class="view-icon icon iconfont icon-xiangyou1"></i>
    </li>
  </ul>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
@Component({})
export default class interfaces extends Vue{
  // data
  logoUrl: string = '/static/images/logo/fui-1x.png'
  gitLogoUrl: string = '/static/images/logo/github.png'


}
</script>
<style lang="scss" type="stylesheet/scss" scoped>
.ts-wrap{
  .ts-list{
    width: 96%;
    margin: 0 auto;
    font-size: .5rem;
    margin-top: .5rem;
    li{
      display: flex;
      flex-flow: row nowrap;
      align-items: center; // 交叉轴垂直居中对齐
      border-bottom: 1px solid #e2e2e2;
      justify-content: space-around;
      padding: 5px;
      margin:10px;
      a,i{
        color: #000;
        &:hover{
          cursor: pointer;
        }
      }
      .list-logo{
        width: .7rem;
        height: .7rem;
        flex-grow:0;
        flex-shrink: 1;
        flex-basis: .7rem;
        border-radius: .7rem;
        // filter:grayscale(100%);
      }
      .item-name{
        flex-grow:1;
        flex-shrink:1;
        flex-basis: auto;
        text-align: left;
        margin-left: 1rem;
      }
      .view-icon{
        flex-grow:0;
        flex-shrink: 1;
        flex-basis: 1rem;
        color: #C8C8CD;
      }

    }
  }
}

</style>
