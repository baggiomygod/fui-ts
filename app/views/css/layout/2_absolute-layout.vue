<template>
  <article class="absolute-layout-wrap">
    <div class="left col">left</div>
    <div class="right col">right</div>
    <div class="center col">absolute解决方案</div>
  </article>
</template>

<script lang="ts">
import {
    Vue,
    Component
  } from 'vue-property-decorator'
  @Component({})
export default class FloatLayout extends Vue {
}

</script>
<style lang='scss' scoped>
.absolute-layout-wrap{
  position: relative;
  div{
    min-height:200px;
    &.left{
      position: absolute;
      left: 0;
      width: 200px;
      background-color: rgb(51, 51, 51);
    }
    &.right{
      position: absolute;
      width: 200px;
      background-color: rgb(33, 230, 92);
      right: 0;
    }
    &.center{
      position: absolute;
      left: 200px;
      right: 200px;
      background-color: rgb(121, 110, 115);
      margin: 0 auto;
    }
  }
}
</style>
