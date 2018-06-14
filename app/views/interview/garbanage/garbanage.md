# 垃圾回收机制
> Js具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。

  ### 变量声明周期
    全局变量的生命周期直到浏览器关闭页面才会结束
    局部变量在函数执行完毕后被销毁。（闭包中变量被外部引用导致其一直保存在内存中）

  ### 标记清除 mark and sweep
    js最常见的卡机回收方式

    当变量进入执行环境的时候（函数中声明一个变量），垃圾回收器将其标记为“进入环境”；
    当变量离开环境的时候（函数执行结束），将其标记为“离开环境”。
    标记“离开环境”的就回收内存。

    #### 工作流程：
      1. 垃圾回收器，在运行的时候给存储在内存中的所有变量加上标记
      2. 去掉环境中的变量，一级被环境中的变量引用的标记
      3. 在被加上标记的会被视为准备删除的变量
      4. 垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们占用的内存空间

  ### 引用计数 reference counting  IE，容易造成内存泄露

    跟踪记录每个值被引用的次数

    变量被引用一次，计数加1，
    当引用次数变为0时，释放

  ### 什么情况会引起内存泄露
    1. 意外的全局变量引起的内存泄露
      全局变量不会被回收。
      ```
        function foo(arg) {
            // 这是一个全局变量
            bar = "this is a hidden global variable";
        }
      ```
    2. 闭包引起的内存泄露
      函数内的变量被全局引用，函数执行完毕也不会被销毁，占用了内存
      解决：手动删除

    3. dom清空或删除时，事件未清除导致的内存泄露
      解决： 手动删除

    4. 脱离DOM的引用
      如果js中有对DOM元素的引用，当元素被删除后，这个引用仍然存在于内存中
      ```
        var elements = {
        button: document.getElementById('button'),
        image: document.getElementById('image'),
        text: document.getElementById('text')
    };

    function doStuff() {
        image.src = 'http://some.url/image';
        button.click();
        console.log(text.innerHTML);
        // 更多逻辑
    }

    function removeButton() {
        // 按钮是 body 的后代元素
        document.body.removeChild(document.getElementById('button'));

        // 此时，仍旧存在一个全局的 #button 的引用
        // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
    }
    ```

    5. js保存了一个元素的某个子元素的引用，将父元素删除后，由于子元素被保存，父元素不会被清除，导致他们全部保存在内存中。

