<template>
  <div class="inter-wrap">
    <f-list :list-data="listData" :main-url="mainUrl"></f-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import konwledgeList from './konwledge'
@Component({})
export default class interfaces extends Vue{
  listData: object[] = konwledgeList.list
  mainUrl: string = 'interview'
}
</script>
<style lang="scss" type="stylesheet/scss" scoped>
</style>
