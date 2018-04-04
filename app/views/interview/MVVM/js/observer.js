/**
 * Observer
 * 1. vue实例化时调用Observe
 * 2. 把所有data遍历一遍, 调用this.defineReactive,
 *      1. 识别子对象是否嵌套-->Y--->递归
 *                      ---->N--->定义对象,调用Object.defineProperty：
 *                                  - get:读取时(添加观察者列表Dep);---get时添加观察者
 *                                  - set:改变时（通知，并update）
 *
 */

function Observer (data){
  this.data = data;
  this.walk(data);
}

Observer.prototype = {
  // 遍历data,对每个key调用defineReactive方法
  walk(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    });
  },
  // 维护Dep列表
  defineReactive(data, key, val) {
    let dep = new Dep(); //列表
    // 识别子对象是否嵌套--递归
    let childObj = observe(val); // childObj没使用，如何递归？

    // get时往Dep列表中添加 观察者列表
    // set时如果发生变化通知并update
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      // get时往Dep列表中添加观察者列表---为什么在get的时候添加观察者？
      get: function getter(){
        console.log('2.defineReactive get. 添加观察者')
        // Dep.target是Watcher的实例对象(观察者实例)
        if (Dep.target) {
          dep.addSub(Dep.target); // 每个观察者实例放入到观察者列表中
        }
        return val;
      },
      set: function setter(newVal){
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify(); // 如果发生变化 ---调用通知
      }
    });
  }

}

// 如果data的某个key是对象。递归创建Observer实例，为data下所有的key添加监听
function observe(value, vm){
  if(!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
}

// 观察者列表
function Dep(){
  this.subs = [];
}

Dep.prototype = {
  // 往观察者列表中添加
  addSub(sub){
    this.subs.push(sub);
  },
  // 通知观察者列表更新
  notify(){
    this.subs.forEach(sub => {
      // 观察者列表中每个对象都是Watcher的实例，
      // 他们有自己的update方法，
      sub.update();
    })
  }
}
Dep.target = null;
