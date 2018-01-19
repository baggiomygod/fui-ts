<template>
<div class="data-wrap list-page fui-transitions">
  <f-close :close-type="'header'"></f-close>
  <ul class="ts-list">
    <li>Provide,Inject:{{users}}</li>
    <li>Boolean   status: {{status}}</li>
    <li>String:   {{name}}</li>
    <li>Number:   {{count}}</li>
    <li>computed object: {{computedObj}}</li>
    <li>any : {{any}}</li>
    <li>unionType: {{unionType}}</li>
    <li>numArr: {{numArr}}</li>
    <li>mixArr: {{mixArr}}</li>
    <li>泛型数组genericArr: {{genericArr}}</li>
    <li>anyArr : {{anyArr}}</li>
  </ul>
  <button @click="changeData" class="data-btn">changeData</button>
</div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Inject } from 'vue-property-decorator'


@Component({})
export default class DataType extends Vue {
  // data
  @Inject('users') users // 注入
  closeType: string = 'header'
  status: boolean = false
  name: string = 'ts'
  count: number = 0;
  u: undefined = undefined
  n: null = null
  any: any = 'one'
  any2 = 'any2 string'
  unionType: number|object = {a: 'ss'}
  // 数组
  numArr: number[] = [1, 2, 3] // 数字类型的数组
  mixArr: (number | string)[] =['s', 1, 2] // 混合类型的数组
  genericArr: Array<number> = [1,2,3,4,5] // 数组泛型 Array<元素类型>
  anyArr: any[] = [1, 's', {a: 123}]

  // computed
  get computedObj(): object{
    return {
      status: this.status,
      name: this.name
    }
  }

  // methods
  changeData(): void{
    this.count++
    let count = this.count
    // this.status = 'sss' // 报错
    this.status = !this.status
    this.name = `this is ts test of base data type :${count}`

    this.any = count
    // 类型推论，虽然没有指定类型，但是ts会根据赋值的类型给定默认类型。如果不赋值就是any类型
    // this.any2 = 2

    this.unionType = 123

  }

  // 生命周期
  mounted(){
    setTimeout(() => {
      this.name = 'ts is typescript'
    }, 1500)
  }
}
</script>
<style lang="scss">
@import '../ts.scss';
.data-wrap{
}
</style>
