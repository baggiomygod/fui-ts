<template>
  <div>
        <input id="name" type="text" />
        <input id="psw" type="text" />
        <button id="login-btn" @click="setStorage">
          登录
        </button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
export default class Login extends Vue {
    userInfo: any = {
      name:'',
      password:''
    }
    setStorage(): void{
      localStorage.setItem('userInfo', this.userInfo)
    }
}
  // data () {
  //   return {
  //     userInfo:{
  //       name:'',
  //       password:''
  //     }
  //   };
  // },


</script>
<style lang='scss' scoped>
</style>
