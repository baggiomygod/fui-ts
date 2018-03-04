function Compile (el, vm){
  this.vm = vm;
  this.el = document.querySelector(el); // 获取实例挂载的元素
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init() {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      // 编译元素
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log('DOM元素不存在！');
    }
  },
  // 创建fragment片段
  nodeToFragment(el) {
    let fragment = document.createDocumentFragment(); // 创建文本片段
    let child = el.firstChild;
    while(child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild; // ?
    }
    return fragment;
  },
  /**
   * 判断：
   * 元素节点：调用compile()
   * 文本节点：直接显示
   *
   * @param {*} el
   */
  compileElement(el){
    let childNodes = el.childNodes;
    [].slice.call(childNodes).forEach(node => {
      const reg = /\{\{(.*)\}\}/; // 解析{{data}}
      let text = node.textContent;

      // 元素节点
      if (this.isElementNode(node)) {
        this.compile(node); // 解析自定义指令

        // 本文节点
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1]);
      }

      // 如果有子元素 递归自己
      if (node.childNodes && node.childNodes.length){
        this.compileElement(node);
      }
    })
  },
  /**
   * 如果是元素节点，截止元素的属性attributes和指令
   *    - 事件指令：编译成事件, 调用compileEvent，对节点添加事件监听
   *    - v-model: 调用compileModel,
   * @param {*} node
   */
  compile(node){
    // 元素节点的所有属性attributes
    let nodeAttrs = node.attributes;
    Array.prototype.forEach.call(nodeAttrs, attr => {
      let attrName = attr.name;
      // 如果是指令
      if (this.isDirective(attrName)) {
        let exp = attr.value; // exp 指令的值 v-on:click = "doSomething"
        let dir = attrName.substring(2);
        if (this.isEventDirective(dir)) { // 事件指令
          this.compileEvent(node, this.vm, exp, dir);
        } else { // v-model
          this.compileModel(node, this.vm, exp, dir);
        }
        node.removeAttribute(attrName);
      }
    })
  },
  // 解析文本
  compileText(node, exp){
    let initText= this.vm[exp];
    this.updateText(node, initText);

    new Watcher(this.vm, exp, value => {
      this.updateText(node, value);
    })
  },
  // 解析事件
  compileEvent(node, vm, exp, dir) {
    let eventType = dir.split(':')[1];
    let cb = vm.methods && vm.methods[exp];

    // 事件触发时调用相应的methods
    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  },
  /**
   * 双向数据绑定：v-model=“exp”
   * 找到data中对应的值exp，实例化watcher,
   * @param {*} node  目标元素节点
   * @param {*} vm
   * @param {*} exp
   * @param {*} dir
   */
  compileModel(node, vm, exp, dir){
    let val = this.vm[exp];
    this.modelUpdater(node, val);
    // vm, exp, cb
    new Watcher(this.vm, exp, value => {
      this.modelUpdater(node, value);
    });
    // input事件监听
    node.addEventListener('input', e => {
      let newVal = e.target.value; // 拿到改变后的值
      if (val === newVal) {
        return;
      }
      // this.vm.data[key] = newVal proxKeys的作用在这里体现
      this.vm[exp] = newVal;
      val = newVal;
    });
  },
  updateText(node, value){
    node.textContent = typeof value === 'undefined' ? '' : value;
  },
  modelUpdater(node, value, oldValue){
    node.value = typeof value === 'undefined' ? '' : value;
  },
  isDirective(attr){ // 解析指令 v- , v-model
    return attr.indexOf('v-') === 0;
  },
  // 事件指令
  isEventDirective(dir){
      return dir.indexOf('on:') === 0;
  },
  isElementNode(node){
    return node.nodeType === 1;
  },
  isTextNode(node){
    return node.nodeType === 3;
  }

};


