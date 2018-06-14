# vue interview
  ### 1. 什么是mvvm
    MVVM(Model-View-ViewModel的缩写)。mvvm是一种设计思想.
      - model层:数据模型
      - view层:视图层
      - ViewModel:是一个同步view和Model的对象

    在MVVM架构下，view和Model之间并没有直接的联系，而是通过viewModel进行交互。

    MVVM框架由于view层和model层之间的数据同步工作是自动完成的，因此我们只需要关注业务逻辑，不需要手动操作DOM。

  ### 2. MVVM和MVC的区别
    MVC:Model-View-Controller,
      1.View传送指令到Controller（也可以用户直接向Controller发送指令）
      2. Controller完成业务逻辑后，要求Model改变状态
      3. Model将新的数据发送到View,实现视图更新
    而MVVM主要解决MVC框架大量DOM操作的问题，它采用数据双向绑定，当Model更新自动反应到view,view上数据改变也会自动同步到Model。（其中的DOM操作是由框架完成的）


  ### 3. vue的有点是什么
    1. 体积小
    2. 可重用性：易于组件化开发，
    3. 双向数据绑定：mvvm框架变了大量的DOM操作，可以让开发者专注于业务开发。
    4. 较好的性能：

  ### 4. VUE生命周期
    1. beforeCreate:vue实例的挂载元素，el和数据对象data都为undefined, 还未初始化
    2. created: vue实例的数据对象data已初始化，el还没有
    3. beforeMounted: 完成data和el的初始化，未挂载完成，
    4. Mounted:vue实例挂载完成挂载，data.message成功渲染
    5. boforeUpdate: 数据变化时，更新数据前
    6. Updated: 数据变化，更新完成
    7. boforeDestory
    8. destoryed: 执行destory后，对data的改变不会触发周期函数

  ### 5. vue组件之间如何传值
     1. props
     2. emit事件传值
     3. vuex
     4. this.$refs.child.data, 父元组件访问子组件的值

  ### 6. 路由跳转
    ```
      <router-link :to="/page1">

      router.push('page1');
    ```

  ### 7. vuex
    vue中的状态管理

  ### 8. vue 如何实现按需加载，配合webpack
    http://blog.csdn.net/wang1006008051/article/details/78066810

    https://router.vuejs.org/zh-cn/advanced/lazy-loading.

    https://cn.vuejs.org/v2/guide/components.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
