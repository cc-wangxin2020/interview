#### 基础晋级

* 数据类型细节

  * 判断是不是`Object` 

  * 一元运算符+转数组

    * ES6中的`bigInt`和`Symbol`类型不能通过`+`转为数字

  * 通过运算符转数字

    * `>> 0` `>>> 0`——通过有符号位移和无符号位移转数字

    * 不能通过此方法转超过32位的数字

  * 字符串批量转为整数

    * `arr.map(parseInt)`

  * 宽松比较 `==`

    * `NaN`——跟谁都不会相等，包括自己
    * `bigInt`、`Symbol`
    * `null` 、`undefined` 相等
    * 布尔类型和其他类型的相等比较（转数字） 
    * 数字类型和字符串类型的相等比较（转数字）
    * 对象类型和原始类型的相等比较（对象转原始）

  * 综合评定数据类型的八种方式

    * `typeof`
      * 返回操作数的类型，只能识别基础数据类型和引用类型
      * `null`-> `object` 、`NaN` -> `number`、`document.all`-> `undefined`
      * 注意：会有暂时性死区问题，在块作用域下不能被提前访问
    * `constuctor`
      * `constuctor`指向创建实例对象的构造函数
      * `null`和`undefined`没有构造函数
      * 注意：`constuctor`可以被改写
    * `instanceof`
      * 在原型链上查找，查到即是实例
      * 右操作数必须为函数或者`class`
      * 注意：多全局对象
    * `isPrototypeOf`
      * 是否出现在实例对象的原型链上
    * `Object.prototype.toString`
      * 通过函数的动态`this`特性，返回数据类型`[object Date]`
    * `Symbol.toStringTag`
      * `Object.prototype.toString`会读取该值
      * 适用场景：需自定义类型

    ![image-20240701214752886](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240701214752886.png)

  * `isNaN vs Number.isNaN`

    * 前者将值转换为number 再进行严格相等判断，可能会出现类型转换错误
    * 后者进行两次判断 `typeof` 和 `Object.is()`，`ES6`新标准
    * `Object.is()`严格区分0、-0、NaN

  * 数值千分位6种方法

    ![image-20240701224151718](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240701224151718.png)

  * **二元操作符** + 规则

    * 如果操作数是对象，则对象会转换为原始值
    * 如果其中一个操作数是字符串，另一个操作数也会转换成字符串，进行字符串连接
    * 否则两个操作数都将转换成数字或者NAN，进行+操作
    * 对象转为原始类型的值
      * `Symbol.ToPrimitive`
      * `Object.prototype.valueOf`
      * `Object.prototype.toString`

  * **一元操作符** + 规则

    * 将后面的字符转换成数字

* 对象认知升级

* 运算符妙用

* 数组高级用法

* 函数

