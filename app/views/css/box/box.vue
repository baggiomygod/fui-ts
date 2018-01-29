<template>
  <div class="css-box full-page fui-transitions">
    <f-close :close-type="'header'"></f-close>
    <!-- 标准盒模型 -->
    <p>content-box:总宽度=100(width)+10*2(padding)+5*2(border)+margin</p>
    <p>width = content(元素内容)</p>
    <div class="content-box" ref="contentBox">content:100px</div>
    <button @click="getContentWidth">获取盒模型宽高</button>
    <p>标准盒模型width:{{contentWidth}}</p>
    <!-- IE盒模型 -->
    <p>border-box:总宽度 = 70(content) + 10*2(padding) + 5*2(border)+margin</p>
    <p>width = content(元素内容)+padding+border</p>
    <div class="border-box" ref="borderBox">content:70px</div>
     <button @click="getBorderBoxWidth">获取盒模型宽高</button>
    <p>标准盒模型width:{{borderBoxWidth}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
@Component({})
export default class interfaces extends Vue{
  contentWidth: number = 0
  borderBoxWidth: number = 0
  getContentWidth(){
    let el: any= this.$refs.contentBox
    console.log('el:', el);
    console.log(el.getBoundingClientRect())
    console.log(window.getComputedStyle(el).width) // 只读, 获取浏览器渲染后的样式值
    console.log(el.currentStyle.width) // dom.currentStyle.width 仅IE支持
    console.log(el.style.width) // dom.currentStyle.width 仅IE支持
  }
  getBorderBoxWidth(){
    // this.contentWidth = this.$refs.borderBox.style.width
  }
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
