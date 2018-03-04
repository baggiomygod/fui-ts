<template>
      <div class="menus-wrap">
        <ul class="nav-menus">
          <li class="nav-item" v-for="item in config" :key="item.menu_name" @click="changeHeader(item.menu_name)">
            <a v-if="item.href" :href="item.href" target="_blank">{{item.menu_name}}</a>
            <router-link v-else :to="item.url" active-class="active">{{item.menu_name}}</router-link>
          </li>
        </ul>
      </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component({})
export default class NavList extends Vue {
  // props
    @Prop({default:[]})
    config: object[]
    @Prop({default: false})
    menusStatus: boolean

    changeHeader(val: string) {
      this.$emit("change-title", val)
    }
};
</script>
<style lang="scss">
.menus-wrap {
  .nav-menus {
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    background-color: rgb(62, 152, 240);
    border-top: 1px solid rgba(255, 255, 255, 0.6);

    .nav-item {
      line-height: 1rem;
      font-weight: 200; // flex: 0;// flex-grow:1(平均分配剩余空间);flex-shrink:1（如果空间不足项目缩小）;flex-basis:auto; 平均分配剩余空间
      flex: 0 0 20%; //flex-grow:0(有剩余空间也不放大)；flex-shrink:0（空间不足也不缩小） flex-basis:20%;项目占据的固定空间
      text-align: center;
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
</style>
