<template>
  <article class="grid-layout-wrap">
    <div class="left col">left</div>
    <div class="center col">grid解决方案</div>
    <div class="right col">right</div>
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
.grid-layout-wrap{
  display: grid;
  width:100%;
  grid-template-rows: 200px; // 行高
  grid-template-columns: 200px auto 200px; // 3列
  div{
    min-height:200px;
    &.left{
      background-color: rgb(209, 80, 80);
    }
    &.right{
      background-color: rgb(188, 230, 38);
    }
    &.center{
      background-color: rgb(63, 61, 190);
    }
  }
}
</style>
