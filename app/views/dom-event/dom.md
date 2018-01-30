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
