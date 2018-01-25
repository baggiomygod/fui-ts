<template>
  <div class="layout-wrap full-page">
    <f-close :close-type="'header'"></f-close>
    <section class="layout-item">
      <h3>圣杯2列布局-1(float, margin-left)</h3>
      <f-layout-left></f-layout-left>
    </section>
    <section class="layout-item">
      <h3>圣杯2列布局-2(float, margin-left)</h3>
      <f-layout-right></f-layout-right>
    </section>
    <section class="layout-item">
      <h3>圣杯3列布局1(float, margin-left)</h3>
      <f-layout-cup></f-layout-cup>
    </section>
    <section class="layout-item">
      <h3>双飞翼布局(float, margin-left)</h3>
      <f-double-wing></f-double-wing>
    </section>
    <section class="layout-item">
      <h3>float布局(float)</h3>
      <f-float-layout></f-float-layout>
    </section>
     <section class="layout-item">
      <h3>绝对定位布局(absolute)</h3>
      <f-absolute-layout></f-absolute-layout>
    </section>
    <section class="layout-item">
      <h3>table布局(table, table-cell)</h3>
      <f-table-layout></f-table-layout>
    </section>
    <section class="layout-item">
      <h3>flex布局</h3>
      <f-flex-layout></f-flex-layout>
    </section>
    <section class="layout-item">
      <h3>网格布局(grid)</h3>
      <f-grid-layout></f-grid-layout>
    </section>

  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import shengbei1 from './shengbei1.vue'
import shengbei2 from './shengbei2.vue'
import shengbei3 from './shengbei3.vue'
import doubleWing from './double-wing.vue'
import flexLayout from './4_flex-layout.vue'
import floatLayout from './1_float-layout.vue'
import absoluteLayout from './2_absolute-layout.vue'
import tableLayout from './3_table-layout.vue'
import gridLayout from './5_grid-layout.vue'
@Component({
  components:{
    'f-layout-left': shengbei1,
    'f-layout-right': shengbei2,
    'f-layout-cup': shengbei3,
    'f-double-wing': doubleWing,
    'f-flex-layout': flexLayout,
    'f-float-layout': floatLayout,
    'f-absolute-layout': absoluteLayout,
    'f-table-layout': tableLayout,
    'f-grid-layout': gridLayout
  }
})
export default class Layout extends Vue{
  layout: string = 'layout'
}
</script>
<style lang="scss">
  .layout-wrap{
    overflow:scroll;
    .layout-item{
      width:100%;
      height:300px;
    }
  }
</style>
