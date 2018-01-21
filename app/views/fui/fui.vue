<template>
  <div class="fui-wrap container-wrap">
      <f-list :list-data="listData" :main-url="mainUrl"></f-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import fuiList from './fui.config'
@Component({})
export default class interfaces extends Vue{
  listData: object[] = fuiList.list
  mainUrl: string = 'fui'
}
</script>
<style lang="scss" type="stylesheet/scss" scoped>
</style>
