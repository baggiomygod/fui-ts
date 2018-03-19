# ajax
  兼容：
  ```
    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveObject('Microsoft.XMLHTTP'); // IE5、6
    }
  ```
  ### HTTP
    无状态协议，不建立持久的连接，服务端不保留客户端信息。
    步骤：
      1. 建立TCP连接
      2. web浏览器向服务器发送请求
      3. web浏览器发送请求头信息
      4. web服务器应答
      5. web服务器发送应答头信息
      6. web服务器发送数据
      7. web服务器关闭TCP连接

    #### HTTP请求的组成
      1. 方法： GET POST PUT-更新数据 DELETE HEAD
      2. 正在请求的URL
      3. 请求头：包含客户端环境信息，身份信息
      4. 请求行：表示请求头结束，后面是请求体
      4. 请求体：提交的参数

      ##### GET 获取数据
        使用URL传递参数，参数可见
        参数量有限制

        - 可以浏览器回退，可以保存到书签

      ##### POST 提交数据

    #### HTTP 响应
      1. 响应头:status:200, 304, 500
        - 1XX:告诉客户端已收到请求，正在处理
        - 2xx:成功
        - 3xx:重定向，
            302
            304，使用缓存
        - 4xx: 找不到，不允许，方法不允许
        - 5xx: 服务端错误
      2. 响应体

