# css 盒子模型
### 1. 标注盒模型
  width:100px----content的宽度
  总宽度= content + padding + border + margin
  ```
  默认是box-sizing: content-box
  ```
### 2. IE盒模型
  width:100px--- content + padding + border
  如：70(content) + 5*2(padding) + 10*2(border)
  ```
  box-sizing:border-box
  ```

### 3. js如何获取盒模型的宽和高
  1. dom.style.width/height---只能获取内联样式设置的款和高
  2. dom.currentStyle.width/height---只支持IE，获取浏览器渲染后的宽和高
  3. window.getComputedStyle(dom).width/height---兼容性好
  4. dom.getBoundingClientStyle()---获取元素的绝对位置 top、left、width、height
### 4. 根据盒模型截止边距重叠

### 5. BFC 块级格式化上下文
边距重叠解决方案

  1. BFC原理：
    - BFC垂直方向的边距会重叠
    - BFC的区域不会与浮动元素的box重叠---清除浮动
    - BFC在页面是一个独立的容器（外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素）
    - 计算BFC高度时 浮动元素也会参与计算

  2. 如何创建BFC
    - overflow: hidden，auto(不为visible)可以创建BFC
    - float不会null
    - position的值不是static或relative,  如：absolute fixed是创建了BFC
    - disply:inline-box,table,table-cell...table相关属性都可以创建BFC

  3. BFC的使用场景
    - 清除浮动---父元素的子元素浮动时。使用BFC可以使为BFC的父元素元素参与高度计算---原理是什么？
    - float布局时， 使用BFC可以方式float元素重叠---原理是什么？
    - BFC可以让外边距不重叠---原理是什么？
