# 原型链
- 创建对象有几种方法
  1. new 操作符：
  ```let obj = new Object();```
  2. 对象字面量：
  ```let obj = {};```
  > 1、2创建对对象都是Object的实例

  3. 构造函数：
  ```
  let obj = function Constr(){
    this.name = 'wf';
  }
  let cObj = new Constr();
  ```

  4. 使用制定的原型对象及其属性去创建一个新对象
  ```
  let P = {name:'wf'};
  let pObj = Object.create(P);
  ```
- 类型、构造函数、实例、原型链
  1. 构造函数---property指向原型对象
  2. 原型对象---构造器constructor
  3.
- instanceof的原理
实例对象.__proto__----->构造函数.prototype----原型
判断实例对象的__proto__属性和构造函数prototype是不是引用同一个地址
```
function Class(){
  this.name = 'ccc';
}
let cla = new Class()

cla instanceof Class; // true
cla instanceof Object; // true
 // true,实例的__proto__是想其原型的prototype属性
cla.__proto__ === Class.prototype;

// 构造函数的prototype的__proto__ 指向其原型
// 即构造函数是Object的实例
Class.prototype.__proto__ === Object.prototype;

// 通过constructor判断o1 是否为M的实例（直接实例）
o1.__proto__.contructor === M; // true
o1.__proto__.contructor === Object; // false
```
> contructor: 属性返回对创建此对象的数组函数的引用

- new运算符
```let p = new Person()```
1. let p = {}; // 一个新对象被创建，作为将要返回的对象实例。
2. p.__proto__ = Person().prototype; // 将对象的__proto__属相指向构造函数的prototye
3. Person.apply(p); // 将空对象赋值给构造函数的this（上下文this制定新实例，也就是this与实例关联）
4. 开始执行构造函数内部代码：
  > 如果构造函数返回一个对象，那么这个对象将会取代new出来的对象。
  > 如果构造函数没有返回对象，那么实例就是第一部创建的p对象
  > 如果构造函数返回一个基础数据类型，实例也是第一部创建的p对象

let p = new Person()
等价于
```
function defineNew(Cls){
  let o = {};
  o.__proto__ = Cls.prototype;
  let result = Cls.call(o);
  // 如果构造函数返回是对象，对象将代替new出来的对象
  if (typeof result === 'object'){
    return result;
  } else {
    return o;
  }
}
```

#### 如果构造函数没有使用new调用

此时，就是普通函数，
1. 普通函数没有制定return返回值时，默认fanhuiundefined;
```let p = Person(); // p :undefiend```

2. 普通函数调用时，this指向全局
```
function Person(){
  this.name = 'ppp'
}

let p = Person();
console.log(window.name); // ppp
console.log(p.name); // 报错
```

### Object.create()---使用制定的原型对象及其属性去创建一个新的对象
##### 1. Object.create 实现类式继承
细读：http://blog.csdn.net/blueblueskyhua/article/details/73135938

create()实现方式：
```
Object.create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};
```

##### Object.create和new
示例1：
```
var Base = function(){
      this.a = 'aaa';
    }
    let o1 = new Base();
    let o2 = Object.create(Base);
    console.log(o1.a); // aaa
    console.log(o2.a); // undefined
```
示例2：
```
var Base = function(){
      this.a = 'aaa';
    }
    Base.prototype.a = 3
    let o1 = new Base();
    let o2 = Object.create(Base);
    console.log(o1.a); // aaa, o1.__proto__--->Base.prototype
    console.log(o2.a); // undefined, o2.__proto__--->F(){}.prototype--->Base(){}
```

# 继承
### 1. 构造函数继承
构造函数继承了父类的属性---通过call()、apply()方法改变this指向
缺点：不能继承父类原型链上的方法
```
function Person(){
  this.name = 'aa';
}
Person.prototype.say = function (){
  console.log('hi!');
}
function Man(){
  Person.call(this);
  this.age=12;
}

let a = new Man();
```

### 2. 原型链继承
通过原型链继承，
造成的缺点:创建的实例会共用原型对象，当修改一个时，在其它实例上也会体现。
```
function Person(){
  this.name = 'aa';
  this.arr = [1,2,3];
  this.play = {a:1, b:2}
}
function Man(){
  this.age = 'bb'
}

Man.prototype = new Person();

let m1 = new Man();
let m2 = new Man();
m1.__proto__ === m2.__proto__;
```
