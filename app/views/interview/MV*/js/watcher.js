/**
 * 要观察某个对象，必须先实例化一个Watcher,
 * 实例化时，访问vm.data的某个属性，此时出发了observer的defineResctive方法，
 * 其内部的get中判断是否添加到观察者列表
 * @param {*} vm
 * @param {*} exp
 * @param {*} cb update --> run
 */
function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get(); // 将自己欠佳到订阅器的操作
}


Watcher.prototype = {
  update: function(){
    this.run();
  },
  run: function(){
    let value = this.vm.data[this.exp];
    let oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  // 1. Dep.target指向当前实例
  // 2. 然后，访问vm.data[key]的某个属性，就触发了observer中defineReactive的get,
  // 3. 判断是否向观察者列表添加
  get: function(){
    Dep.target = this; // 缓存自己---观察者实例
    debugger;
    console.log('1.watcher get.')
    // 调要观察对象data的某个属性---此时会触发observer,defineResctive的get
    let value = this.vm.data[this.exp]; // 强制执行监听器里的get函数
    Dep.target = null; // 释放自己
    return value;
  }
};
