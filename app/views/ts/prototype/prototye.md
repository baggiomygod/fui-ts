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
**缺点：不能继承父类原型链上的方法**
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
**造成的缺点:创建的实例会公用原型对象，当修一个实例改原型对象上的属性时，在其它实例上也会体现。---非基础类型数据都是引用，指向同一个内存空间。**
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
m1.__proto__ === m2.__proto__; // 都指向Person这个构造函数
```

### 3. 组合继承
```
function Person(){
  this.name = 'person.';
  this.play = [1,2,3]
}
function Man(){
  Person.call(this);
  this.age = 12;
}

Person.prototype.say = function(){
  console.log('hi!');
}

Man.prototype = new Person();

let m1 = new Man();
let m2 = new Man();
m1.play.push(4);
m1.play; // [1,2,3,4]  play属性在两个实例上式单独的拷贝
m2.play; // [1,2,3]

m1.__proto__ === m2.__proto__; // 都指向Person这个构造函数
```

> 组合继承缺点---创建一个实例时执行了2次父类函数
  1. Man.prototype = new Person();
  2. new Man()时，其内部的：Person.call(this);
> construcor 指向有正确：
  因为Man.prototype是Person的实例，它的constructor就是Person。

### 组合继承--优化
```
function Person(){
  this.name = 'person.';
  this.play = [1,2,3]
}
function Man(){
  Person.call(this); // 只执行了一次父类构造函数
  this.age = 12;
}

Person.prototype.say = function(){
  console.log('hi!');
}
/*
  1.引用了父类的原型（即引用了对象，导致该方法的缺点）:
    m1.__proto__ === Man.prototype;---实例的__proto__指向Man构造函数的prototype属性；
    而Man.prototype 又和Person.prototype是绝对相等的，指向同一块内存空间
*/
Man.prototype = Person.prototype;

// 这里修改constructor，也会改变Person.prototype.constructor，因为它们指向同一块内存空间
// Man.prototype.constructor = Man;
let m1 = new Man();
let m2 = new Man();

// 以下两个都输出true,如何区分m1是Man创建的实例还是Person创建的？
console.log(m1 instanceof Man); // true
console.log(m1 instanceof Person); // true
console.log(m1.constructor); // Person

```
> 优化： 避免了2次执行父类构造函数
> 缺点：constructor指向不对（因为Man.prototype和Person.prototype指向同一块内存空间）。不好判断实例是都直接由那个构造函数创建

### 组合继承---优化2
```
function Person(){
  this.name = 'person.';
  this.play = [1,2,3]
}
function Man(){
  Person.call(this); // 只执行了一次父类构造函数
  this.age = 12;
}

Person.prototype.say = function(){
  console.log('hi!');
}

/*
Object.create:
Object.create = function(o){
  let F = function(){};
  F.prototype = o;
  return new F();
}
*/
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man; // 指定原型对象

let m1 = new Man();
```
> m1.__proto__--->Man.prototype--->new F(), new F().__proto__---> F.prototype--->Person.prototype
- 实例m1的__proto__指向其构造函数的prototype属相，即Object.create返回的new F()实例，
- new F().__proto__又指向它的构造函数F.prototype等于Person.prototype构造函数

