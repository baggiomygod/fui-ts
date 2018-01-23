<template>
  <div class="layout-wrap full-page">
    <f-close :close-type="'header'"></f-close>
    <div class="layout-item">
      <h3>圣杯2列布局-1</h3>
      <f-layout-left></f-layout-left>
    </div>
    <div class="layout-item">
      <h3>圣杯2列布局-2</h3>
      <f-layout-right></f-layout-right>
    </div>
    <div class="layout-item">
      <h3>圣杯3列布局1</h3>
      <f-layout-cup></f-layout-cup>
    </div>
    <div class="layout-item">
      <h3>圣杯3列布局2</h3>

    </div>
    <div class="layout-item">
      <h3>圣杯3列布局3</h3>

    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import shengbei1 from './shengbei1.vue'
import shengbei2 from './shengbei2.vue'
import shengbei3 from './shengbei3.vue'
@Component({
  components:{
    'f-layout-left': shengbei1,
    'f-layout-right': shengbei2,
    'f-layout-cup': shengbei3,
  }
})
export default class Layout extends Vue{
  layout: string = 'layout'
}
</script>
<style lang="scss">
  .layout-wrap{
    .layout-item{
      width:100%;
      height:300px;
    }
  }
</style>