* DOM

  * `NodeType`

    * `Comment`
    * `Document`
      * 节点查找：
        * `document.querySelector`
        * `document.querySelectorAll`
      * 节点集合信息
        * `document.all`
        * `document.forms`
        * `document.scripts`
        * `document.images`
        * `document.links`
      * `cookie`
        * `document.cookie`
    * `DocumentType`
      * 访问方式：`document.doctype`、`document.firstChild`
        * `name`属性：`html`
    * `DocumentFragment`
      * 跟标准的`dcument`一样，存储由节点`nodes`组成发文档结构
      * 所有节点会被一次插入到文档中，而此操作仅发生一次重渲染操作
      * 常用于批量创建大量节点，提高性能
    * `Element`

  * `Node`查询和遍历

    * `Node`和`Element`

      * `Node`是一个接口——节点
      * `Element`是通用性的基类，`nodeType`为1，是`Node`的一类实现，其子类统统称为元素
      * `Node`还有很多其他实现，如文本、注释

    * `HTMLCollection`和`NodeList`

      * 前者是`Element`子类的集合——`children`
      * 后者是所有`Node`子类的集合——`childNodes`

    * 节点查询

      | 方法名                  | 单个元素 | 节点列表 | 元素集合 | 元素也拥有 | 实时更新 |
      | ----------------------- | -------- | -------- | -------- | ---------- | -------- |
      | `getElementById`        | *        |          |          |            |          |
      | `querySelector`         | *        |          |          | *          |          |
      | `getElementByClassName` |          |          | *        | *          | *        |
      | `getElementByName`      |          | *        |          |            | *        |
      | `getElementByTagName`   |          |          | *        | *          | *        |
      | `querySelectorAll`      |          | *        |          | *          |          |

    * 元素集合和`NodeList`遍历

      * `for/while`遍历
      * `NodeList.prototype.forEach`
      * 转为数组遍历：`Array.from`、`Array.prototype.slice`、扩展运算符

    * 某个节点/元素所有子节点/元素遍历

      * `children`或者`childNodes`
      * `NodeIterator`或者`TreeWalker`

  * `Node`增加和删除

    * 创建+挂载

      * 显示创建+隐式创建

      * 挂载

        ![image-20240707164312955](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707164312955.png)

        ![image-20240707171037504](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707171037504.png)

    * 节点克隆

      * `Node.cloneNode`

      * `documnet.importNode`
      * `document.adoptNode`

    * 节点删除

      * `Node.removeNode`
      * `Element.remove`
      * `outerHTML`或者`innerHTML`
      * `Document.adoptNode`

  * 内存泄露

    * 全局作用域
    * 闭包
    * `eval()`

  * 易混概念

    ![image-20240707172830074](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707172830074.png)
    
    * `innerText` vs `textContent`
    
      * 前者可操作已被渲染的内容，而`textContent`不会
      * `innerText`受样式影响会触发浏览器绘制部分或全部页面，带来性能问题，尽可能使用`textContent`
    
    * `value` vs `nodeValue`
    
    * `clientWidth` vs `offsetWidth` vs `scrollWidth`
    
      ![image-20240707173948974](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707173948974.png)
    
    * 节点位置关系
    
      * `compareDocumentPosition`返回的是数字，带组合意义的数据，不仅仅可以返回包含，还可以返回在之前之后等信息
      * `contains`返回的是布尔值，仅仅返回是否有包含关系
    
    * 加载
    
      * `window.onload`
      * `DOMContentLoaded`
    
  * `web component`

    * `vue slot`和`scoped css`借鉴了谁的思想

    * `scoped css`在`vue`里的实现原理

    * 声明周期

      * `connectedCallback`——插入文档时
        * 对节点的操作位于此声明周期
        * 可能被多次触发
      * `disconnectedCallback`——从文档删除时
      * `adoptedCallback`——被移动新文档时
      * `attributeChangedCallback`——属性变化时
        * 配合`observedAttributes`属性一起使用，指定监听的属性
        * 使用`setAttribute`方法更新属性

    * `slot` + `shadow dom`

      * 影子`dom`，其内部样式不共享

      * 影子`dom`，其内部元素不能被直接访问到

        * `mode: open`：`shadow root`元素可以从js外部访问根节点

        * `mode: closed`：拒绝从Js外部直接访问关闭的`shadow root`节点

    * 优点

      * `W3C Web` 标准
      * 主流浏览器均以支持，兼容性相对较好
      * 天然模块化，自带样式隔离
      * 开箱即用

    * 作用：组件库、微前端

  * `DOM`事件原理

    ![image-20240707215607688](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707215607688.png)

    * `window` 和`document`的关系
      * `BOM`：浏览器对象模型，没有相关标准，一些和网页无关的浏览器功能。如：`window`、`location`、`navigator`、`screen`、`history`等对象
      * `DOM`：文档对象模型，`W3C`的标准，`HTML`和`XML`文档的编程接口
      * `window`属于`BOM`，`document`是`DOM`中的核心，`window`引用着`document`
      
    * `DOM0`级事件
      * 通过`onClick`属性对节点进行赋值
      * 优点
        * 效率高
        * 节点`onClick`属性被`Node.cloneNode`克隆，通过`JS`赋值的`onClick`不可以
        * 移除事件非常简单
      
    * `DOM2`级事件
      * 三个阶段：捕获阶段、目标阶段、冒泡阶段
      * `once`——是否只响应一次，如：视频播放
      * `passive`
      * `signal`
        * `AbortSignal`，该`AbortSignal`的`abort()`方法被调用时，监听器就会被移除
        * `AbortSignal`也被用于取消`fetch`请求
      * `target` vs `currentTarget`
        * 前者是触发事件的元素
        * 后者是绑定事件的元素
      * 事件委托
        * 利用事件传播的机制，利用外层节点处理事件的思路
        * 减少内存消耗；“动态性”更好
      * ![image-20240707224651415](C:\Users\ccwangxin\AppData\Roaming\Typora\typora-user-images\image-20240707224651415.png)
      * 自定义事件
        * `document.createEvent`
        * `new Event` vs `new CustomEvent`——可以携带额外参数`detail`
          * 从继承关系来看，后者是前者的扩展
          * 参数支持，前者适合简单的自定义事件，后者支持传递数据的自定义事件
      
    * `JS`操作样式
    
      * 样式来源
    
        * 浏览器默认样式
        * 浏览器用户自定义样式
        * `link`引入外部样式
        * `style`标签
        * `style`属性：内联样式
    
      * 样式优先级
    
        内联样式 > Id选择器（#id） > 类和伪类选择器（.class） > 标签选择器（div） > 通配符选择器（*）
    
      * 操作节点的`style`属性
    
        * `style`属性只读
    
        * `style`属性名是驼峰语法
        * `style.cssText`批量赋值
    
      * 节点`classList`和`className`属性
    
        * 前者类数组拥有`add`、`remove`、`contains`、`toggle`等方法
        * 后者为一个字符串
    
      * 操作`style`节点内容 
    
        * 操作`node`节点
    
        * `CSSOM`
    
          ![image-20240708111734867](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240708111734867.png)
    
      * 操作外部引入样式
    
      * `window.getComputeStyle`
    
        * 获得计算后的样式
        * 计算后的值不等于设置的`style`值
        * 可以查询到伪类元素的值
        * 此方法会引起重排
    
    * 订阅发布中心
    
      * 一种消息通知机制，也是一种发布订阅模式的实际应用
      * 应用场景：公众号消息、短信提醒
      * 事件中心注册事件，当发布者触发事件时，由事件中心进行分发执行
        * 注册（监听）事件：`on`
        * 触发（订阅）事件：`emit`
        * 取消注册：`off`
        * 注册只能订阅一次事件：`once`

