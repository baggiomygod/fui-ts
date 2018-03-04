### var变量提升 hoisting
  var声明的变量会被提升至**函数顶部**，
  ```
    function getVal(arg){
      if (arg) {
        var value = 'blue';
        return;
      } else {
        // 1.这里也可以访问未被初始化的value
      }
        // 2. 这里可以访问value
      console.log('value:', value);
    }
    getVal(false); // value: undefined; 因为变量提升,所以打印undefined
    getVal(true); // blue
  ```
  等价于
  ```
    function getVal(arg){
      var value;
      if (arg) {
        value = 'blue';
        return;
      }
      console.log('value:', value);
    }
  ```

### 块级声明
  块级声明用于声明在制定块的作用域之外无法访问的变量。块级作用域存在于：
    - 函数内部
    - 块中: {}
  > const: 声明如果是对象，对象的中的值可以被修改。

### 临时死区 temporal dead zone
  ```
    if (true) {
      console.log(typeof val); // 报错，因为在临时死区，未声明前不可访问
      let val = 1;
    }
  ```
  在let/const声明的作用域外，不会报错。
  因为作用域外访问val不在TDZ中。这意味着不存在val这个绑定
  ```
    console.log(typeof val); // undefined
    if (true) {
      let val = 1;
    }
  ```
### let const相对于var的优点
  1. 作用域更加清晰---let const 有利于代码更好的维护
    不存在变量作用域自动提升的导致变量值被覆盖的问题。
    ```
      var a = 1;
      let b = 'b';
      if (true) {
        var a = 2;
        let b = 'B';
      }
      console.log(a); // 2
      console.log(b); // 'b'
    ```
  2. 作用域更容易控制----减少很多立即执行函数
    let的作用域是根据代码块enclosing block来判定的；
    var的作用域是根据函数块function block来判定的；

    可以代替以前的立即执行函数
    ```
    {let a = 1}
    console.log(a) // 报错 a is not defined
    ```
  3. Runtime自动检查重复声明的函数并报错---避免不必要或错误的代码声明，
    if (true) {
      let a = 1
      let a = 2 // 报错
    }

### 循环中的作用域绑定
