#### Vue2 vs Vue3

* 生命周期
  * Vue2: `beforeCreate` `Created` `beforeMount` `mounted` `beforeUpdate` `updated` `beforeDestory` `destory`
  * Vue3: `onBeforeMount` `onMounted` `onBeforeUpdate` `onUpdate` `onActivate` `onDeactivate` `onBeforeUnMount` `onUnMounted` 
  * Vue3中用`setup`代表了`beforeCreate` `Created`生命周期
* 响应式原理不同
* Vue3支持`fragment`多根节点组件
* Vue3支持`teleport`组件允许将dom挂载到指定位置
* Vue3支持组合式API
  * 优点：提高代码的可读性和可复用性
* `TypeScript`支持
* 打包优化
  * 可以通过 `import`和`export`实现对所需模块的导入导出，未被导入的模块不会被打包
* Diff优化
  * Vue3通过最长递增子序列的思想进行优化

#### 虚拟dom
* 虚拟dom是对于真实dom的一个抽象，实际上是一个JavaScript的对象
* 为什么要有虚拟dom
  * 操作真实dom很耗时频繁操作会影响页面性能
  * 有利于实现diff算法，减少dom操作
  * 抽象了页面的渲染过程，有利于实现跨平台能力，不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件