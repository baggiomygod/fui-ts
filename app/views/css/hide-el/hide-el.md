
### display
  - none
    隐藏元素，不占页面中的任何空间，让元素彻底消失

  display:none;
    1. 隐藏产生reflow(重排),repaint(重绘)，
    2. 如果设置none的元素有子元素，那么这些子元素全部不可见。
### visibility
  - hidden
    元素依然占用页面空间，单不可见

  visibility:hidden；
    1. 没有引起reflow和repaint,
    2. 如果设置为hidden的元素有子元素，分2中情况
        - 子元素设置：visibility:visible，那么子元素仍然可见
        - 子元素：未设置，那么子元素一起被隐藏


### 其他隐藏元素的方法
1. 高度0，hidden
```
  .target { height:0; overflow:hidden;} // 如果有默认margin需要置为0，否则仍占空间
```

2. 移出可以框
```
  {
    position: absolute;
    top: -999px;
  }
```
3. 设为透明
```
  opacity:0;
```
