<!--  上下固定 float实现 -->
<template>
  <div class="top-bottom-wrap full-page">
    <header class="layout-header layout-item" @click="back">
            <i class="close icon iconfont icon-xiangzuo1"></i>
    </header>
    <section class="layout-main layout-item">
      <article class="main-content">
        <p v-for="item in dataList" :key="item">text...</p>
      </article>
    </section>
    <footer class="layout-footer layout-item">footer</footer>
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
      for (let i = 0 ; i < 10; i++){
        this.dataList.push(i);
      }
    }
}

</script>
<style lang='scss' scoped>
  .top-bottom-wrap{
    min-height: 100vh;
    display:table;
    .layout-main{
      display:table-row;
      .main-content{
        overflow: scroll;
        height: calc(100vh - 2rem); // 计算高度
      }
    }
    .layout-header,
    .layout-footer{
          display:table-row;
          height: 1rem;
          line-height: 1rem;
          background-color: #3e98f0;
          color:#fff;
    }

  }
</style>
