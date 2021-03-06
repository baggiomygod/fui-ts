# promise
promise是一个对象，用来传递异步操作的消息

它代表某个未来才会知道结果的事件，并且这个事件提供统一的API，可供进一步处理
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
- Promise.prototype.catch()
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
promise是异步操作结果的占位符。函数可以返回一个promise,而不用订阅一个事件或想函数传递回调参数。
  1. **promise的声明周期**
    - pending(未定、挂起):每个promise的声明周期一开始都会处于短暂的挂起(pending)状态，表示异步操作仍未完成，即挂起的promise被认定是未定的。
    - 已定状态settled：
      - fulfilled: promise异步操作已完成
      - rejected: promise异步操作未完成，发生错误。
  所有的promise都包含then()方法并接受两个参数:```.then(success(){}, handleErr(){})```,即成功fulfilled时的处理函数和失败rejected时的处理函数。

  > 以该种方式实现then()方法的对象都被称为thenanle。所有promise都是thenabe,但是不是多有的thenable都是promise.

 - catch()
  ```
    promise.catch(function(err) {
    // rejection
    console.error(err.message);
    });

    // 等效于:

    promise.then(null, function(err) {
        // rejection
        console.error(err.message);
    });
  ```
    then()和catch()的目的是让你组合使用它们以用来正确的处理异步操作。
    （promise的then()和catch()使操作成功或失败一目了然。事件出现错误后不会被触发，而回调函数则总是要查看error参数。

    > 需要记住如果你不给promise添加rejection处理，那么所有错误会悄无声息的发生。不要忽略rejection处理。

  2. **创建未定义的promise**
  promise由Promise构造函数创建。该构造函数接收一个参数：包含初始化promise代码的执行函数。该执行函数接收resolve()---成功，promise可使用、reject()---代表该执行函数运行失败。
  node.js示例
  ```
     let fs = reuqire("fs");

  function readFile(filename) {
      console.log('readFile()调用后立即执行...');
      return new Promise((resolve, reject) => {
      console.log('立即执行 promise1...');
        // 异步读取文件
        fs.readFile(filename,
                    {encoding: 'utf8'},
                    (err, contents) => {
                      console.log('立即执行 promise2...');

                        if (err) {
                          reject(err);
                          return;
                        }
                        console.log('立即执行 promise3...');

                        resolve(contents);
                    });
      });
    }

    let rfsPromise = readFile('example.txt'); // readFile()调用后执行函数立即执行
    // 同时监听 fulfillment 和 rejection
    // then()在readFile()执行完毕后，才被添加带任务队列;console.log('test')可能会先执行
    rfsPromise.then(contents => {
      // fulfillment
      console.log(contents)
    }, err => {
      // rejection
      console.log(err.message)
    });

    console.log('test');
  ```

  3. **创建已定义的promise (Creating Settled Promises)**
  Promise构造函数由于其内部执行函数与生俱来的动态特性使得它是创建未定promise的最佳方式。

  **3.1 Promise.resolve()**
    Promise.resolve()方法接收单个参数并返回一个fulfilled状态的promise
    ```
      let promise = Promise.resolve(42);
      promise.then(val => {
        console.log(val);
      })
    ```

  **3.2 Promise.reject()**
    ```
      let promise = Promise.reject('err');
      promise.catch((err) => {
        console.log(err);
      })
    ```

  **3.3 非promise的thenable对象**
    Promise.resolve()和Promise.reject()也可以接收非promise的thenable对象作为参数。在传递它之后，这些方法在调用then()之后创建一个新的promise。

    一个不属于promise的thenable指的是包含then()方法的对象。该方法接收resolve和reject作为参数：
    ```
      let thenable = {
        then(resolve, reject) {
          resolve(42);
        }
      };

      let p1 = Promise.resolve(thenable);
      p1.then(val => {
        console.log(val);
      });
    ```



  4. **执行错误**

##### 2.2.3 promise的全局Rejection处理

##### 2.2.4 promise链

##### 2.2.5 响应多个promise
##### 2.2.6 promise继承
