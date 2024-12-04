#### `Vue-Router`

`hash`模式和`history`模式的区别

> `hash`模式
>
> * `hash`模式`URL`中会有一个`#`号，`#`后面的值称为`hash`值，本质上是基于浏览器提供的`hashChange`事件，当`url`中的`hash`值发生变化时，页面不会重新加载，但`Vue-Router`会根据新的`hash`值渲染相应的组件
> * 兼容性好，不需要后端额外配置，`url`的变化不会导致浏览器向服务器发送请求
>
> `history`模式
>
> * 使用`history API`实现前端路由，利用`pushState`或者`replaceState`方法管理浏览器历史记录栈，可以改变`url`而不向后端发送请求
> * 写起来更加美观没有`#`
> * 需要后端配置`URL`重写规则，以便用户在直接访问或者刷新页面时返回正确的`index.html`文件，否则可能会遇到404的错误

