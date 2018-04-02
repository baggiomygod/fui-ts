<template>
  <div class="socket-wrap">
    <h3>socket.io</h3>
    <input class="ipt" v-model="echo" type="text" />
    <button class="btn" @click="websocketSend">发送</button>
    <div class="res">返回：{{response}}</div>
    <div class="text">{{isOpen ? 'ws connected' : 'closed...'}}</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { setTimeout } from 'timers'
import io from 'socket.io'
// const socket = io('http://localhost:3000');
@Component({})
export default class Socket extends Vue {
  // data
  websocket: any = null
  echo: string = ''
  response: string = ''
  isOpen: boolean = false
  // methods
  // 初始化websocket
  initWebSocket():void{
    // ws 地址
    const LOCAL_URI = 'ws://localhost:3000/nodews/fui/socket'
    // socket.on('news', function (data) {
    //   console.log(data);
    //   socket.emit('my other event', { my: 'data' });
    // });
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
