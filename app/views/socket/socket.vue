<template>
  <div class="socket-wrap">
    <input class="ipt" v-model="echo" type="text" />
    <button class="btn" @click="websocketSend">发送</button>
    <div class="res">返回：{{response}}</div>
    <div class="text">{{isOpen ? 'ws connected' : 'closed...'}}</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { setTimeout } from 'timers'

@Component({})
export default class Socket extends Vue {
  // data
  websocket: any = null
  echo: string = ''
  response: string = ''
  isOpen: boolean = false
  // methods
  // 实际调用的方法
  threadPoxl():void{
    // 参数
    const agentData: string = "mymessage"

    // 若ws开启状态
    if (this.websocket.readyState === this.websocket.OPEN) {
      this.websocketSend();
    }
    // 若ws正在开启状态，则等待200ms
    else if (this.websocket.readyState === this.websocket.CONNECTING) {
      setTimeout(() => {
        this.websocketSend()
      }, 300);
    }
    // 若未开启， 则等待500ms
    else {
      this.initWebSocket()
      setTimeout(() => {
        this.websocketSend()
      }, 500);
    }
  }
  // 初始化websocket
  initWebSocket():void{
    // ws 地址
    const ECHO_URI = 'ws://echo.websocket.org'
    const LOCAL_URI = 'ws://localhost:3000/nodews/fui/socket'

    this.websocket = new WebSocket(ECHO_URI)
    // this.websocket = new WebSocket(LOCAL_URI)
    this.websocket.onopen = this.websocketOnopen;
    this.websocket.onmessage = this.websocketOnmessage
    this.websocket.onclose = this.websocketClose
    // this.threadPoxl()
  }
  websocketOnopen(){
      console.log('ws open')
      this.isOpen = true
  }
  // 数据接收
  websocketOnmessage(e):void{
    this.response = e.data
    console.log('receive message from ws server:', e.data)
  }
  // 数据发送
  websocketSend():void{
    this.websocket.send(this.echo)
  }
  // 关闭
  websocketClose(e):void{
    this.isOpen = false
    console.log('socket closed:', e.code)
  }

  // created
  created(){
    this.initWebSocket();
  }
}
</script>
<style lang="scss">
  .socket-wrap{
    font-size: 1rem;
    .ipt{
      width: 90%;
      height: 1rem;
      border:1px solid #aa9898;
      font-size: 1rem;
    }
    .res{
      font-size: 1rem;
    }
    .btn{
      font-size: .4rem;
      padding: 3px;
      color: #fff;
      border-radius: 4px;
      background-color: cornflowerblue;
    }
    .text{
      font-size: .3rem;
    }
  }
</style>
