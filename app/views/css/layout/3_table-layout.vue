<template>
  <article class="table-layout-wrap">
    <div class="left col">left</div>
    <div class="center col">absolute解决方案</div>
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
.table-layout-wrap{
    width: 100%;
    display: table;
    height: 200px;
  div{
    min-height:200px;
    &.left{
      width: 200px;
      background-color: rgb(209, 80, 80);
      display: table-cell;
    }
    &.right{
      width: 200px;
      background-color: rgb(188, 230, 38);
      display: table-cell;

    }
    &.center{
      // width: 100%;
      display: table-cell;

      background-color: rgb(63, 61, 190);
    }
  }
}
</style>
