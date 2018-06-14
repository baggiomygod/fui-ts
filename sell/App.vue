<template>
  <div class="sell-wrap">
    <input id="name" v-model="userInfo.name" type="text" />
        <input id="psw"v-model="userInfo.password" type="text" />
        <button id="login-btn"  @click="setStorage">
          登录
        </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import login from './view/login/login.vue'
import Component from 'vue-class-component'
@Component({})
export default class App extends Vue {
  userInfo: any = {
      name:'',
      password:''
    }
  // 保存登录数据到localStorage
  setStorage(): void{
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
  }
}
</script>

<style>
  .sell-wrap{
    /* width: 100%;
    height: 100%;
    background-color: blueviolet; */
  }
</style>
