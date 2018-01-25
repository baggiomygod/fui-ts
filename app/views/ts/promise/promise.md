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

##### 2.2.1 回调模式--- The Callback Pattern
- node.js诞生后，它通过在变成中广泛使用回调模式来进一步发展异步编程模型。
- 回调模式和事件模型的异步代码都是在之后的某一时刻才执行。
- 差异是： 回调模式要调用的函数是参数。
示例：
```
readFile('example.txt', (err, contents) => {
  if (err) {
    throw err;
  }

  console.log(contents);
});

console.log('Hi')
```
