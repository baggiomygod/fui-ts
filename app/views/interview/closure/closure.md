# 闭包

## 概念
js变量的作用域：全局变量和局部变量。
函数内部可以直接访问全局变量、但是函数外部无法访问函数内部的局部变量。

函数f2包含在函数f1内部，这时f1内部的所有局部变量，对f2都是可见的。反过来f2的局部变量，对于f1是不可见的。
> 这就是js的“链式作用域(chain scopr)”结构
```
function f1(){
  let n = 999;
  function f2(){
    console.log(n);
  }
}
```

但是通过**闭包**，可以在函数外部访问到内部的变量:本市上，闭包就是将函数内部与函数外部连接起来的一座桥梁。

## 用途
  闭包允许将函数与其所操作的某些数据（环境）关连起来。
  ### 1. 是变量的值始终保存在内存中
  以下示例，n一直保存在内存中，并没有在f1()调用后被销毁。
  原因：f1是f2的父函数，而f2被赋值给一个全局变量，这导致f2始终在内存中。而f2的存在使用以来与f1，因此f1也始终在内存中，不会在调用结束后被垃圾回收机制回收。
  ```
    function f1(){
      let n = 0;
      function f2(){
        console.log(n++);
      }
      return f2;
    }
    let f = f1();
    f();
    f();
  ```

  ### 2. 用闭包模拟私有方法
      ```
        let Counter = (function(){
          // 私有属性
          let privateCounter = 0;
          // 私有方法
          function changeBy(val){
            privateCounter +=val;
          }

          return {
            increment(){
              changeBy(1);
            },
            decrement(){
              changeBy(-1);
            },
            value(){
              return privateCounter;
            }
          }
        })();
        Counter.value();
        Counter.increment();
        Counter.increment();
      ```
  ### 3. 在循环中创建闭包
    当我们为一租对象进行操作的时候，比如注册事件：
    ```
      function showHelp(help){
        document.getElementById('help').innerHTML = help;
      }

      function setupHelp(){
        let helpText = [
          {id:'email', help: 'your e-mail address'},
          {id:'name', help: 'your full name'},
          {id:'age', help: 'your age'},
        ];

        for (let i = 0; i < helpText.length; i++){
          let item = helpText[i];
          document.getElementById(item.id).onfocus = function(){
            showHelp(item.help);
          }
        }
      }

      setupHelp();

    ```
