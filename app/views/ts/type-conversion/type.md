# 类型转换
ES6中定义了7中数据类型：
基本数据类型
- boolean
- Null
- undefined
- number
- string
- Symbol
#### 对象
- Object

## 1. 显示类型转换
显示的调用以下函数：
- Number()
- String()
- Boolean()
### 1.1 Number()
```
Number(1); // 1
Number('1'); // 1
Number('abc12'); // NaN
Number(''); // 0
Number(undefened); // NaN
Number(null); // 0
Number(true); // 1
Number(false); // 0

parseInt('10.1s'); // 10
parseInt('s10.1s'); // NaN
parseInt('1.01s'); // 1
```

#### Number()传入对象时
先调用对象本身的valueOf方法，如果该方法返回原始类型的值（数值、字符串。布尔值）
，则之间对该值使用Number方法，不在后续步骤

如果valueOf方法返回符合类型的值，再调用对象自身的toString方法，如果toStrinf方法返回原始类型的值，则对改制使用Number()方法

如果toString方法返回的是符合类型的值---报错

```
let a = {a:1};
Number(a); //  NaN

等效于

let a = {a:1}
a.valueOf(); // {a:1} 符合类型
a.toString(); // "[object Object]"
Number("[object Object]"); // NaN

```
### 1.2 String()
```
String(11); // '11'
String(true); // 'true'
String(undefined); // 'undefined'
String(null); // 'null'
```

#### String转换对象
- 先调用toString方法，如果返回的是原始类型的值---使用String()方法
                    如果返回符合类型的值---调用valueOf方法
                                        1. 如果返回原始类型---使用toString()方法
                                        2. 如果返回符合类型---报错
```

```
### 1.3 Boolean()
```
Bloean(undefined); // false
Bloean(null); // false
Bloean(0); // false
Bloean(NaN); // false
Bloean(''); // false
```

## 2. 隐式类型转换
```
// 0 相当于 代码块 + ''-----[]被转换为'',String([]) 为“”, + '' 有做了一次数字转换
{} + [] ;
[] + {}; // "[object Object]" ,String
//
{} + {} ; // "[object Object][object Object]"
true + true ; // 2,  1 + 1
1 + {a:1}; // 1[object Object]
```
