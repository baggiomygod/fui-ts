<template>
  <article class="layout-cup-l clearfix">
    <div class="l-left">left</div>
    <div class="l-main">main</div>
  </div>
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
  .layout-cup-l {
    width:100%;
    padding-left: 2.5rem;
    .l-left,
    .l-main {
      height: 200px;
      float: left;
    }

    .l-main {
      width: 100%;
      background-color: #eee;
    }
    
    .l-left {
      width: 2.5rem;
      margin-left: -2.5rem;
      background-color: #e2e2e2;
    }
  }
</style>
