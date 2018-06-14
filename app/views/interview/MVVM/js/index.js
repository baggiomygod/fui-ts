function Vue (options) {
  this.data = options.data;
  this.methods = options.methods;

  Object.keys(this.data).forEach(key => {
    this.proxKeys(key); // 代理
  });

 // 实例化时调用observe 实现监听data
  observe(this.data);
  new Compile(options.el, this);
  // 所有事情处理好后执行mounted函数
  options.mounted.call(this);
}

Vue.prototype = {
  // 通过代理实现 vm[key] = 'aaa' ----> 实际做了：vm.data[key] = 'aaa';
  proxKeys(key) {
    let self = this;
    // this---vue实例:vm
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function(){
        // console.log('vm get:', self);
        return self.data[key];
      },
      set: function(newVal){
        // debugger;
        // console.log('vm set:', self);
        self.data[key] = newVal;
      }
    });
  }
}
