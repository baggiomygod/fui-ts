# interview 课程知识点笔记

## 1.页面布局
  ### 1.1 float布局（圣杯布局、双飞翼布局）
    优点：兼容性好
    缺点：float脱离文档流，需要清除浮动。否则会有问题
  ### 1.2 position 绝对定位布局
    优点：易于实现
    缺点：由于本身脱离文档流，影响到其他元素。实用性差
  ### 1.3 table布局（table, table-cell）
    优点：兼容性较好、简单开发熟读快、内容自适应、易于SEO
    缺点：性能较差（）
  ### 1.4 flex-box布局
    优点：较完善
    缺点：兼容性不是非常好（ie8不支持）
  ### 1.5 grid布局
    优点：标准话栅格系统。代码量少
    缺点：新技术，兼容性较差

## 2. HTTP
  ### 2.1 特点
  - 简单快速
  - 灵活
  - 无连接：连接一次就断掉
  - 无状态：客户端第二次访问 服务端是不会识别的

  ### 2.2 HTTP报文
    1. 请求报文
      请求行：包含：HTTP方法、页面地址、HTTP协议和版本。
      请求头：key:value形式的值，
      空行: 空行之后是请求体
      请求体:
    2. 响应报文
      状态行：协议版本 状态码；HTTP/1.1 200 OK
      响应头：key:value形式的值，
      空行：空行之后是响应体
      响应体：

    3. HTTP方法
    - GET 获取资源
    - POST 传输资源
    - PUT 更新资源
    - DELETE 删除资源
    - HEAD 获取报文首部

  ### POST 和 GET的区别
    (http://www.techweb.com.cn/network/system/2016-10-11/2407736.shtml)
      1. GET是浏览器回退无害的，POST会再次请求
      2. GET请求会被浏览器主动缓存，而POST不会，除非手动设置
      3. GET请求参数会被完整的保留在浏览器历史记录里，POST中的参数不会被保留
      4. GET请求在URL中传送的参数长度有限制（一般2kb）,POST没有限制
          > - HTTP规范中GET,POST对参数的长度都没有限制；
          > - 以往所说的GET有长度限制，都是浏览器的原因（大都限制在2k以内,服务器最多处理64k大小的url），也就是web开发中的规定。
          > - GET和POST本质上就是TCP连接。由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中出现的不同
      5. GET比POST不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息
      6. GET参数通过URL传递，POST放在request body中.
        > GET 参数跟在URL后，为明文。（技术上也是可以将参数放在请求体中，但不能保证被所有服务端接收）
      7. **GET产生一个TCP包，POST产生2个TCP数据包**
          - 对于GET方式来说，浏览器会把HTTP Header和data一并发送出去，服务器响应200(返回数据)
          - 对于POST，浏览器先发送header,服务端响应100 continue,浏览器再发送data,服务端响应200 ok(返回数据)。（并不是所有浏览器POST都发2次包，火狐就只发一次）
      8. 语义上：GET多用于从服务器获取数据;语义上：POST用于向服务器提交数据
      other:
      1. GET产生的URL地址可以被收藏，POST不可以
      2. GET请求只能进行url编码，POST支持多种编码方式
      3. 对参数的数据类型，GET只接受ASCII字符，POST没有限制

  ### HTTP状态码
    - 1xx 知识信息：表示请求已经接收，继续处理
    - 2xx 成功： 表示请求已被成功接收
      1. 200 ok:客户端请求成功
      2. 206 Partial Content: 客户发送了一个带有range头的GET请求， 服务器完成了它
    - 3xx 重定向：要完成请求必须进行更进一步的操作
      1. 301：所有请求的页面已经转移到新的url
      2. 302: 所请求的页面已临时转移到新url
      3. 304: 客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户端：原来缓存中的文档还可以继续使用。
    - 4xx 客户端错误：请求有语法错误或请求无法实现
      1. 400 bad Request 客户端请求有预发错误，不能被服务器所理解
      2. 401 Unauthorized 请求未经授权，这个状态码必须和WWW-Autherticate报头域一起使用
      3. 403 Forbidden 对被请丢的页面的访问被禁止
      4. 404 请求的资源不存在
    - 5xx 服务器错误：服务器未能实现合法的请求
      1. 500 服务器发生不可预期的错误,原来缓存文件可以继续使用
      2. 503 请求未完成，服务器临时过载或宕机，一段时间后可能恢复正常

  ### HTTP协议类--持久连接Keep-Alive
      HTTP1.1版本支持持久连接
      1. 非持久连接
      Http协议采用“请求--应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）

      2. 持久连接
      当使用Keep-Alive模式(持久连接、连接重用)时，keep-alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求是，keep-alive功能避免了建立或者重新建立连接。

  ### HTTP协议---管线化
    >（重点：1.基于持久链接；2.GET,HEAD支持，POST有所限制；3.HTTP1.1支持；4.原理：多个请求打包，响应也多个打包一起返回）
    在使用持久连接的情况下，某个连接上消息的传递类似于：
    请求1-->响应1-->请求2-->响应2-->请求3-->响应3

    管线化：在持久连接的情况下完成
    多个请求打包发送，多个响应也一起返回
    请求1-->请求2-->请求3-->响应1-->响应2-->响应3

    1. 管线化机制通过持久连接完成，仅HTTP/1.1支持技术
    2. 只有GET和HEAD请求可以进行管线化，而POST则有所限制
    3. 初次创建连接时不应启动管线化机制，因为服务器不一定支持HTTP/1.1版本的协议
    4. HTTP/1.1 要求服务器支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对管线化的请求不失败即可
    5. 由于上面提到的服务器问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，现代浏览器默认并未开启管线化支持。


## 原型
  '/ts/prototype'

## 面向对象，继承
  '/ts/prototype'

## 通信类
### 1. 什么是同源策略和限制
  同源策略**限制**从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
  是一个用于隔离潜在恶意文件的关键的安全机制。
  > 源：协议、域名(主机)、端口构成了一个源---三者中其中一者不一样就不同源（跨域）

  - 同源策略的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

  ##### 限制：
    1. Cookie、LocalStorage和IndexDB无法读取
    2. DOM无法获得
    3. AJAX请求不能发送---Ajax同源通信方式

### 2. 前后端如何通信
  - ajax 仅支持同源通信
  - websocket: 不受同源限制
  - CORS： 支持非同源通信
    CORS是一个W3C标准，全称是“跨域资源共享”（Cross-origin resource sharing）。
    它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
    CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10.
    整个CORS通信过程，都是浏览器自动完成的，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。
    因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

### 3. 如何创建Ajax
  - XMLHttpRequest
  - 兼容性处理
  - 事件的触发条件
  - 事件触发顺序

### 4. 跨域通信的几种方式
  ##### 4.1 设置document.domain (只适用于 Cookie 和 iframe 窗口)
    当网页一级域名相同，而二级域名不同时，可以通过设置document.domain，使两个页面可以共享Cookie

    > http://w1.example.com/a.html;
    > http://w2.example.com/b.html;

    ```
      document.domain = 'example.com';
    ```
    A网页设置一个cookie
    a.html:
    ```
      document.cookie = 'test1=hello';
    ```
    b.html
    ```
      let allCookie = document.cookie;
    ```

    > 该方式不适用于LocalStorage和IndexDB;
    > 服务器：设置Cookie的所属域名为一级域名：
      ```Set-Cookie:key=calueldomian=.example.com; path:/```

  ##### 4.2 片段识别符号hash（URL的#之后的部分）
      ```http://example.com/text#fragment```,#fragment就是片段识别符。
      > 如果只是改变片段标识符，页面不会刷新。

      http://w2.example.com/a.html:
      ```
        <body>
          父页面
          <iframe src="http://w2.example.com/b.html"></iframe>
        </body>
      ```

      1. origin.html父窗口可以把信息写入子窗口的片段标识符
      ```
        let src = originURL + '#' + data;
        documeng.getElementById('myIframe').src = src
      ```

      2. 子页面设置hash，父页面拿到值：
      ```
      parent.location.href= target + "#" + hash;
      ```

    **详见：http/origin.html示例**

  ##### 4.4 postMessage
    A窗口
    ```
      window.postMessage('a-data', 'http://b.com');
    ```
    B窗口
    ```
      window.addEventListener('message', (event) => {
        console.log(event.origin); // http://a.com
        console.log(event.source); // a window
        console.log(event.data); // a-data
      }, false);
    ```
  ##### 4.5 jsonp---script的src属性可以跨域
    简单实用，兼容性好，服务器改造小

    通过网页<script>元素，向服务器请求json数据，这种做法不受同源策略限制；服务器收到请求后，数据放在一个制定的回调函数里传回来。

  ##### 4.6 cors
    mdn: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
    cors: http://www.ruanyifeng.com/blog/2016/04/cors.html
    浏览器会拦截ajax请求，如果识别是跨域的，会在请求头中加一个origin

    ```
    // url 必须， options 可选
      fetch('/some/url', {
        method:'get'
      }).then(function(reponse){

      }).catch(function(err){

      });
    ```

    服务器端需要在返回头中添加信息：
    ```
    Access-Control-Allow-Origin: http://api.bob.com
    Access-Control-Allow-Credentials: true
    Access-Control-Expose-Headers: FooBar
    Content-Type: text/html; charset=utf-8
    ```
  ##### 4.7 webSocket
    ```
      let ws = new WebSocket('ws://echo.websocket.org');

      ws.open = function(evt){
        console.log('connection open ...');
        ws.send('hello...')
      }

      // 接收小心
      ws.onmessage = function(evt){
        console.log('received message:', evt.data);
        ws.close();
      };

      // 关闭
      ws.onclose = function(evt){
        console.log('closed..');
      }
    ```


## 安全类
  ### 1. CSRF---跨站请求伪造
    原理：

    防范措施：
  ### 2. XSS---跨域脚本公积
    原理：向页面注入js

    防范措施：

