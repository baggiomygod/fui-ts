## MVVM
  1. 了解MVVM吗？

  2. 谈谈你对MVVM的认识
    1. MVC
      补充...
    2. MVVM
      Model<--->ViewModel<--->View

    3. mvvm,mvc区别

  3. 双向绑定的原理
    - Object.defineProperty用法

    - reflect.defineProperty与Object.defineProperty区别
      reflect.defineProperty：返回布尔值
      Object.defineProperty：返回对象
  4. 使用什么设计模式
      - vue--观察者模式
        data--Observer--dep--watch--view
      - 写一个
  5. 生命周期是什么
      - new Vue()

        beforeCreate
        created

        beforeMounted
        mounted----这个之后可以操作DOM对象

        beforeUpdate
        updated

        boforeDestroy
        destroyed
  6. 看过源码吗?
    1. new Vue()：observer Dep Wather;
    2. 首先拿到配置属性---options
    3. observe 监听所有的数据data
    4. Compile编译模板，识别指令、双向绑定v-model、自定义事---> 调用Wather
    5. Wather根据不同的类型制定不同的wather,如input--双向绑定，div等单向绑定

