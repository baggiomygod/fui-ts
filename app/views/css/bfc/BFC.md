# BFC （block formatting context 块级格式化上下文）
文档流分：定位流、浮动流和普通流三种。
- 普通流（formatting context---FC，即BFC中的FC）--- 格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定其子元素如何布局，以及和其他元素之间的关系和作用。

常见的FC有：
- BFC： block formatting context,块级格式化上下文，用于块级盒子的一块渲染区域。BFC是指一个独立的块级渲染区域，该区域拥有一套渲染规则来约束盒子的布局，且与区域外部无关。
- IFC
- GFC
- FFC

### 1. BFC触发条件
  1. 根元素---HTML
  2. float 不为none
  3. overflow 不为visible，即auto、hidde、scroll时
  4. display: inline-block/table-cell/table-caption（table也能设置成BFC因为table会默认生成一个匿名的table-cell）/flow-root/flex/inline-flex/grid/inline-grid
  5. position: absolute/fixed
  6. column-count: 不为auto;
  7. column-width: 不为auto
  8. colunm-span: all

#### BFC作用
  BFC是页面上一个隔离的独立容器，容器里的子元素不会影响到外面的元素，反之亦然。
  - BFC可以阻止元素被浮动元素覆盖
  - 可以包含浮动元素
  - 消除相邻元素margin重叠
  - 解决高度塌陷---子元素是浮动元素也参与高度计算

  ### BFC的约束规则
  - 生成BFC元素的子元素会一个接一个的放置，在垂直方向上它们的起点是一个包含块的顶部，两个相邻元素之间的距离取决于margin属性
    > (BFC元素内部的元素margin会重叠，即属于同一个BFC的相邻子元素margin会重叠---可以对子元素加BFC的父元素取消重叠)
  - 每个元素的左边距与包含快的边界相接触。即使浮动元素也是如此。----BFC中的子元素不会超出它的包含快。而position:absolute的元素可以超出它的包含块
  - BFC区域不会与float元素区域重叠
  - 计算元素高度时，浮动元素也参与计算---解决高度塌陷问题
