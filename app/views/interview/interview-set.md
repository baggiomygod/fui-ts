# 问题集合
### 1. 两个标签页通信
> 同域名下，利用该localStorage
  pageA.html: 登陆localStorage.setItem('user', data);
  pageB.html: addEventListener('storage', fn);----拿到登录成功的信息，更新页面

### 2. SPA 单页引用
#### 优点
  - 不需要刷新页面，显示更流畅----用户体验好
  - 让逻辑完全剥离---前端显示、后端负责计算

  - 服务端压力小， 后端只需要提供接口，吞吐能力会有所提高

#### 缺点
 - 首屏加载慢，需要资源多
 - SEO 异步加载数据，不利于搜索引擎爬取

#### 路由组件是怎样加载的

#### iframe的优缺点
  优点：
    - 重载页面时不需要重载整个页面，只需要重载页面中的一个iframe,这样减少了数据的传输，加快了页面的下载速度
    - 技术简单
    - 方便制作导航栏

  缺点：
    - 会产生很多页面不容易管理
    - 不容易打印
    - 浏览器后退按钮无效
    - 不利于搜索引擎索引
    - 移动端设备多数不支持
    - iframe过多会增加HTTP请求
  #### cookie的弊端
    cookie存储大小有限制 4kb
    cookie传输为明文不安全
    每次请求cookie添加在http头中，增加了流量
    对于复杂存储需求不够用

### 3. 输入域名到页面呈现的完整过程
  1. 域名解析成IP地址
      1) 浏览器先访问本机系统，获取对应IP地址
      2) 如果本地没有，发起DNS请求，获取IP地址
      3) 根据IP地址与目的主机进行TCP连接
  2. 与服务器进行TCP连接，三次握手
      三次握手：
        1) 客户端发动syn包到服务器---**连接请求**
        2) 服务器收到syn包，服务器发送syn+ack到客户端---**连接请求应答**
        3) 客户端收到syn+ack，向服务器确认.----**客户端回复收到应答**
        TCP连接完成
  3. 建立连接后，发送HTTP请求报文
    HTTP:请求行 请求头 请求体
    服务器响应
  4. 与服务器断开TCP连接
  5. 解析服务器返回的HTML/CSS/JS
    解压--->渲染
      1. 解析HTML---DOM tree
      2. CSS解析出Style rules
      3. 将DOM Tree和Style Rules关联生成render tree
      4. 布局
      5. 绘制


### 4. js 本地对象、内置对象、宿主对象
  #### 本地对象 即，引用类型
    - Object
    - Function
    - Array
    - String
    - Number
    - Date
    - RegExp
    - Boolean
    - Error
    - ...

  #### 内置对象
    在脚本程序初始化时创建，不必实例化的对象
    - Math
    - Global
      window是它的一个属性，指向Global本身
      parseInt()、parseFloat()都是Global对象的方法

  #### 宿主对象 所有非本地对象
    由ECMAScript实现的宿主环境提供的对象
    - 浏览器： 浏览器提供的对象就是宿主对象
        BOM DOM

  ### ==(有类型转换) 与 ===(值和类型必须相等) 的区别
   ==： 两边类型不同时，会先转换
   === : 不做类型转换，类型不同的一定不等;（即，值和类型都必须相等）

    ```
      1 == '1'; // true
      0 == false; // true
      null == undefined; // true

      1 != '1'; // false
      1 !== '1'; // true
      0 != ''; // false
      0 !== ''; // true


    ```

  ### null 与 undefined的区别
    null : Null类型，代表空值，使用typeof null ; object,可以认为是一个特殊的对象。

    undefined: undefined类型，当一个变量声明了，但未被初始化时为undefined

    相似性：
      !null/!undefined --- true;
      null == undefined; // true

    不同
      **Null**是一个标识“无”的对象，转为数值为0，
      **undefined**是一个表示“无”的原始值，转为数值为NaN
      Number(null); // 0
      Number(undefined); // NaN

    - null,表示“没有对象”，即该处不该有值
    - undefined,表示“缺少值”，就是此处应该有一个值，但是还没有定义。

  ### typeof obj === 'object'有什么问题如何避免
    存在```typeof null ; //object```;
    要准确的判断一个变量是否是一个对象，可以使用constructor和instanceof。
    - instanceof
    ```
      let o = {}
      o instanceof Object ; // true
    ```

  ### var arr = [[[]]]的含义？
    声明一个二维数组


  ### css 有哪些选择器
