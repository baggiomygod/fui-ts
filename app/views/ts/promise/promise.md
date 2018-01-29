# promise
所谓promise，就是一个对象，用来传递异步操作的消息。它代表某个未来才会知道结果的事件，并且这个事件提供统一的API，可供进一步处理
## 1. 概述
### 1.1 Promise对象特点
1. 对象的状态不收外界影响。Promise对象代表一个异步操作，有三种状态：
  1. Pending---进行中
  2. Resolved---已完成（Fulfilled）
  3. Rejected---已失败。
2. 一旦状态改变就不会在变。

### 1.2 API
- Promise.resolve()
- Promise.reject()
- Promise.prototype.then()
- Promise.prototype.cahch()
- Promise.call()  //所有的完成
- Promise.race() // 竞速，完成一个即可

### 2. Promise与异步变成---understanding ES6
Promise延迟并在以后执行了某些东西。一个promise指定一个稍后指定的代码并显示地表明该段代码是否执行成功。你可以根据代码执行的成功与否将promise串联(chain)起来以便让代码看起来更清晰和容易调试。

#### 2.1 异步变成的背景---Asynchronous Programming Background
js引擎在相同的时间内只能执行一段代码，所以引擎不需要追踪可能运行的代码，而是在它们准备好执行时将它们放置到任务队列(job queue)。当代码由js引擎执行完毕后，引擎通过event loop找到并执行队列中的下一个任务。event loop是js引擎内部的线程用来监控代码的执行情况和管理任务队列。
（既然它是个队列，那么任务就会由开始到最后的顺序依次执行）
##### 2.1.1 事件模型---The Event Model
一个事件onclick会在被点击后触发。为了响应该交互，一个新的任务会被添加到任务队列中。-----这就是js异步变成中最基本的形式。
> 关于处理事件的代码直到事件发生后才会执行，此时的上下文（context）会出现。

- 示例：
```
let button = document.getElementById("my-btn");
button.onclick = function(event) {
    console.log("Clicked");
};
```
以上代码在点击后，赋值给onclick的代码会被添加到任务队列中，并在先前的所有任务完成后执行。

> 事件在简单的交互下能很好的工作，但串联多个独立的异步调用会很复杂，因为你必须追踪每个事件中的作用对象。
> 你必须保证click事件第一次发生前注册onclick处理函数, 否则什么事都不会发生。


##### 2.2.1 回调模式--- The Callback Pattern
- node.js诞生后，它通过在变成中广泛使用回调模式来进一步发展异步编程模型。
- 回调模式和事件模型的异步代码都是在之后的某一时刻才执行。
- 差异是： 回调模式要调用的函数是参数。
示例：
```
// readFile('example.txt', 回调的函数)
readFile('example.txt', (err, contents) => {
  if (err) {
    throw err;
  }

  console.log(contents);
});

console.log('Hi')
```
以上代码：1. readFile()在“读取example的时刻函数中断运行“---->2. ```console.log('Hi')```执行---->3. 当readFile()执行完毕，回调函数和参数被添加到任务队列的末尾，并在先前的任务全部执行之后运行。

> 当有嵌套过多的方法调用会形成错综复杂的代码。
- 如何让两个异步操作并行执行而且全部完成之后发送通知？
- 如何让两个异步操作同时执行但是只接受先完成任务的结果？

##### 2.2.2 promise基础 Promise Basics

  1. **promise的声明周期**
  2. **创建未定义的promise**
  3. **创建已定义的promise**
  4. **执行错误**

##### 2.2.3 promise的全局Rejection处理

##### 2.2.4 promise链

##### 2.2.5 响应多个promise
##### 2.2.6 promise继承
