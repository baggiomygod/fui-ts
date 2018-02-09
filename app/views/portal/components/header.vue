<template>
  <header class="app-header">
    <a class="icon-header">
      <i class="icon-l icon iconfont">&#xe75e;</i>
    </a>
    <h1 class="header-flex">{{title}}</h1>
    <a class="icon-header">
      <router-link to="/search"><i class="icon-r icon iconfont">&#xe752;</i></router-link>
    </a>
  </header>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({})
export default class Header extends Vue {
  @Prop({default: ''})
  title: string
  /*
   iframe+hash标识符,验证跨域通信
   父页面：interview/http/origin.html
  */
  checkHashChange(){
    let hash = window.location.hash;
    this.title = hash;
  }
  mounted(){
    window.onhashchange = this.checkHashChange;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="stylesheet/scss" scoped>
.app-header {
  position: relative;
  overflow: hidden;
  height: 1rem;
  background-color: #3e98f0;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  .header-flex {
    font-size: .7rem;
    line-height:1rem;
  }
}



h1,
h2 {
  line-height: 1rem;
  font-weight: normal;
  text-align: center;
  color: #fff;
}
</style>
