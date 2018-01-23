<template>
  <div class="layout-cup3 clearfix">
    <div class="l-cup-item l-main">main</div>
    <div class="l-cup-item l-left">left</div>
    <div class="l-cup-item l-right">right</div>
  </div>
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
/*
  思路：
  父元素这是左右的padding(父元素要设置border-box或宽度小于100%)，否则右侧显示元素会在视口之外。
  main,left,right元素都向左浮动,relative相对定位;
  main:宽度100%
  left:固定宽度、margin-left:-100%,left:-宽度值---(这只左外面局和left使之位移)
  right:固定宽度、margin-left:-100%,right:-宽度值---(这只左外面局和right使之位移)
*/
  .layout-cup3 {
    width:100%;
    // content-box会出现右侧padding不显示的问题，导致right的div显示在可是框之外（原因未知）
    box-sizing:border-box;
    padding:0 210px 0 210px;
    .l-cup-item {
      position:relative;
      float:left;
      height:200px;
    }
    .l-main{
      width:100%;
      background-color:#d1d2d3;
    }

    .l-left,.l-right{
      width:210px;
      background-color:#eee;
    }
    .l-left{
      margin-left:-100%; // 相对于border-box的content宽度
      left:-210px;
    }
    .l-right{
      margin-left:-210px;
      right:-210px;
    }
  }
</style>
