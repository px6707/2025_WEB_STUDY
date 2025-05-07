### b
强调文本，加粗，现在很少使用。如果表示重要则使用strong，表示强调使用em，表示关联性使用mark

###  base
指定一个文档中包含的所有相对URL的根URL。很少使用

一个文档的基本 URL，可以通过使用 document.baseURI 的 JS 脚本查询。如果文档不包含 <base> 元素，baseURI 默认为 document.location.href。

- target
    - _blank 新窗口
    - _self 当前窗口
    - _parent 父窗口
    - _top 顶层窗口
- href 基础URL


影响锚点使用，会重新加载页面。不设置base的时候浏览器只是滚动到对应位置。所以现在很少使用。

### bdi
双向隔离元素，告诉浏览器的双向算法将其包含的文本与周围的文本隔离，当网站动态插入一些文本且不知道所插入文本的方向性时，此功能特别有用。
主要用于处理双向文本的情况，将包含的文本与周围内容隔离，浏览器独立处理其文本方向，防止双向文本混排显示错乱。
最常见的使用场景：
 - 显示用户生成的内容（如用户名、评论）
 - 这些内容可能包含从右到左书写的语言（如阿拉伯语、希伯来语）
 - 网站本身是从左到右书写的语言（如英语、中文）

### bdo
 覆盖当前文本的方向，使文本以不同的方向渲染出来。
 - dir
    - ltr 左到右
    - rtl 右到左
    - auto 自动
通过dir属性明确指定方向，bdi由浏览器自动判断


### big
弃用 大一级字体

### blockquote
块级引用元素。代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进
- cite 引用来源的URL

margin可以修改缩进距离
行内引用 <q>

### body
HTML文档内容，只能由一个body
连接到window中的事件
- onafterprint 打印完成后触发
- onbeforeprint 打印前触发
- onbeforeunload 当文档即将卸载时调用的函数。
- onblur 当文档失去焦点时调用的函数。
- onerror 当文档无法正常加载时调用的函数。
- onfocus 
- onhashchange #hash变化
- onlanguagechange 首选语言发生变化，在浏览器设置中可以设置首选语言，但网站可能不会自动相应，需要收到刷新
- onload 加载完成后调用
- onmessage 文档收到消息后 window.postMessage 触发
- onmessageerror 文档收到无法反序列化的消息时调用的函数。
- onoffline 网络通信失败
- ononline 网络通信恢复
- onpageswap 浏览文档时，上一个文档即将卸载时调用的函数
- onpagehide 当用户点击浏览器的后退按钮时，在显示前一个页面之前
- onpagereveal  会在文档第一次渲染时触发，无论是从网络加载新文档，还是激活文档
- onpageshow 当一条会话历史记录被执行的时候将会触发页面显示 (pageshow) 事件。(这包括了后退/前进按钮操作，同时也会在 onload 事件触发后初始化页面时触发)
- onpopstate 每当激活同一文档中不同的历史记录条目时，popstate 事件就会在对应的 window 对象上触发。
- onresize 文档大小调整
- onrejectionhandled 当 Promise 被 rejected 且有 rejection 处理器时会在全局触发 rejectionhandled 事件
- onstorage 存储区域（sessionStorage 或 localStorage）发生变化时调用，但同页面不会触发，只有同源的其他页签才会触发。
- onunhandledrejection 当 Promise 被 rejected 且没有 rejection 处理器处理时会触发 unhandledrejection 事件
- onunload 文档即将被卸载时调用
### br
生成一个换行


### button
按钮元素
- autofocus 
- disabled
- form  button 元素关联的 form 元素，此属性值必须为同一文档中的一个<form>元素的id属性。
- formaction 表示程序处理 button 提交信息的 URI。如果指定了，将重写 button 表单拥有者的action属性。
- fomenctype 如果 button 是 submit 类型，此属性值指定提交表单到服务器的内容类型，覆盖 <form> 元素的 enctype 属性
    - application/x-www-form-urlencoded: 未指定时的默认值。
    - multipart/form-data: 主要用于文件上传
    - text/plain 纯文本提交
- formmethod 如果 button 是 submit 类型，此属性指定浏览器提交表单使用的 HTTP 方法
    - post
    - get
- formnovalidate 如果 button 是 submit 类型，此布尔属性指定当表单被提交时不需要验证
- formtarget
    - _self
    - _blank 在新窗口显示结果
    - _parent
    - _top
- name 按钮在form中的名称key
- type
    - submit 提交按钮
    - reset 重置按钮
    - button
- value 按钮在form中的value，IE67会把内容当value提交