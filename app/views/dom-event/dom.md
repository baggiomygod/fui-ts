# DOM

## 1. DOM事件的级别
  ### DOM0
    ```
      element.onclick=function(){}`
      <button onclick="doSomethiing">
    ``
  ### DOM2
    ```
      element.addEventListener('click', function(){}, false)
    ```
  ### DOM3---相对DOM2增加了事件类型
    ```
      element.addEventListener('keyup', function(){}, false)
      - false 默认值 冒泡---事件句柄在冒泡阶段执行
      - true 捕获---事件句柄在捕获阶段执行
    ```
## 2. DOM事件模型
  ### 捕获

  ### 冒泡

## 3. DOM事件流
  捕获阶段 ---> 目标阶段 ---> 冒泡阶段

## 4. DOM事件捕获的具体流程
#### 捕获的流程：(冒泡反之)
  window对象--第一个接收事件
    -->document对象
      -->html标签（document.documentElement,获取html元素节点）
        -->body
          -->父元素
            -->子元素
            ...
              -->目标元素
## 5. Event对象的常见应用
  - event.preventDefault()---阻止默认行为
  - event.stopPropagation()---阻止冒泡
  - event.stopImmediatePropagation()---阻止事件冒泡，包括剩下的事件处理程序执行

  #### 事件代理常用
  - event.currentTarget---绑定事件的元素
  - event.target---触发事件的元素

## 6. 自定义事件***
#### Event()
```
  let eve = new Event('custom')
  element.addEventListener('custom', function(){
    //...
  });
  element.dispatchEvent(eve);
```
#### CustonEvent('eventName', [options])
```
  let eve = new CustomEvent('custom', {自定义参数})
  element.addEventListener('custom', function(){
    //...
  });
  element.dispatchEvent(eve);
```


## 问题
  ### 事件绑定和普通事件有什么区别
    示例：on_addEvent.html
    普通时间---el.onclick DOM0
    事件绑定---el.addEventListener DOM2

  ### document.ready和window.onload区别
    jsvascript文档加载完成事件
    - ready: 表示**文档结构**已经加载完成，**不含图片等非文字媒体文件**
    - onload: 表示页面包**含图片等文件在内的多有元素**都加载完毕

  jquery:
    DOM加载完毕后就可以进行DOM操作，
    域名解析--> 加载js/css-->加载图片等
    > document.ready就是在加载js、css与加载图片等资源之间执行；
    ```
      $(function(){

      });

      // 等价于
      $(document.ready)(function(){

      })
    ```

    原生js:
      ```
        // 所有元素和图片等媒体资源加载完毕，才可进行DOM操作
        window.onload = function(){

        }

        // 或者经常用到的图片
        document.getElementById('imgId').onload = (){

        }
      ```
