# vue生命周期
https://segmentfault.com/a/1190000008010666
  ```
  <script type="text/javascript">

    var app = new Vue({
        el: '#app',
        data: {
            message : "xuxiao is boy"
        },
        beforeCreate: function () {
                  console.group('beforeCreate 创建前状态===============》');
                console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //undefined
                console.log("%c%s", "color:red","message: " + this.message)
          },
          created: function () {
              console.group('created 创建完毕状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
          },
          beforeMount: function () {
              console.group('beforeMount 挂载前状态===============》');
              console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
          },
          mounted: function () {
              console.group('mounted 挂载结束状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
          },
          beforeUpdate: function () {
              console.group('beforeUpdate 更新前状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el);
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
          },
          updated: function () {
              console.group('updated 更新完成状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el);
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
          },
          beforeDestroy: function () {
              console.group('beforeDestroy 销毁前状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el);
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
          },
          destroyed: function () {
              console.group('destroyed 销毁完成状态===============》');
              console.log("%c%s", "color:red","el     : " + this.$el);
              console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message)
          }
      })
  </script>

  ```
  ### create mounted
    - beforecreated: el和data并未初始化
    - created: 完成data数据的初始化，el没有初始化
    - beforeMounted: 完成el和data的初始化
    - mounted:完成挂载

  ### update

  ### destory

  ## 总结
    - beforecreated: 可以在这个阶段加loading事件
    - created: loading结束，初始化和函数自执行
    - mounted: 这个阶段发起与后端请求，拿回数据，配合路由钩子。DOM操作
    - boforeDestory:
    - destoryed:当前组件已被删除，清除相关内容
