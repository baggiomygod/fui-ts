<template>
  <article class="float-layout-wrap">
    <div class="left col">left</div>
    <div class="right col">right</div>
    <div class="center col">浮动解决方案</div>
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
.float-layout-wrap{
  // padding: 0 200px;
  div{
    min-height:200px;
    &.left{
      float: left;
      width:200px;
      background-color:rgb(209, 87, 87);
    }
    &.right{
       float: right;
       width:200px;
      background-color:rgb(158, 189, 138);
    }
    &.center{
      background-color:rgb(82, 46, 141);
    }
  }
}
</style>