* BOM

  * `window`

    * 窗体可见性

      * `hidden`与`visibilityState`返回值不同，一个是布尔值，一个是字符串
      * `visibilityState`的状态多一种`prerender`，其对应的`hidden`值是`true`
      * `visibilityState`有关的事件：`visibilitychange`

    * `scrollTo()`、`scroll()`、`scrollBy()`

      ![image-20240709102843114](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709102843114.png)

    * `window.matchMedia()`

      * 可被用于判定`Document`是否匹配媒体查询
      * 监控一个`document`来判定它匹配了或者停止匹配了此媒体查询

    * `window.getSelection()`

      * 表示用户选择的文本范围或光标的当前位置
      * 可使用`document.activeElement`来返回当前的焦点元素
      * 等价方法：`document.getSelection()`

    * `window.frameElement`

      * 返回当前`window`对象的元素，如果当前`window`对象已经是顶层元素，则返回`null`

      ![image-20240709105427243](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709105427243.png)

  * 窗口间传递消息

    ![image-20240709110428879](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709110428879.png)

    * 同源策略
      * 协议名、主机名、端口号三者相同的地址即为同源
    * `WebSocket`
      * 引入第三者进行中转
      * 缺点——需要引入服务器
    * 定时器+客户端存储
      * 本地存储+本地轮询
      * 客户端存储
        * `cookie`
        * `localStorage/sessionStorage`
        * `indexDB`
        * `chrome`的`FileSystem`
    * `postMessage`
      * 用某种手段建立窗口间的联系，通过`postMessage`进行跨窗体通讯
      * 优点：不受同源策略的限制
      * 缺点：必须拿到对应窗口的引用
    * `StorageEvent`
    * `BroadcastChannel`
    * `MessageChannel`
    * `SharedWorker`

    ![image-20240709113641065](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709113641065.png)

  * `Location`

    ![image-20240709155813213](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709155813213.png)

    ![image-20240709162802770](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709162802770.png)

    * `hash`——监听方式

      * 监听`hashchange`事件

    * `URL.searchParams`

      ![image-20240709164358494](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709164358494.png)

  * `navigator`

    ![image-20240709164806818](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709164806818.png)

    * `navigator.userAgent`

      解析`userAgent`：`ua-parser-js`

    * `navigator.onLine`——在线状态

      * 返回浏览器在线状态，`true || false`
      * 结合`document.ononline`与`document.onoffline`监听网络变化

    * `navigator.serviceWorker`——缓存网络资源，提供离线访问能力

    * `navigator.sendBeacon`——上报数据

      * 通过`httpPost`将少量数据异步传输到`web`服务器
      * 主要用于将统计数据发送到`web`服务器，同时避免了用传统技术`XMLHttpRequest`发送分析数据的一些问题

  * `history`

    ![image-20240709171621640](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709171621640.png)

    * `go`
      * 在会话历史中向前或者向后移动指定页数
      * 负值表示向后移动，正值表示向前移动，如果未向该函数传参或者等于0，则该函数与调用`location.reload()`具有相同效果
      * 如果需要移动的页面数大于可以移动的页面数，不进行任何移动
    * `history.pushState`
      * 语法：`history.pushState(state, title[, url])`
      * 其会增加历史访问记录（即使`url`为空），但不会改变页面的内容
      * 新的`URL`跟当前的`URL`必须是同源
    * `history.replaceState`
      * 语法：`history.replaceState(stateObj, title, [url])`
      * 替换浏览器记录栈顶部的记录，不会增加栈的深度
      * 新的`URL`跟当前的`URL`必须是同源
    * `window.onpopstate`
      * 当活动历史条目更改时，将触发`popstate`事件
      * 调用`history.pushState()`或者`history.replaceState()`不会触发
      * `popstate`事件只会在浏览器某些行为下触发，比如点击后退、前进按钮（或者在JS中调用`history.back()`、`history.forword()`、`history.go()`）
      * `a`标签的锚点点击事件
    * 刷新的问题
      * `history.pushState`方案，刷新的时候需要服务端的配合
      * 方案：不管访问路由是什么，统一返回`index.html`

  * 手写简易`Router`

    * 基本功能
      * 容器
      * 路由
      * 业务组件&链接组件
    * 实现思路
      * 自定义标签——`web components`
      * 业务组件
      * 监听路由变化：监听`popstate`+自定义事件处理`pushState`和`replaceState`

