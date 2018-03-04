/**
 * 如要监听 data中的a对象，需要先实例化一个watcher
 *
 * 要观察某个对象，必须先实例化一个Watcher，实例化后调用get函数，
 * get中：访问vm.data的某个属性，此时出发了observer的defineResctive方法，
 * 在observer中的defineProperty的get函数中判断this.target是否存在----->是否添加到观察者列表
 * @param {*} vm
 * @param {*} exp
 * @param {*} cb update --> run
 */
function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get(); // 将自己添加到订阅器的操作
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
    Dep.target = this; // 缓存自己---this指向当前warcher对象本身（动态），观察者实例
    // 调要观察对象data的某个属性---此时会触发observer监听器,defineResctive的get函数
    let value = this.vm.data[this.exp]; // 强制执行监听器里的get函数
    Dep.target = null; // 释放自己
    return value;
  }
};
