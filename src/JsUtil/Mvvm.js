function Vue(options = {}) {
  // vm.$options Vue上是将所有属性挂载到上面
  // 我们也和vue相同
  this.$options = options;
  // this._data
  let data = (this._data = this.$options.data);

  observe(data);
  // this就代理了this._data
  for (let key in data) {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this._data[key]; // this.a = {a: 1}
      },
      set(newVal) {
        this._data[key] = newVal;
      },
    });
  }

  // 初始化一个computed
  initComputed.call(this);

  // 编译
  new Compile(options.el, this);
  // 所有事情处理好后执行mounted钩子函数
  options.mounted.call(this);
}

function initComputed() {
  // 具有缓存功能的
  let vm = this;
  let computed = this.$options.computed; // 从options上拿到computed属性
  Object.keys(computed).forEach((key) => {
    Object.defineProperty(vm, key, {
      // computed[key]
      get:
        typeof computed[key] === "function" ? computed[key] : computed[key].get,
      set() {},
    });
  });
}

// 观察对象，给对象增加Object.defineProperty
// 这里写数据劫持的主要逻辑
function Observe(data) {
  let dep = new Dep();
  // 把data属性通过defineProperty的方式定义属性
  for (let key in data) {
    let val = data[key];
    observe(val); // 实现了深度的数据劫持
    Object.defineProperty(data, key, {
      enumerable: true,
      get() {
        Dep.target && dep.addSub(Dep.target); //  将watcher添加到订阅事件中 [watcher]
        return val;
      },
      set(newVal) {
        if (val === newVal) {
          return;
        }
        val = newVal;
        observe(newVal); // 给修改的新值也定义get/set属性
        //当set修改值的时候执行了dep.notify方法，这个方法是执行watcher的update方法
        // 通知所有订阅者，数值被改变了
        dep.notify();
      },
    });
  }
}

// 起个名字方便递归
function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  return new Observe(data);
}

// vue特点是不能新增不存在的属性 不能存在的属性没有get和set
// 深度响应 因为每次赋予一个新对象时会给这个新对象增加数据劫持(defineProperty)

// 接下来数据劫持和数据代理都实现了，需要编译了
function Compile(el, vm) {
  // el 表示替换的范围
  // 挂到vm实例上以后方便用
  vm.$el = document.querySelector(el);
  // 在el范围里将内容都拿到，当然不能一个一个的拿
  // 可以选择移到内存中去然后放入文档碎片中，节省开销
  let fragment = document.createDocumentFragment();

  while ((child = vm.$el.firstChild)) {
    // 将 el 中的内容放入内存中
    fragment.appendChild(child);
  }
  replace(fragment);

  function replace(frag) {
    Array.from(frag.childNodes).forEach(function(node) {
      let txt = node.textContent;
      let reg = /\{\{(.*?)\}\}/g;

      if (node.nodeType === 3 && reg.test(txt)) {
        //  即是文本节点又有大括号{}
        !(function replaceTxt() {
          node.textContent = txt.replace(reg, (matched, placeholder) => {
            // console.log(placeholder);
            // 匹配到的分组 如：song, album.name, singer...

            // 监听变化，重新进行匹配替换内容
            // 给Watcher再添加两个参数，用来取新的值(newVal)给回调函数传参
            new Watcher(vm, placeholder, replaceTxt);

            //placeholder.split(".") 为 数组，里面装着 {{}} 中解析出来的内容
            // placeholder.split(".").reduce((val, key) => {
            //   return val[key];
            // }, vm); 返回的是 节点 文本内容
            return placeholder.split(".").reduce((val, key) => {
              return val[key];
            }, vm);
          });
        })();
      }

      if (node.nodeType === 1) {
        // 元素节点
        // console.log(node);
        //页面上 所有节点
        let nodeAttr = node.attributes; // 获取dom节点的属性
        // console.log(nodeAttr);
        //DOM 节点个数 有v-model 为NamedNodeMap [ v-model="singer" ]
        //无则为 NamedNodeMap [ ]

        Array.from(nodeAttr).forEach((attr) => {
          let name = attr.name;
          let exp = attr.value; // v-model="c"
          if (name.includes("v-")) {
            // v-model
            node.value = vm[exp];
          }
          new Watcher(vm, exp, function(newVal) {
            node.value = newVal; // 当watcher触发时会自动将内容放进输入框中
          });
          node.addEventListener("input", function(e) {
            let newVal = e.target.value;
            console.log(newVal);
            vm[exp] = newVal;
          });
        });
      }
      // 如果还有子节点，继续递归replace
      if (node.childNodes && node.childNodes.length) {
        replace(node);
      }
    });
  }

  // 再将文档碎片放入el中
  vm.$el.appendChild(fragment);
}

// 现在编译完成了，如果手动改变数据后，页面的内容并没有变化
// 那么需要将数据劫持和编译联合一下了
// 发布订阅
function Dep() {
  // 一个数组(存放函数的事件池)
  this.subs = [];
}

//添加订阅者
Dep.prototype.addSub = function(sub) {
  this.subs.push(sub);
};

// 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
Dep.prototype.notify = function() {
  this.subs.forEach((sub) => sub.update());
};

// watcher
// 通过Watcher这个类创建的实例，都拥有update方法
function Watcher(vm, exp, fn) {
  this.fn = fn; // 当数据更新时想要做的事情
  this.vm = vm; // 被订阅的数据一定来自于当前Vue实例
  this.exp = exp; // 添加到订阅中,被订阅的数据
  Dep.target = this;
  let val = vm;
  let arr = exp.split(".");
  //取值 {{}} 中的值
  // 获取到this.a.b，默认就会调用get方法
  arr.forEach((key) => {
    val = val[key];
    // console.log(val);
  });
  Dep.target = null;
}

// 对外暴露的接口，用于在订阅的数据被更新时，由订阅者管理员(Dep)调用
Watcher.prototype.update = function() {
  // notify的时候值已经更改了
  // 再通过vm, exp来获取新的值
  let val = this.vm;
  let arr = this.exp.split(".");
  arr.forEach((key) => {
    val = val[key]; // 通过get获取到新的值
    // console.log(val);
  });
  this.fn(val); //将每次拿到的新值去替换{{}}的内容即可
};