#### HTTP

* `HTTP1.0`

  * 链接复用，长连接。多个请求都可以复用一个`TCP`连接，1.0每次请求都需要重新建立连接
  * 管道化技术
    * 多个连续的请求不用等待立即返回就可以被发送，减少了耗费在网络延迟上的时间
  * 支持响应分块，返回部分内容（206 返回部分内容）
  * 新的缓存控制机制，`cache-control`、`eTag`——强缓存和协商缓存
  * 新增`host`请求头，能够使不同域名配置在同一个IP地址的服务器上

* 常用状态码

  ![image-20240709205614793](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709205614793.png)

* 请求头

  ![image-20240709205811356](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709205811356.png)

* 响应头

  ![image-20240709210044966](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709210044966.png)

* `HTTPS`

  * 超文本传输安全协议
  * `HTTPS`是`HTTP`协议的一种扩展，使用传输层安全性`TLS`或者安全套接字层`SSL`对通信协议进行加密

* `HTTP2`

  * 二进值帧、多路复用、头部压缩、服务器推送

#### WEB API

* 网络请求

  * `Ajax`

    * 全称：`Asynchronous Javascript And XML`（异步JS和XML）
    * 是多种现有技术的集合，实现无页面刷新的数据获取
    * `HTML`、`XHTML`、`CSS`、`JS`、`DOM`、`XML`、`XSTL`、`XMLHttpRequest`

  * `XHR(XMLHttpRequest)`

    ![image-20240709213200059](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709213200059.png)

    * 属性

      ![image-20240709213352967](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709213352967.png)

    * 事件

      ![image-20240709213420827](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709213420827.png)

    * 缺点

      * 回调地狱
      * 不符合关注点分离原则

  * `Fetch`

    ![image-20240709213819983](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709213819983.png)

    * 优势
      * `Promise`语法，解决了回调地狱的问题
      * 更合理的设计，分离`Request`，`Response`等通用对象
      * 前端可拦截301、302等跳转
      * 支持数据流（`stream`），方便处理大文件
      * 语法简单
    * 缺点
      * 缺少中断请求的接口
      * 缺少直接获取请求传输进度的能力
      * 兼容性问题
      * 不支持超时——使用`setTimeout`自己封装
      * 同源携带`cookie`，不同源不携带`cookie`
    * 推荐使用`axios`
      * 结合`XMLHttpRequest`+`Promise`

  * `Axios`

    * `Axios`是一个基于`Promise`网络请求库，作用于`Node.js`和浏览器中
    * 客户端：`XMLHttpRequest`进行二次封装
    * 服务器：使用`Node.js http` 模块

  ![image-20240709215359620](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240709215359620.png)

  * 跨域请求

    * `JSONP`
    * `CORS`
    * `websocket`

  * 取消网络请求

    > 注意: 取消的请求可能到达服务器也可能未到达服务器

    * `XMLHttpRequest`
      * `XMLHttpRequest.abort()`
    * `fetch`
      * `AbortController`对象的`abort()`
    * `Axios`
      * `AbortController`对象的`abort()`
      * `axios.concalToken`

  * 文件上传

    * 步骤

      1. `input`标签选择文件/拖拽方式获取文件/复制到剪切板获取文件
      2. `File API`获取文件信息
      3. `XMLHttpRequest`上传/`Fetch`上传
      4. 上传数据：`FromData/Blob`等，服务器端：`fromData`使用`multipart/form-data`

    * 单个文件上传

      ![image-20240710171053604](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240710171053604.png)

    * 多文件上传

    * 大文件上传

      思路：客户端将文件进行分块同步发送多个请求，服务器将多个分块进行合并，在发送请求前先计算**内容`hash`**值，并携带此`md5`值来使服务器确定不同的分块属于同一个文件

      ![image-20240710175748824](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240710175748824.png)

      * 大文件如何实现**断点续传**

        通过向后端发送请求获取已上传的切片列表，通过hash值过滤已上传的切片，只对未上传的切片发送请求

      * 大文件上传进度如何实现

      * 内容`hash`的速度怎么提升

        * 放到`service worker`里运行

  * 高效加载网络资源

    ![image-20240710201822517](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240710201822517.png)

    * 页面加载流程

      页面加载 -》 DNS解析 -》 TCP连接 -》 HTTP请求 -》 服务器响应 -》 浏览器解析

    * 解析渲染过程

      

    * 页面加载时间
    
      * `Navigation Timing API`——提供了可用于衡量一个网站性能的数据
      * `JS`对象模型：`PerformanceTiming`

    * 资源加载时间
    
      * 获取和分析应用资源加载的详细网络计时数据，比如`XMLHttpRequest`、`SVG`、图片、或者脚本
      * `JS`对象模型为`PerformanceResourceTiming`

    * 资源加载优先级
    
      * `html`、`CSS`、`font`同步的`XMLHttpRequest`这三种类型的资源优先级最高
      * 在可视区的图片、`script`标签，异步`XMLHttpRequest`和`fetch`等
      * 图片，音视频
      * `prefetch`预读取的资源

    * 预加载系列
    
      ![image-20240710211315010](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240710211315010.png)
      
    * 图片的加载
    
      * 压缩图片
      * 选择图片的格式，优先选择`jpg`和`webp`格式
      * `CDN`
      * `dns-prefetch`
      * 图片多的话，放不同域名提高并发数
      * 大图`png`交错，`jpg`渐进式提高视觉体验
      * 懒加载，`IntersectionObserver`进入可视区再加载图片
    
  * 资源加载器的基本原理

    * 发送请求获取资源
    * 用`key`标记资源
    * `URL.createObjectURL`生成`url`，以便之后复用
    
  * 资源属性设计

    * `key`：资源的唯一标记
    * `url`：资源的地址
    * `ver`：资源的版本标记
    * `pre`：资源加载的前置项，比如`react-diglog`依赖项`["react", "react-dom"]`

  ![image-20240710220602954](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240710220602954.png)

