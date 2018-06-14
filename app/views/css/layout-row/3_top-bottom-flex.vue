<!--  上下固定 float实现 -->
<template>
  <div class="top-bottom-wrap full-page">
    <header class="layout-header layout-item" @click="back">
            <i class="close icon iconfont icon-xiangzuo1"></i>
    </header>
    <section class="layout-main layout-item">
      <h3>main...flex</h3>
      <article>
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
      for (let i = 0 ; i < 100; i++){
        this.dataList.push(i);
      }
    }
}

</script>
<style lang='scss' scoped>
  .top-bottom-wrap{
    min-height: 100vh;
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .layout-main{
       // flex-grow:1----有剩余空间放大；flex-shrink:1 空间不足缩小； flex-basis:auto
      flex: 1 1 auto;
      overflow: scroll;
    }
    .layout-header,
    .layout-footer{
          // flex-grow: 0; // default:0---有剩余空间也不放大
          // flex-shrink:1; // default:1---空间不足时缩小
          // flex-basis: 1rem; // default:auto---元素本来的大小
          // flex: 0 1 auto; //默认值
          height: 1rem;
          line-height: 1rem;
          background-color: #3e98f0;
          color:#fff;
    }

  }
</style>
