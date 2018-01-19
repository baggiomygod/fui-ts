<template>
    <div class="inter-wrap list-page">
      <f-close :close-type="'header'"></f-close>
      <ul class="ts-list">
        <li>interface:{{baggio}}</li>
        <li>interface array:{{interArr}}</li>
      </ul>
      <button @click="changeId" class="data-btn">changeId</button>
    </div>
</template>
<script lang="ts">
  import {
    Vue,
    Component,
    Provide
  } from 'vue-property-decorator'
  interface Person {
    readonly id: number,
      name: string, // 确定
      age: number,
      interest ? : string,
      count ? : number, // 可选
      [propName: string]: any // 任意属性---当有任意属性时，确定/可选属性必须是任意属性的子属性
  }

  interface NumberArray {
    [index: number]: number
  }
  @Component({})
  export default class interfaces extends Vue {
    // data
    baggio: Person = {
      id: 10,
      name: 'baggio',
      age: 50,
      count: 205,
      interest: 'football'
    }
    interArr: NumberArray = [1, 2, 3]

    // methods
    changeId() {
      // this.baggio.id = 15; // readonly 只读属性
      this.baggio.age = 51;
    }
  }
</script>
<style lang="scss">
@import '../ts.scss';
.inter-wrap{
}
</style>
