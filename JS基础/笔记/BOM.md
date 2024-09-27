#### BOM

1. `window`

   * `window.isSecureContext`——是否是安全的执行上下文(http/https)

   * `screenX`和`screenY`——浏览器窗体距离屏幕顶部和左侧的距离

   * `innerHeight`和`outerHeight`——内容区域的高度和浏览器窗体的高度

   * `window.opener`——返回一个窗口的引用，本质上为同一个窗口

   * `window.open`——打开一个新的窗口

   * 窗体的可见性

     > 通过监听`window`的`focus`+`blur`事件判断窗体是否可见
     >
     > `documnet.visibilityState`和`document.hidden`
     >
     > * 通过监听`visibilityChange`事件来判断窗体是否可见
     > * `visibilityState`取值：`visibiable`、`hidden`
     > * `hidden`：`true`/`false`

   * 滚动方法

     > `scrollTo()`和`scroll()`——滚动到
     >
     > `scrollBy()`——滚动的偏移量

   * `window.matchMedia()`

     > 用于判断`Document`是否匹配媒体查询
     >
     > 监控一个`document`来判断它匹配了或者停止匹配了此媒体查询

   * `window.getSelection()`

     > 表示用户选择的文本范围或光标的当前位置
     >
     > `Document.activeElement`——返回当前的焦点元素

   * `window.frameElement`

     > 表示当前窗体嵌入到的元素，如果当前窗体未嵌入到其他元素则返回null

   * 网络状态

     > `window.onLine`——监听在线状态
     >
     > `window.offLine`——监听离线状态
     >
     > `navigator.onLine`——判断是否在线状态

   * `window.print` 

     > 设置打印样式
     >
     > * `@media print`
     > * `<style media = 'print'>`
     > * `<link rel='.index/css' media = 'print'>`
     >
     > 打印局部信息思路
     >
     > * 通过设置样式隐藏不被打印的部分

   * 文档全屏

     > `document.requestfullScreen()`——进入全屏
     >
     > `document.exitfullScreen()`——退出全屏
     >
     > `fullscreenChange`——监听进入或退出全屏方法

2. 窗口之间消息通信

   `postMessage`
   
   > `iframe`与主窗体之间进行消息通信
   >
   > 不受同源策略影响
   >
   > 需要拿到窗体的引用
   
   `StorageEvent`
   > 遵循同源策略
   >
   > 同窗口不能监听
   
   `Broadcast Channel`
   
   >允许同源的不同浏览器窗口、tab页、frame或者iframe下的不同文档之间相互通信
   >
   >同源策略
   
   `SharedWorker`
   
   >共享的`worker`，不同页面可以共享
   >
   >同源策略
   
   `WebSocket`
   
   > 全双工通讯
   >
   > 不受同源策略影响
   
3. `location`

   > `loaction.origin`属性是只读的，存在兼容性问题
   >
   > 除`hash`，其他任意属性的修改都会以新的`URL`重新加载，修改这些属性值会在浏览器的历史记录中生成一条新的历史记录

   `window.location.reload`

   > 重新加载当前文档
   >
   > `false`或者不传，浏览器可能从缓存中读取页面
   >
   > `true`强制从服务器重新下载文档

   `hash`监听方式

   > `window.onhashchange = funcRef`
   >
   > `window.addEventListener('hashchange', funcRef, false)`
   >
   > `<body onhashchange = 'funcRef()'>`

   `encodeURI vs encodeURIComponent`

   > 使用`encodeURI`编码整个URL
   >
   > 使用`encodeURIComponent`编码URL中的参数
   
4. `navigator`

   `navigator.userAgent`

   > `ua-parser-js`——用于解析各种设备

   `navigator.serviceWorker`

   > 判断浏览器是否支持`serviceWorker`

   `navigator.storage`

   > 浏览器存储

   `navigator.sendBeacon`——上报数据

   > 作用：通过`httpPost`将少量的数据异步传输到`web`服务器
   >
   > 主要用于将统计数据发送到`web`服务器

   `navigator.permissions`

   > 获取权限信息

5. `history`

   > `history.back`
   >
   > `history.forward`
   >
   > `history.go`
   >
   > `history.length`

   `history.pushState`

   > 会增加历史访问记录，但不会改变页面的内容
   >
   > 新的`url`跟当前的`url`必须同源

   `history.replaceState`

   > 替换浏览器记录栈顶的记录，不会增加栈的深度
   >
   > 新的`url`跟当前的`url`必须同源

   `window.onpopstate`

   > 当前活动历史记录条目更改时，将会触发`popstate`事件
   >
   > **调用`history.pushState()`或者`history.replaceState()`不会触发**
   >
   > **页面刷新时，注意要服务端配合返回`index.html`页面**

