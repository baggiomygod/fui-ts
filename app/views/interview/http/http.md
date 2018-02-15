# http

## HTTP缓存
  ##### 关键概念：
  1. 强制缓存---Cache-Control、Expires
    对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
  2. 对比缓存
    > 第一种方式是时间对比：
      last-modified（服务器返回给浏览器的）；if-modified-since（浏览器请求头发给服务器的）
    > 第二种当时，唯一标识：
      Etag（服务器返回给浏览器的）；
      If-None-Match（浏览器请求头发给服务器的）

## 1. HTTP报文
HTTP报文就是浏览器和服务器间通信时发送及响应的数据块。

- 浏览器向服务器请求数据---发送请求报文request

- 服务器向浏览器返回数据---返回响应报文response

### 报文信息主要分为2部分：
1. 包含属性的首部header
    - cookie
    - 缓存信息
    - 与缓存有关的规则信息
2. 包含数据的主体body
    - HTTP请求真正想要传输的部分

## 2. 缓存规则
在没有缓存数据的时候，浏览器向服务器请求数据时，服务器会将**数据和缓存规则**一并返回，**缓存规则信息包含在相应头中**。

### 2.1 强制缓存 Cache-Control、Expires
  在缓存数据未失效的情况下，可以直接使用缓存数据。
  - Expires HTTP1.0(服务端返回的到期时间)
    如果请求时间小于服务器返回的到期时间，就直接使用缓存。
    > 为HTTP1.0的东西
    > 浏览器和服务器可能存在时差
  - Cache-Control HTTP1.1---现代浏览器默认
    - private(默认值)：客户端可以缓存
    - public：客户端和代理服务器都可以缓存
    - no-cache：需要使用对比缓存来验证数据（后面介绍）
    - max-age：max-age=1000缓存的内容在1000秒后失效
    - no-store: 所有内容都不缓存，强制缓存、对比缓存都不触发。（对于前端来说，缓存越多越好，这个基本不用）

  ```
    Respinse Headers
      Cache-Control: max-age=31536000 // 缓存时间为365天，365天内访问都使用缓存
      ...
  ```

### 2.2 对比缓存---缓存标识、304
> 时间对比：Last-Modified/If-Modified-Since
> 唯一标识： Etah/If-None-Match

通信过程：
  1. 客户端----第一次请求---->服务器

  2. 客户端<----数据+缓存标识----服务器
    > 客户端将2者备份至缓存数据库中


  3. 客户端----第二次请求--（缓存标识）--->服务器》服务器判断

  4. 客户端<-----返回304----服务器：判断客户端缓存和服务器数据没有变化
    > 客户端使用缓存


##### Last-Modified/If-Modified-Since
1. Last-Modified：服务端在响应时，告诉浏览器资源的最后修改时间

2. If-Modified-Since：浏览器本地缓存的最后修改时间
  - 请求头，带有If-Modified-Since,本地缓存资源的上次修改时间
  ```
    RequestHeader
      If-Modified-Since:Tue,24 Jan 2017 02:02:02
      ...
  ```
  - 服务端收到请求后，发现有If-Modified-Since：
    > 与被请求资源最后修改时间进行比较：
        服务器最后修改时间 大于 If-Modified-Since，返回200
        否则， 返回304


#### Etag/If-None-Match (优先级高于Last-Modified/If-Modified-Since)
1. Etab:第一次请求：服务器响应时，告诉浏览器当前资源在服务器的唯一标示
2. If-None-Match: 再次请求，
  ```
  Request Header
    If-None-Match:w/"321321-12S
  ```
  服务器收到请求，对比标识
    不同，被改动过---返回200
    相同--返回304
