# cookie

### 1. cookie的属性
 - Domain:域，表示当前cookie所属于哪个域或子域下面
 - Path:表示cookie所属的路径
 - Expire time/Max-age:表示cookie的有效期。
 - secure: 表示该cookie只能用https传输
 - httponly: 表示该cookie必须用于http或https传输。这意味着，浏览器脚本js中是不允许操作此cookie的

### 2. 服务器发动cookie给客户端
  从服务端，发送cookie给客户端，是对应的set-cookie，包括了对应的cookie的名称、值、以及各种属性
  ```
    Set-Cookie: lu=Rg3vHJZnehYLjVg7qi3bZjzg; Expires=Tue, 15 Jan 2013 21:47:38 GMT; Path=/; Domain=.onephone.com; HttpOnly
  ```
### 3. 从客户端把cookie发送到服务器
  从客户端发送cookie给服务器的时候，是不发送cookie的各个属性的，而是只发送对应的键值对
  ```
    GET /spec.html HTTP/1.1

    Host: www.example.org

    Cookie: name=value; name2=value2

    Accept: */*
  ```
  > 服务端返回Set-Cookie，浏览器收到后，默认保存到本地cookie
  除了服务器发送给客户端（浏览器）的时候，通过Set-Cookie，创建或更新对应的cookie之外，还可以通过浏览器内置的一些脚本，比如javascript，去设置对应的cookie，对应实现是操作js中的document.cookie。

### 4. cookie的缺陷
  每次请求cookie都会附加在HTTP请求头中，增加了流量
  明文传输，有安全性问题
  cookie的大小限制在4KB，对于复杂存储需求不够用
