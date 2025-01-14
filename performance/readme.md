## 如何评估页面加载时间
### 导航阶段 navigation timing
1. navigationStart 开始导航
2. unloadEventStart/unloadEventEnd 前置页面的unload时间戳，无前置页面则为0
不同域时，无法获取前页面的卸载时间
3. redirectStart/redirectEnd 多重重定向的消费时间，start第一次重定向发生的时间，End是最后一次重定向发生的时间
4. fetchStart 准备好使用http请求来抓取文档（js、css等）的时间戳
5. domainLookupStart/domainLookupEnd 页面的域名查找时间戳，建立连接，如果是长连接则domainLookupStart等于fetchStart的时间
6. connectStart/connectEnd 发送http请求的时间戳，建立连接的时间
7. secureConnectionStart 如果是https连接，证书验证完成的时间戳，加密层连接建立的时间
8. requestStart 发送http请求的时间戳, 包含了本地缓存的读取
### 文档处理阶段
9. responseStart/responseEnd 接收http响应的时间戳
10. domLoading 开始渲染解析DOM树的时间戳 触发 readystatechange  document.readyState = 'loading' 整个 DOM 加载过程的起点
11. domInteractive HTML 文档被完全加载和解析完成，此时 DOM 树已经构建完成，但外部资源（如图片、样式表、子框架）还未完全加载，这个阶段表示可以开始对 DOM 进行操作。 触发readystatechange
12. domContentLoadedEventStart 表示 DOM 准备就绪的时刻，此时所有同步 JavaScript 已经执行完成 DOMContentLoaded 事件即将触发。这个时间点通常用于执行需要等待 DOM 就绪的 JavaScript 代码
13. domContentLoadedEventEnd DOMContentLoaded 事件处理完成的时刻，所有绑定在 DOMContentLoaded 事件上的处理函数都已经执行完成，此时可以安全地进行 DOM 操作和初始化
14. domComplete 整体DOM树的解析完成document.readyState = 'complete' 所有的子资源（图片、样式表等）都已经加载完成，页面上的 loading 状态已经结束
15. loadEventStart window.load 事件即将被触发，这表示页面所有资源（包括异步资源）都已经加载完成，此时页面的视觉呈现应该已经完成
16. loadEventEnd window.load 事件的处理函数执行完成，标志着页面加载的完全结束，所有的加载事件处理程序都已经完成


## 重要性能指标
```javascript
// DNS 解析时间
dnsTime = domainLookupEnd - domainLookupStart

// TCP 建连时间
tcpTime = connectEnd - connectStart

// SSL 安全连接时间
sslTime = connectEnd - secureConnectionStart

// TTFB（Time To First Byte）首字节时间
ttfb = responseStart - requestStart

// 请求响应时间
responseTime = responseEnd - responseStart

// DOM 解析时间
domParsingTime = domInteractive - responseEnd

// 资源加载时间
resourceLoadTime = loadEventStart - domContentLoadedEventEnd

// 完整页面加载时间
pageLoadTime = loadEventEnd - navigationStart
```

## Core Web vitals 性能指标
可衡量的、能够真实反映用户体验的性能指标，加载、交互、视觉稳定性

1. LCP   Largest Contentful Paint最大内容渲染 衡量装载性能，前2.5s内进行最大内容的渲染
最大内容包括：
    1. 图片
    2. svg
    3. video
    4. 通过URL加载的背景
    5. 包含文本节点或其他行内文本元素的块级元素

LCP值低下的原因：
    1. 服务加载慢 - 缓存 页面缓存、缓存页面资源、缓存请求
    2. 阻断渲染的js
    3. 资源加载 -减少资源加载渲染 css js做模块级联拆分、资源整合，图片格式优化webp，请求加速CDN
    4. 客户端渲染机器性能的影响

2. FID    First Input Delay 首次输入时延，衡量页面交互，页面首次输入的延迟应当小于100ms
原因：
    1. js的执行时间过长 
解决：
    1. 减少js的体量（减少js的下载时间）
    2. 延迟后置不必要的js操作
    3. 减少不必要的polyfill
    4. 分解耗时的任务（阻塞主线程超过50ms的任务）
    5. worker
3. CLS   Cumulative Layout Shift布局偏移，衡量页面的视觉稳定性，CLS应对保持在小于0.1，布局的移动在可能发生在可见元素的相邻两帧的位置
解决： 
    1. 不使用无尺寸元素，在元素加载后会导致元素瞬移，srcset sizes
    2. 减少内容的插入
    3. 动态字体的控制，字体加载后导致页面字体变化

## CWV 浏览器插件 core web vitals annotations

## 整体性能方案 性能监控+性能调优+性能恢复+性能防劣化
1. 监控SDK 通过timing API 采集数据
2. 数据平台进行数据清洗展示
3. 告警运营
4. 平台对比
5. 运营看板

## servicewoker 为什么不能操作DOM
1. 运行环境不同
Service Worker 运行在独立的线程中，与主 JavaScript 线程完全分离
它没有直接访问 window 对象的权限，因此也无法访问 DOM
2. 生命周期独立
Service Worker 可以在页面关闭后继续运行
它可以同时控制多个页面，而 DOM 是特定于单个页面的
3. 设计目的
Service Worker 主要用于处理网络请求、缓存和推送通知
它被设计为一个代理服务器，而不是 UI 操作工具

## webwork和serviceWorker 有什么区别
1. 生命周期
    webWorker： 随页面的打开和关闭而创建和销毁
    serviceWorker： 可以在页面关闭后继续运行，可以同时控制多个页面，有自己的安装和激活周期
2. 作用域
    webWorker： 仅限于单个页面
    serviceWorker： 可以同时控制多个页面，作用域基于路径
3. 功能定位
    webWorker： 用于处理耗时的计算任务，减轻主线程负担
    serviceWorker： 用于网络代理，实现离线缓存、消息推送
4. 通信方式
    webWorker： 通信方式为postMessage与主线程直接通信
    serviceWorker： 使用postMessage，还可以拦截网络请求（fetch事件）
5. 缓存能力
    webWorker： 不能直接访问缓存
    serviceWorker： 可以访问cache storage API，实现资源缓存
6. 使用场景
    webWorker： 用于大量计算、数据处理等CPU密集型任务
    serviceWorker： 用于PWA开发，离线应用、推送通知等场景