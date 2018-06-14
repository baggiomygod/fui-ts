# HTML
  ### 1. 新元素
    section
    video
    nav
    canvas
    header
    footer
    article
    source
    time
    ...

  ### 2. 新属性
    - input: date, email, url,range,search
    - script: async

  ### 3. 新应用接口
    - localStorage
    - Application Cache
    - Canvas WebGL
    - audio video
    - Drag Drop

  ### 4. 块级元素
   div、p、h1~h6、ul、form...
  ### 5. 内联元素
   a、img、i、input、label、span、sleect、strong...

  ### 6. 空元素/自闭合
   img、input、link、meta、hr、br


  ### 7. HTML5离线存储有几种？
    http://blog.csdn.net/qq_32524751/article/details/74079668
    1. localStorage：持久性缓存,主动删除才可清除数据
    2. sessionStorage：会话缓存，值有在同一个会话的页面才能访问并且会话结束，数据随之销毁。---会话级缓存
    3. cookie:
    4. indexDB:
    > Application Cacge是缓存机制，不是存储技术。作用是把需要缓存的内容半永久性的保存在本地，并且访问时不需要网络连接。

    #### web Storage 与cookie的区别
      - cookie数据始终在同源的http请求中携带
      - cookie在浏览器和服务器端来回传递，localStorage和sessioStorage不会自动把数据传送给服务器，仅在本地保存。
      - 存储大小不同:
          cookie:4k,每次http请求都会携带cookie
          sessionStorage和localStorage存储数据大小可以达到5M，不同浏览器限制不同
      - 数据生命周期不同：
          1. cookie：在其设置的过期时间内有效
          2. localStorage：持久有效，直到手动删除
          3. sessionStorage: 关闭窗口就会被销毁

      - 作用域不同：
          1. sessionStorage不在不通过的浏览器中共享，即使是同一页面也不支持。
          2. localStorage在所有同源窗口中都是共享的
          3. cookie在所有的同源窗口中也是共享的
      - cookie的数据还有路径概念，可以通过限制cookie只属于某一个路径
      - web Stoorage支持事件通知机制，可以将数据更新的通知发送给监听者

    #### 使用web Storage的好处：
      1. 减少网络流量，
      2. 快速显示数据
      3. 临时存储
      4. 不影响网站效能，可以把体积大、安全性低的资料存储在web storage中，提供网站效能

  ### 离线缓存 application cache
  参考链接：http://blog.csdn.net/molly_xu/article/details/51147236
  http://blog.csdn.net/molly_xu/article/details/51147236

    HTML5引入了应用程序缓存器，可对web进行缓存，在没有网络的情况下使用，通过cache manifest文件，创建应用缓存。

    1.
