<template>
  <div class="css-box full-page fui-transitions">
    <f-close :close-type="'header'"></f-close>
    <h2>1. 盒模型</h2>
    <section>
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
    </section>

    <h2>2.BFC使外编辑不重叠</h2>
    <section>
      <p class="box-b"></p>
      <div style="overflow:hidden">
        <p class="box-f">父元素设置：overflow:hidden</p>
      </div>
      <div>
        <p class="box-c">2</p>
      </div>
    </section>

    <h2>3.float布局中，使用BFC防止元素重叠</h2>
    <section class="layout-no-bfc">
      <h3>不使用BFC</h3>
      <div class="left"></div>
      <div class="right">
        <p>float布局时，浮动元素若有空间剩余，会重叠渲染</p>
      </div>
    </section>
    <section class="layout">
      <h3>使用BFC</h3>
      <div class="left"></div>
      <div class="right">用BFC可以解决以上问题，BFC元素不会与float元素重叠</div>
    </section>

    <h2>3. BFC清除浮动</h2>
    <h3>1. 使用BFC:BFC子元素即使是float,父元素也会参与高度计算</h3>
    <section class="clear">
      <div class="float">浮动元素</div>
    </section>
    <div style="clear:both;">clear</div>
    <h3>2.不使用BFC，父级元素遇到浮动元素时，父级元素不参与高度计算</h3>
    <section class="clear-no-bfc">
      <div class="float">浮动元素(父元素height为0)</div>
    </section>
<br>
<br>
<br>
<br>
<br>
    <section class="bfc-test">
      <h3>BFC TEST</h3>
      <div class="float-div">float</div>
      <div class="bfc-div">BFC元素</div>
    </section>

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

  .box-b,.box-f{
    height: 20px;
    background-color: red;
    margin: 10px auto;
  }
  .box-c{
    height: 20px;
    background-color: rgb(166, 197, 25);
    margin: 10px auto;
  }

  .layout-no-bfc{
    background-color: #eee;
    .left{
      float: left;
      width: 100px;
      height: 100px;
      background-color: #333;
    }
    .right{
      height: 130px;
      background-color: #ff0
    }
  }
  .layout{
    background-color: #eee;
    .left{
      float: left;
      width: 100px;
      height: 100px;
      background-color: #333;
    }
    .right{
      height: 130px;
      background-color: #ff0;
      overflow: auto; // 或hidden
    }
  }
}

.clear-no-bfc{
  background-color: #ff0;
  .float{
    float: left;
    font-size: 30px;
  }
}
.clear{
  background-color: #ff0;
  float: left;
  .float{
    float: left;
    font-size: 30px;
  }
}

.bfc-test{
  .bfc-div{
    width: 200px;
    height: 120px;
    background-color: #ff0;
    // display: table-caption; // table-cell inline-block
    // position: fixed;  // absolute
    // float: left; // right---不为none
    overflow: auto; // hidden scroll---不为visible
  }
  .float-div{
    width: 100px;
    height: 100px;
    background-color: #e2e;
    float: left;
  }
}
</style>
