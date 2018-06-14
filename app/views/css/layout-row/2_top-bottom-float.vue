<!--  上下固定 float实现 -->
<template>
  <div class="top-bottom-wrap full-page">
    <header class="layout-header layout-item" @click="back">
            <i class="close icon iconfont icon-xiangzuo1"></i>
    </header>
    <section class="layout-main layout-item">
      <h3>main...float</h3>
      <article>
        <p v-for="item in dataList" :key="item">text...</p>
      </article>
    </section>
    <footer class="layout-footer layout-item"></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class TBFloatLayout extends Vue {
    layout: string = "tb-layout"
    dataList: number[] = []
    principleImgUrls: string[] = []

    // methods
    back(): void{
          this.$router.go(-1);
    }
    created(){
      for (let i = 0 ; i < 100; i++){
        this.dataList.push(i);
      }
    }
}

</script>
<style lang='scss' scoped>
  .top-bottom-wrap{
    padding: 1rem 0;
    box-sizing: border-box;
    .layout-header,
    .layout-footer{
          height: 1rem;
          line-height: 1rem;
          background-color: #3e98f0;
          color:#fff;
    }
    // float width display
    .layout-item{
      display: block;
      float: left;
      width: 100%;
    }
    .layout-main{
      height: 100%;
      overflow: scroll;
    }
    .layout-header{
      margin-top: -1rem;
    }
    .layout-footer{
      // margin-bottom: -1rem;
    }
  }
</style>
