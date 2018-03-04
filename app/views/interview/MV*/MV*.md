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
    3. 然后调用observe，传入data----监听所有的数据data
        observer中先遍历data,并调用defineReactive函数，函数中判断data是否有嵌套，如果有嵌套递归，保证每个值都添加监听。

        然后，对每个data的key,设置defineProperty：
          - 在get函数中，判断watcher实例是否存在，如果存在就添加到Dep观察者列表。
          - 在set函数中，判断值是否改变，如果改变，通知监听列表调用update，更新数据

    4. Compile编译模板，识别指令、双向绑定v-model、自定义事---> 调用Wather

        编译过程中，根据不同的指令、事件、文本节点
        - 如果是v-model,实例化watcher,并传入需要监听的key名。
        - 事件： 添加事件锦亭
        - text：直接显示

    5. 实例化Watcher

        watcher中调用get函数,将当前watcher实例赋值给Dep.target属性, 然后访问以下vue实例的data[key]，此时就触发了observer中defineReactive的defineProerty下的get函数，然后判断实例存在就载入到观察者列表

    6. 当监听的值改变时，触发observer中defineProperty给每个监听对象添加的set函数，在Dep观察这列表中找到这个监听的对象，如果值改变通知观察者列表更新值。
