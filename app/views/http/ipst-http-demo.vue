<template>
<div class="ipst-http-wrap full-page fui-transitions">
  <f-close :close-type="'header'"></f-close>
  <div>
    <button class="btn" @click="sendFetch">send</button>
    {{response}}
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Provide, Inject } from 'vue-property-decorator'
import ipstService from './service.js'
@Component({})
export default class DataType extends Vue {
  // data
  response: object = {
    result: {},
    content:{}
  }

  // methods
  sendFetch () {
    ipstService.getCars().then(res => {
      this.response = res
    }).catch(err => {
      alert('请求超时')
    })
  }
}
</script>
<style lang="scss">
.btn{
      font-size: .4rem;
      padding: 3px;
      color: #fff;
      border-radius: 4px;
      background-color: cornflowerblue;
    }
</style>