* 异步编程

  * 异步解决方案

    * 同步和异步

      * 同步：执行某个任务时，没有得到结果之前，不会继续后续的操作
      * 异步：一个异步任务执行后，没有得到结果之前，就可以继续执行后续操作，异步任务完成后，一般通过回调通知调用者，比如`setTimeout`、`fetch/XMLHttpRequest`请求

    * 基于回调函数的异步处理

      * 回调地狱、高度耦合、不易维护、不能直接`return`

    * 事件驱动

      * 去耦合、便于实现模块化

      * 运行流程不清晰、阅读代码困难

    * 发布订阅

      * 使用事件驱动，但有一个消息中心，可以查看消息流转

    * `promise`

      * 拉平回调函数，把回调嵌套变为链式调用
      * 链式调用，流程清晰
      * 代码冗余不够简洁；无法取消`promise`；错误需要通过回调函数捕获

    * 异步终极方案——`async + await`

      * `async`函数是`Generator`函数的语法糖

  * `promise`

    * 三种状态
      * `pendding`
      * `fulfilled`
      * `rejected`
    * `promise API`
      * 静态方法
        * `all`——全部`promise`执行成功，或者任意一个执行失败
        * `allSettled`——执行多个`promise`，不论成功失败，结果全部返回
        * `any`——接受一个`promise`集合，返回第一个成功者
        * `race`——`promise`集合中，返回最快的`promise`触发结果
        * `resolve`——返回一个解析过参数的`promise`对象
        * `reject`——返回一个状态为失败的`promise`对象
      * 原型方法
        * `then`
        * `catch`
        * `finally`

  * `asnyc`

    * 生成器函数
      * 一个普通的函数，执行后返回一个`Generator`对象
    * `Generator`对象
      * 实现了迭代器协议（`next()`）和可迭代协议（`for..of`）
    * `asnyc`本质
      * 是对`generator`的一种封装，一种新的语法糖
      * `async`函数里面，不是所有异步代码都需要`await`，主要是看业务上是否有依赖关系，不然就会有无用的等待

    ![image-20240711162228870](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240711162228870.png)

