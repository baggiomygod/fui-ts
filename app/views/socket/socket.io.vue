<template>
  <div class="socket-wrap">
    <h3>socket.io</h3>
    <input class="ipt" v-model="echo" type="text" />
    <button class="btn" @click="handleButton">{{isOpen ? '发送' : '连接'}}</button>
    <div class="res">返回：{{response}}</div>
    <div class="text">{{isOpen ? 'ws connected' : 'closed...'}}</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { setTimeout } from 'timers'
import io from 'socket.io-client'

let socket: any = {}
// const socket = io('http://localhost:3000');
@Component({})
export default class Socket extends Vue {
  // data
  echo: string = ''
  response: string = ''
  isOpen: boolean = false
  // methods
  // 初始化websocket
  initWebSocket():void{
    console.log('initWebSocket')
    socket = io.connect('http://localhost:8089')
    // socket = io.connect('ws://localhost:3030')
    console.log('socket', socket)
    socket.on('news', (data) => {
      console.log('收到数据:', data); // 接收到的数据
      this.response = data
      this.isOpen = true
    });
  }
  websocketSend():void{
      socket.emit('my other event', { my: 'data' }); // 前端传给后端的数据
  }
  handleButton (): void {
    let handleMehtods = this.isOpen ? 'websocketSend' : 'initWebSocket'
    this[handleMehtods]()
  }
  // created
  created(){
    // this.initWebSocket();
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
