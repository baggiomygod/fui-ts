<template>
  <article class="layout-cup-r clearfix">
    <div class="l-main">main</div>
    <div class="l-right">right</div>
  </article>
</template>

<script lang="ts">
  import {
    Vue,
    Component
  } from 'vue-property-decorator'
  // export default{}
  @Component({})
  export default class Layout extends Vue {
    layout: string = 'shengbei2-1'
    principleImgUrls: string[] = [ // 布局原理图（后续加图片预览组件）
      './principle/shengbei2/shengbei2-1.png',
      './principle/shengbei2/shengbei2-2.png',
      './principle/shengbei2/shengbei2-3.png',
    ]
  }
</script>

<style lang="scss">
  // 父元素设置padding:210px;
  .layout-cup-r {
    width:100%; // 为什么100% 右侧会超出可视框？
    padding-right: 2.5rem;
    box-sizing:border-box;
    .l-main {
      width: 100%;
      float: left;
      height: 200px;
      background-color: #eee;
    }
    .l-right {
      width: 2.5rem;
      height: 200px;
      background-color: #d2d2d2;
      float: right;
      margin-right: -2.5rem;
    }
  }
</style>
