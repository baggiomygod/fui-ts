# sort
  用于对数组进行排序，并返回一个数组。

  ### sort默认排序
    sort默认排序是根据字符串Unicode码点
  ### 可以传入排序函数
    ```
      function compare(val1, val2){
        // val1 小于 val2,val1被排到val2的前面
        if (val1 < val2) {
          return -1;
        }
        // val1 > val2, val2 排到val1前面
        if (val1 > val2) {
          return 1;
        }
        return 0;
      }
    ```

    ##### 简化(箭头函数)
    ```
      let arr = [4,2,1,0,9,10];
      arr.sort((v1, v2) => v1-v2);
      // [0,1,2,4,9,10]
    ```
  ### 对象数组根据某个属性排序
  ```
    let items = [
      {name:'a', age:11},
      {name:'b', age:21},
      {name:'c', age:31},
      {name:'d', age:1},
      {name:'e', age:10},
      {name:'f', age:13}
    ];
    // 根据age升序
    items.sort((v1, v2) => v1.age - v1.age);

    // 根据name 降序
    items.sort((a, b) => {
      if (a.name < b.name){
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
    });
  ```

