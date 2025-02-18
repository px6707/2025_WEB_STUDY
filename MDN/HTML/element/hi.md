### h1
标题h1-h6

### head
html的头部
包含元数据、脚本、样式表、标题、网站图表等
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>文档标题</title>
  </head>
</html>
```
可用于head内部的元素 title、base、link、style、script、meta、noscript、template

### header
标题元素，头部


### hgroup
一个标题与任意次要内容组合在一起，通常用于将主标题和副标题组合在一起。
```html
<hgroup>
    <h1>主标题</h1>
    <h2>副标题或补充说明</h2>
</hgroup>
```
### hr
分割线，表示段落级元素之间的主题转换。
现在如果画水平线，使用css实现


### html
根元素
- xmlns xml命名空间
- lang 语言

### i
斜体

### iframe
内嵌框架元素，表示嵌套的浏览上下文，将另一个 HTML 页面嵌入到当前页面中。
- allow 指定权限策略 
    ```html
    <iframe allow="camera; microphone; fullscreen"></iframe>
    ```
- allowfullscreen 历史遗留属性，现在写作allow="fullscreen" 可以通过调用iframe的requesFullscreen()激活全屏
- browsingtopic 
- height 指定iframe的高度
- width 宽度
- loading 
    - eager 页面加载立即加载iframe（默认值）
    - lazy 推迟加载iframe，当达到可见区域时加载。
- name 
- referrerpolicy 获取iframe资源时发送的referrer， 
    - no-referrer 不发送referrer头
    - no-referrer-when-downgrade 从 HTTPS 页面导航到 HTTP 页面时不发送 Referrer
    - origin 只发送源信息（协议、域名和端口）
    - origin-when-cross-origin 同一请求发送完整URL，跨源请求只发送源信息
    - same-origin 对于同源请求，发送 referrer；跨源请求不会包含 referrer 信息。
    - strict-origin HTTPS → HTTPS：发送源信息； HTTPS → HTTP：不发送 Referrer； HTTP → 任何协议：发送源信息
    - strict-origin-when-cross-origin 默认值，同源请求：发送完整 URL； 跨源 HTTPS → HTTPS：只发送源信息；跨源 HTTPS → HTTP：不发送 Referrer
    - unsafe-url 始终发送完整的 URL（不安全）
- sandbox  对框架实施额外的限制,控制应用于嵌入在 <iframe> 中的内容的限制。该属性的值可以为空以应用所有限制，也可以为空格分隔的标记以解除特定的限制：
    - allow-downloads 允许通过带 download 属性的a标签或area元素下载
    - allow-forms  允许页面提交表单
    - allow-modals 允许打开模态框 window.alert window.confirm window.prompt
    - allow-orientation-lock 允许锁定屏幕方向
    - allow-pointer-lock  允许页面使用指针锁定API
    - allow-popups 允许弹窗。例如window.open target="_blank"
    - allow-popups-to-escape-sandbox 允许沙箱化的文档打开新浏览器上下文
    - allow-presentation  许主文档控制是否允许 iframe 开启演示会话。
    - allow-same-origin 如果没有使用该关键字，资源将被视为来自一个特殊的源（始终使同源策略失败）。（可以阻止对数据存储/cookie 和一些 JavaScript API 的潜在访问）。
    - allow-scripts 允许页面运行脚本（但不能创建弹窗）。如果没有使用该关键字，则不允许该操作。
    - allow-storage-access-by-user-activation 允许 <iframe> 中的文档通过储存访问 API 请求访问非分区 cookie。
    - allow-top-navigation 允许资源导航顶级（即名称为 _top 的）浏览上下文。
    - allow-top-navigation-by-user-activation 允许资源导航顶级浏览上下文（但只能由用户手势启动）。
    - allow-top-navigation-to-custom-protocols 允许导航到浏览器内置的或由网站注册的非 http 协议页面。此特性也可以由 allow-popups 或 allow-top-navigation 关键词激活。
- src 嵌入页面的url地址
- srcdoc 要嵌入的内联 HTML，会覆盖 src 属性。


### referer是什么
Referrer（引用来源）信息是指当浏览器从一个页面导航到另一个页面时，会告诉目标页面"用户是从哪里来的"。这个信息包含在 HTTP 请求头中的 Referer 字

当用户从：https://example.com/page1.html
点击链接跳转到：https://other-site.com/page2.html

此时浏览器可能发送的 Referrer 信息：

- 完整URL：https://example.com/page1.html
- 只有源：https://example.com
- 或者不发送任何 Referrer 信息
Referrer 信息包含的内容：
- 协议（http/https）
- 域名（example.com）
- 端口号（如果有）
- 路径（/page1.html）
- 查询参数（如果有）

发送referrer会暴露用户的浏览历史， 目标站点可以知道用户从哪里来， 可能泄露敏感URL参数

### img
图片元素
- src
- alt 
- crossorigin 浏览器默认允许跨域加载图片资源，但在canvas中使用的时候可能会有跨域问题。选项依赖于服务器设置，如果服务器设置了任何人都可以使用，则anoymous也能访问到图片，如果服务器设置了要求验证，则必须发送安全信息，且让服务器去验证
    - anonymous 不携带安全认证，即，不携带 cookie、X.509 证书 或 Authorization 请求标头如果资源服务器没有设置跨域则被限制使用
    - use-credentials 携带安全认证，即，携带 cookie、X.509 证书 或 Authorization 请求标头
- decoding 为浏览器提供图像解码方式
    - async 异步解码图像，以减少其他内容的渲染延迟。
    - sync 同步解码
    - auto 不指定解码方式，由浏览器决定哪一种对用户来说是最合适的。
- ismap 
- loading 
    - eager 立即加载
    - lazy 懒加载
- referrerpolicy 获取资源时使用的来源地址，同上
- sizes  资源大小
- srcset 逗号分割的图像大小列表
- usemap 与元素相关联的图像映射（image map）的部分 URL（以 # 开始的部分）

ismap 属性是一个布尔属性，用于指示图片是否为服务器端图像映射。它只能用于嵌套在 <a> 标签内的图片，并且 <a> 标签必须有 href 属性。
工作原理：

1. 当用户点击图片时，会将点击坐标发送到服务器
2. 坐标以 ?x,y 的形式附加到 URL 末尾
3. 服务器根据这些坐标决定如何响应
```html
<a href="map-processor.php">
    <img src="map.png" ismap alt="点击地图">
</a>
```
当用户点击图片时：

- 如果用户点击坐标是 (123, 456)
- 浏览器会请求：map-processor.php?123,456
现在更常用map元素和usemap属性来控制图像不同区域的点击事件

```html
<!-- 使用 usemap 替代 ismap -->
<img src="world-map.png" 
     usemap="#worldmap" 
     alt="世界地图">

<map name="worldmap">
    <area shape="rect" 
          coords="0,0,400,600" 
          href="/west" 
          alt="西半球">
    <area shape="rect" 
          coords="400,0,800,600" 
          href="/east" 
          alt="东半球">
</map>
```

响应式图片的使用
```html
<img 
  src="small.jpg"
  srcset="small.jpg 300w,
          medium.jpg 600w,
          large.jpg 900w"
  sizes="(max-width: 500px) 300px,
         (max-width: 900px) 600px,
         900px"
  alt="响应式图片"
>
```

### input


### ins
已经被插入文档中的文本。 相反的是 del