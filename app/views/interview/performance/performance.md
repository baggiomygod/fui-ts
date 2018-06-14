# 页面性能
  ### 1. 雅虎军规

## 页面性能
  - 资源压缩合并、减少HTTP请求；
  - 非核心代码异步加载```<script defer>, <script async>```
  - 利用浏览器缓存：
    Expires(过期时间)，Cache-Control:max-age=3600(秒)；
    Last-Modified,If-Modified,资源上次修改的时间
    Etag,If-None-Match:hash值，对比hash值变化。
  - CDN：CDN主要功能是在不同的地点缓存内容，通过负载均衡技术，将用户的请求定向到最合适的缓存服务器上去获取内容，
  - DNS与解析：
    <link rel="dns-prefetch" href="//host_name_to_preetch.com">
    <meta http-equiv="c-dns-prefetch-control" content="on">

  ### 1. 提升页面性能的方法有哪些
    1. 资源压缩合并，减少HTTP请求

    2. 非核心代码异步加载----> 异步加载的方式---> 异步加载的区别
      - 异步加载方式
        1) 动态脚本加载:js创建<script>然后加入到页面中 document.createElement('script')
        2) defer: <script defer>
        3) async: <script async>
      - 异步加载的区别
        1）defer是在HTML解析完之后才会执行；如果是多个，按照加载的顺序依次执行
        2）async是加载完之后立即执行；如果是多个，执行顺序和加载顺序无关
    3. 利用浏览器缓存(重要) ---> 缓存的分类 ---> 缓存原理
        - 强制缓存(Header头)
          1. **Expires**(过期时间):Expires:Thu, 21 Jan 2017 23:23:23 GMT
            客户端将时间与服务器返回的时间对后判断实付使用缓存
            > 服务器的绝对时间，会有客户端和服务器时间不一致的现象，因此后加入Cache-Control

          2. **Cache-Control**:Cache-Control:max-age=3600（单位秒）
            相对时间，当客户端第一次从服务器拿到数据开始到3600s之内都取本地缓存数据
            > 优先级更高

        - 对比缓存
          - Last-Modified（返回头中）:服务器下发的资源上次修改的时间
          - If-Modified-Since(请求头): 客户端请求时用这个字段带上Last Modified返回的时间。
          服务器通过对比后告诉浏览器是否使用缓存
            > 缺点，修改时间可能改变，但是文件内容可能没变

          - Etag：服务器发给客户端 hash值
          - If-None-Match： 客户端请求
          服务端对比hash有没有变化

      ##### 与缓存相关的HTTP头
        Expires,Cache-Control
        Etag If-None-Match
        Last-Modified If-Modified-Since


    4. 使用CND
        CDN主要功能是在不同的地点缓存内容，通过负载均衡技术，将用户的请求定向到最合适的缓存服务器上去获取内容。

        比如说，是北京的用户，我们让他访问北京的节点，深圳的用户，我们让他访问深圳的节点。通过就近访问，加速用户对网站的访问。解决Internet网络拥堵状况，提高用户访问网络的响应速度。
    5. 预解析NDS

      ```
        <!-- 强制打开a标签的DNS预解析， https默认关闭a标签的预解析的 -->
        <meta http-equiv="c-dns-prefetch-control" content="on">
        <!-- 开启预解析 -->
        <link rel="dns-prefetch" href="//host_name_to_preetch.com">
      ```
