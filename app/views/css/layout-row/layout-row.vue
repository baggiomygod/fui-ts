<!-- 上下高度固定 中间自适应布局 -->
<template>
  <div class="layout-wrap full-page">
        <f-close :close-type="'header'"></f-close>
      <f-list :list-data="listData" :main-url="mainUrl"></f-list>
  </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
  } from 'vue-property-decorator'
  @Component({})
  export default class TopBottomLayout extends Vue {
    layout: string = 'tb-layout'
    mainUrl: string = 'interview/layout-row';
    listData: object[] = [{
              'name': '上下固定、中间自适应',
              'url': 'tb-layout'
            }]
  }
</script>
<style lang='scss' scoped>
.top-bottom-wrap{
  .row{
    display: block;
  }
  .header, .footer{
    height: 1rem;
    background-color: #3e98f0;
  }
}
</style>
