## 渲染机制
  ### 1. DOCTYPE及作用
    http://blog.csdn.net/taoge1024/article/details/70162071
    ##### DTD 文档类型定义---是一套关于标记符的语法规则
    > 告诉浏览器页面是什么文档类型，浏览器根据DTD判断用什么引擎或规则来渲染。

      DTD(document type definition, 文档类型定义)是**一系列的语法规则**，用来定义XML或(X)HTML的文件类型。浏览器会使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式。

    ##### DOCTYPE
      > 告知浏览器的解析器用什么文档标准（DTD document type definition）解析这个页面
      > DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

      **DOCTYPE是用来声明文档类型和DTD规范的**，一个主要用途便是文件的合法性验证。如果文件代码不合法，那么浏览器解析时便会出一些错误。

      <!DOCTYPE html> HTML5 不基于SGML，所以不需要引用 DTD。
        > 但是需要doctype来规范浏览器的行为(让浏览器按照它们应该的方式来运行)。 而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
      HTML4.01 严格模式---不包括展示性和启用的元素。
      HTML4.01 普通模式

    #### 标准模式和兼容模式的区别
      - **标准模式**的排版和js运作模式都是以该浏览器支持的最高标准运行
      - **兼容模式**：页面已宽松的向后兼容的方式，模拟老式浏览器的行为防止站点无法打开

    ### DOCTYPE DTD总结
      - DOCTYPE告诉浏览器页面是用的什么DTD，DTD是一系列的语法规则，浏览器根据DTD判断用什么规则或引擎解析页面。
      - html5 不基于SGML不需要声明DTD，浏览器安它应该的方式来运行
  ### 2. 浏览器渲染过程
    浏览器中输入url到页面显示的过程中的一部分）
    浏览器拿到HTML文档之后，
      - 将HTML解析成DOM Tree
      - css解析成CSS tree
        - 整合前两者为render tree
            - 浏览器渲染

  ### 3. 重排Reflow
    DOM结构中的各个元素都有自己的盒子，这些都需要浏览器根据各种样式来计算，并根据计算结果将元素放到它该出现的位置-----这个过程reflow（重排）

    **触发Reflow**
      - 增加、删除、修改DOM节点，会导致重绘制或重排
      - 当移动DOM位置，或动画
      - 修改CSS样式
      - Resize窗口时，或滚动时
      - 修改页面默认字体时

  ### 4. 重绘Repaint
      当各种盒子的位置、大小、属性（color,font-size等）确认以后，浏览器会把这些元素按照各自的特性绘制一遍

    **触发重绘**
      - DOM改动
      - CSS改动

    如何减少repaint：DocumentFragment
      把多个DOM节点，放在一个文档片段，一次性加入到DOM树中

  ### 5. 布局layout


## js运行机制
  ### 1. 单线程，异步
    1. js单线程：在同一时间只能做一件事。
    2. 任务队列：
      - 同步任务:
      - 异步任务：setTimeout,setInterval
        **遇到异步任务先挂起**，处理后面的同步任务(多个)，任务队列空闲后再去执行异步任务。
    ```
      console.log(1);
      setTimeout(() => {
        console.log('异步任务2');
      }, 0);
      console.log(3);
    ```
    1,3,异步任务2

    示例2：
        **遇到异步任务先挂起**，处理后面的同步任务(多个)，任务队列空闲后再去执行异步任务。
    ```
      console.log(1);
      setTimeout(() => {
        console.log(异步任务3);
      }, 0);
      console.log(2);
    console.log(4);
    // for循环执行完毕后 才会打印3
    for(let i = 0 ; i < 10000; i++){
      console.log('for...');
    }
    ```
    1，2，4， for...(10000), 异步任务3

    以下代码只会打印出A
    示例1
    ```
      console.log('A');
      while(true){}
      console.log('B');
    ```
    示例2
    ```
      console.log('A');
      setTimeout(() => {
        console.log('B');
      });

      while(true){}
    ```
   输出 A

  ### 异步任务的放入时间和执行时间
    异步任务，到了设定的时间才会将要制定的函数放到异步任务中
    ```
      for(var i = 0;i< 4; i++){
        setTimeout(()=>{
          console.log(i);
        }, 500)
      }
    ```
    结果： 打印4次 4
      - i一共被++ 5次，第四次i=4,不再执行setTimeout;
      - js遇到异步函数时，先不执行，到了时间才将其放到异步任务中。
      因此，以上是循环完毕后，统一执行大console.log(i); 4, 4, 4

  ### 1. 如何理解js单线程：
    同一时间只能执行一个任务
  ### 2. 什么是任务队列
    同步任务--依次执行任务
    异步任务--异步任务被放入到异步任务队列；执行栈空闲时，才去异步队列中读取任务并放入队列末尾
  ### 3. 什么是event Loop
    浏览器的js引擎，遇到setTimeout这种异步任务，它不会将其放入运行栈，而是先将其保存，到达指定延迟时间，将异步任务放入到**异步队列**中。
    当运行栈中没有任务时，就去读取异步任务，并放入到执行栈的最后。
      - 执行栈---执行的是同步任务
      - 执行栈空闲时去读取异步队列中的任务，放入到执行栈最后
  ### 4. 异步任务
    - setTimeout setInterval
    - DOM事件
      当执行栈中有一直在执行，点击按钮，也不会去异步队列中读取。导致浏览器卡主的现象
    - Promise


## 错误监控
  ### 1. 前端错误的分类
    - 即时运行错误：代码错误
      1. try...catch
      2. window.onerror

    - 资源夹加载错误
      1. object.onerror
      2. performance.getEntries(), 获取所有已加载资源的时长
      3. error事件，捕获阶段

    - 跨域的js运行错误可以捕获吗？错误提示是什么，应该怎么处理？
      错误信息：script error

      根据以下设置，就可以拿到跨域js的错误信息
      > 在script标签增加corssorigin属性
        服务端设置：js资源相应头：Access-Control-Allow-Origin:*/域名

  ### 2. 错误的捕获方式
  ### 3. 上报错误的基本原理
      1. 采用ajax通信的方式上报
      2. 利用image对象上报
        ```
          (new Image).src = 'http://XXX.XXX.XXX/code=123';
        ```

