<template>
  <div class="css-box full-page fui-transitions">
      <f-close :close-type="'header'"></f-close>
    <p>content-box:总宽度=100(width)+10*2(padding)+5*2(border)+margin</p>
    <p>width = content(元素内容)</p>
    <div class="content-box">content:100px</div>
    <p>border-box:总宽度 = 70(content) + 10*2(padding) + 5*2(border)+margin</p>
    <p>width = content(元素内容)+padding+border</p>
    <div class="border-box">content:70px</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
@Component({})
export default class interfaces extends Vue{

}
</script>
<style lang="scss" type="stylesheet/scss" scoped>
.css-box{
  .content-box{
    background-color:#e2e2e2;
    width:100px;
    height:50px;
    padding:10px;
    margin:0 auto;
    border:5px solid #333;
  }
  .border-box{
    box-sizing:border-box;
    width:100px;
    height:50px;
    padding:10px;
    border:5px solid #eee;
    margin:0 auto;
  }
}
</style>
