<!-- 上下高度固定 中间自适应布局 绝对定位实现-->
<!-- 1. header/footer 对决定位或fixed 固定高度1rem
     2. main border-box+margin-top:1rem + padding-bottom:2rem + height:100%-->
<template>
  <div class="top-bottom-wrap full-page">
    <header class="header row" @click="back">
      <i class="close icon iconfont icon-xiangzuo1"></i>
    </header>
    <section class="main row">
      <h3>main...</h3>
      <article>
      <p>main position</p>
      <p>main position</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main position</p>
      <p>main position</p>
      <p>main position</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main position</p>
      <p>main position</p>
      <p>main position</p>
      <p>main position</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main position</p>
      <p>main position</p>
      <p>main position</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main XXXXX</p>
      <p>main XXXXXX</p>
      <p>main position</p>
      <p>main position</p>
      <p>main position</p>
      </article>
    </section>
    <footer class="footer row"></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class TopBottomLayout extends Vue {
  layout: string = "tb-layout";
  principleImgUrls: string[] = [];

  // methods
  back(): void{
        this.$router.go(-1);
  }
}
</script>
<style lang='scss' scoped>
.top-bottom-wrap {
  .row {
    display: block;
  }
  .header,
  .footer {
    width: 100%;
    position: absolute;
    height: 1rem;
    background-color: #3e98f0;
  }
  .header {
    top: 0;
    color: #fff;
    line-height: 1rem;
  }
  .main {
    box-sizing: border-box;
    margin: 1rem 0;
    padding-bottom: 2rem;
    height: 100%; // 为了滚动
    background-color: #d9dfe6;
    overflow: scroll;
  }
  .footer {
    bottom: 0;
  }
}
</style>
