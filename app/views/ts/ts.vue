<template>
  <div class="ts-wrap container-wrap">
      <f-list :list-data="listData" :main-url="mainUrl"></f-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import tsList from './ts.config'
@Component({})
export default class interfaces extends Vue{
    listData: object[] = tsList.list
    mainUrl: string = 'ts-list'
}
</script>
<style lang="scss" type="stylesheet/scss" scoped>
</style>