* 事件循环

  * 进程和线程

    * 进程：资源分配的最小单位
    * 线程：CPU调度的最小单位
    * 线程依附于进程，一个进程可有多个线程

  * 异步操作

    * 异步操作一般是由浏览器的两个或者两个以上的线程共同完成的

  * 宏任务

    * `MessageChannel`执行时间要早于`setTimeout(fn, 0)`

  * 微任务

    * `promise`

    * `mutationObserver`
      * 在一个事件循环内只能生成一个微任务
    * `queueMicrotask`
      * 在本次事件循环结束前插入一个微任务，比`setTimeout(fn, 0)`更快
      * 添加的微任务未提供取消的手段
      * 语法：`queueMicrotask(function)`

    ![image-20240711193029762](C:\Users\cc_wa\AppData\Roaming\Typora\typora-user-images\image-20240711193029762.png)

  * 一个窗口打开另一个窗口，**共享事件循环**

  * 总结

    * 浏览器通常每秒渲染60次界面，平均16ms一次渲染，由于一次事件循环的执行顺序：一个宏任务-》所有附属微任务-》UI渲染，为了保障流畅，就必须单个宏任务和所有附属微任务执行时间为16ms之内
    * `.click()`、`dispathEvent()`会导致事件同步调度

* 客户端存储

* 计时器和动画

* 异常处理

* ES高级特性

* 字符编码

#### 综合案例

* DOM事件

* 事件中心

* 元编程

* 函数

* 弱引用

* 数据类型

* 继承

* 内存泄露

  