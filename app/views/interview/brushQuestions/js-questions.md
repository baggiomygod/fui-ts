# js题目
  ### 1.记忆华斐波那契函数
    ##### 实现，并要求超时:
      考点： 记忆
      fibonacci(1); // 1
      fibonacci(2); // 1
      fibonacci(3); // 2
      fibonacci(4); // 3
      ...

    f(n) = f(n-1) + f(n-2)


    实现1：循环
    ```
      function fibonacci(index){
        let arr = []
        for (let i = 0; i < index; i++){
          if (i === 0 || i === 1) {
            arr.push(1);
          } else {
            arr.push(arr[i-1] + arr[i-2])
          }
        }
        return arr;
      }
      function getFibIndex(index){
        let result = fibonacci(index)[index - 1];
        console.log(`斐波那契第${index}个值是：${result}`);
      }
    ```

    实现2： 递归, 缺点n太大时，计算速度慢
      ```
        function fibonacci(n){
          if (n ===1 || n === 2) {
            return 1;
          }
          return arguments.callee(n-1) + arguments.callee(n-2);
        }
      ```
      简化：
        这样是可以工作的，但是它做了很多重复的工作，
        fibonacci函数被调用了277次
      ```
        let count = 0;
        function fibonacci(n){
          count ++;
          return n <= 2 ? 1 : arguments.callee(n-1) + arguments.callee(n-2);
        }
        for (let i = 0; i<= 10; i++){
          console.log(i + ':' + fibonacci(i));
        }
        console.log(count); // 277
      ```
    ##### 实现3：记忆
      函数可以将先前操作的结果记录哎耨个对象里，从而避免无谓的重复运算。这种优化被称为记忆（memoization）.
    ```
      let count = 0;
      let fibCount = 0;
      let memoFibonacci = function(n){
        let memo = [0, 1];
        let fib = (n) => {
          let result = memo[n];
          if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
            fibCount++;
          }
          count ++;
          return result;
        }
        return fib;
      }()
      for (let i = 0; i<= 10; i++){
          console.log(i + ':' + memoFibonacci(i));
      }
      console.log(count); // 同样的结果，只计算了29次
      console.log(fibCount); // 同样的结果，递归计算了9次

      // 再调用已计算过的值时，不调用递归，直接读取保存的值
      memoFibonacci(2);
      count; // 30
      fibCount; // 9
    ```

  ### 2. 两数字之和
    https://leetcodechina.com/problems/two-sum/description/

    给定一个整数数列，找出其中和为特定值的那两个数。
    你可以假设每个输入都只会有一种答案，同样的元素不能被重用。
      示例:
      给定 nums = [2, 7, 11, 15], target = 9
      因为 nums[0] + nums[1] = 2 + 7 = 9
      所以返回 [0, 1]

      ```
        let nums = [2, 7, 11, 15], target = 9;

        function twoSum(nums, target){

        }
      ```

    ### 3. 解析字符串
      正则：
        - \w：等价于[A-Za-z0-9_],匹配包括下划线的任何单次字符
        - ?<=: 非获取匹配：反向肯定预查。匹配返回值不包活(?<=这里的内容)XXX；
              ```
                let pattern = /(?<=1|2|3|x)hello/;
                let str = '1hello';
                let match = str.match(pattern);
                console.log(match);  // hello;
              ```
        - ?=:非获取匹配，正向肯定预查。匹配返回值不包括xxx(?=这里的内容)
          ```
            let pattern = /hello(?=1|2|3)/g;
            let str = 'hello1hello2hello3'l
            str.match(pattern); //
          ```
        - ?<!:非捕获匹配，反向否定预测。匹配(?<!不是这里的值)xxx。
        - ?！:非捕获匹配，正向否定匹配，与上面相反
        - ?: , 非捕获匹配，匹配pattern但不捕获匹配结果，不进行存储供以后使用。
            ```
              let pattern = /hello\s*(?:world|js)/;
              let str1 = 'hello world';
              str1.match(pattern); // ['"hello world", index: 0, input: "hello world"']
              let str2 = 'hello  js';
              str2.match(pattern); // ['"hello js", index: 0, input: "hello js"']
              let str3 = 'hello  node';
              str3.match(pattern); // null

            ```
        - str.match(pattern);
          1. pattern 全局匹配时，为何返回数组没有index,input属性
          2. pattern 非全局匹配时，返回数组有index,input属性
        - pattern.exec(str);
          1. exec
      ```
        let str = 'My name is:Jerry. My age is:12.';
        function extractStr(str){
          const strRE = /\:+(\w*)\.+/g;
          const strRE2 = /(?<=:).+?(?=\.)/g;
          let match = str.match(strRE); // ['']
        }
      ```
