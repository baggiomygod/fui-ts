<!-- 上下高度固定 中间自适应布局 绝对定位实现-->
<!-- 1. header/footer 对决定位或fixed 固定高度1rem
     2. main border-box+margin-top:1rem + padding-bottom:2rem + height:100%-->
<template>
  <article class="top-bottom-wrap full-page">
    <div class="header row">
      <router-link class="item-name" :to="'/interview'">back</router-link>
    </div>
    <div class="main row">
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
    </div>
    <div class="footer row"></div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class TopBottomLayout extends Vue {
  layout: string = "tb-layout";
  principleImgUrls: string[] = [];
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
