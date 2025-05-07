浏览器
## BOM
1. location 
location.href => 'https://www.baidu.com/aaa?class=brower#comment'
location.origin => 源 协议+域名+端口 'https://www.baidu.com:80' 
location.protocol => 协议 'https'
location.port => 端口 '80' 这里为空
location.host => 域名+端口(这里端口为空) 'www.baidu.com'
location.hostname => 域名 'www.baidu.com'
location.pathname => 路径(origin后面到?的部分) '/aaa'
location.search => 参数 '?class=brower'
location.hash => 锚点 '#comment'

location.assign('https://www.baidu.com/aaa?class=brower#comment') => 网页跳转
location.replace('https://www.baidu.com/aaa?class=brower#comment') => 网页替换,不会留下历史，做重定向
location.reload() => 网页刷新
location.toString() => 'https://www.baidu.com/aaa?class=brower#comment'  获取网址

2. history
history.state => 状态
history.pushState() => 添加历史记录
history.replaceState() => 替换历史记录
history.back()
history.forward()
history.go()

* 单页面中路由history和hash的对比
    形态不同：
    1. history形态更贴近普通路由
    2. history使用时，需要后台配合，能够匹配到的资源返回，不能匹配到的则指向一个标准的文件
    3. hash 则能够完全指定到一个文件，不需要后台配合
    4. 原理不同，hash锚点，history则是状态

3. navigator 浏览器导航信息
navigator.userAgent => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36' 
    包括了浏览器名称、版本、内核、渲染引擎、设备信息等
navigator.language => 'zh-CN'
navigator.onLine => true/false

navigator.clipboard => 剪切板 返回 Promise 对象，需要用户授权

    Clipboard.readText()方法用于复制剪贴板里面的文本数据。
    Clipboard.read()方法用于复制剪贴板里面的数据，可以是文本数据，也可以是二进制数据（比如图片）。该方法需要用户明确给予许可。该方法返回一个 Promise 对象。一旦该对象的状态变为 resolved，就可以获得一个数组，每个数组成员都是 ClipboardItem 对象的实例。
        ClipboardItem 对象表示一个单独的剪贴项，每个剪贴项都拥有ClipboardItem.types属性和ClipboardItem.getType()方法。

        ClipboardItem.types属性返回一个数组，里面的成员是该剪贴项可用的 MIME 类型，比如某个剪贴项可以用 HTML 格式粘贴，也可以用纯文本格式粘贴，那么它就有两个 MIME 类型（text/html和text/plain）。

        ClipboardItem.getType(type)方法用于读取剪贴项的数据，返回一个 Promise 对象。该方法接受剪贴项的 MIME 类型作为参数，返回该类型的数据，该参数是必需的，否则会报错。
    Clipboard.writeText()方法用于将文本内容写入剪贴板。
    Clipboard.write()方法用于将任意数据写入剪贴板，可以是文本数据，也可以是二进制数据。该方法接受一个 ClipboardItem 实例作为参数，表示写入剪贴板的数据。
        ClipboardItem()是浏览器原生提供的构造函数，用来生成ClipboardItem实例，它接受一个对象作为参数，该对象的键名是数据的 MIME 类型，键值就是数据本身
    
    用户向剪贴板放入数据时，将触发copy事件。cut事件则是在用户进行剪切操作时触发,用户使用剪贴板数据，进行粘贴操作时，会触发paste事件。
```javascript
    Event.clipboardData.setData(type, data)：修改剪贴板数据，需要指定数据类型。
    Event.clipboardData.getData(type)：获取剪贴板数据，需要指定数据类型。
    Event.clipboardData.clearData([type])：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。
    Event.clipboardData.items：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。
```
4. screen 屏幕
* 判断区域大小
    window.innerWidth
    window.innerHeight 窗口区域宽高
    document.body.clientWidth
    document.body.clientHeight body区域宽高
    document.documentElement.clientWidth
    document.documentElement.clientHeight html区域宽高

* 标准模型和怪异模型
    标准模型：width只包含content的宽度，不包含padding，border，margin，使用方式为box-sizing:content-box。
        对于标准盒模型来说，设置的width只有content，因此border、padding都会将总体的宽度撑大
    怪异模型：width包含content +padding + border 的宽度,使用方式为box-sizing:border-box。
        对于怪异盒模型来说，设置的width包含content、padding、border，因此border、padding都不会影响总体的宽度，只会压缩content的大小


* clientWidth和offsetWidth的区别
    clientWidth: 可视区域的宽度，需要去掉滚动条，包含padding，border的内边距，但不包括滚动条的宽度 = width|height + padding 不包含滚动条、边框、外边距
    offsetWidth: 其实就是box-sizing:border-box的width， 包括width+padding+border+滚动条的宽度
    scrollWidth： 表示元素内容的总宽度，包括由于溢出导致的视图中不可见的内容。scrollWidth = 包含元素的内容宽度（包括不可见的部分）+ padding
        当内容没有溢出时：scrollWidth = clientWidth；当内容溢出时：scrollWidth = 实际内容宽度 + padding
        通过比较 scrollWidth 和 clientWidth 来判断内容是否溢出

    offsetLeft 和 left 的区别
        offsetLeft: 元素相对于offsetparent的偏移量， offsetParent是最近的已定位祖先元素（position 不为 static）; 
            是子元素border外延到父元素border内延的距离，返回数字，只读
        left: 相对于元素的正常文档流位置进行定位，只在元素设置了 position 属性（relative、absolute、fixed）时才生效
                返回值也有所不同，返回string，可设置

    offsetTop / offsetLeft 与 scrollTop / scrollLeft 的区别
        offsetTop / offsetLeft: 返回元素相对于其 offsetParent（最近的已定位祖先元素）的上边距离
            是一个只读属性
            返回一个数字（像素值）
            测量的是元素的边框外缘到其 offsetParent 的边框内缘的距离
            值不会随着元素的滚动而改变
        scrollTop / scrollLeft: 距表示元素已滚动的垂直距离（被卷去的上部分高度）
            是一个可读写属性
            可以通过设置这个值来改变元素的滚动位置
            当元素不可滚动时值为 0

    el.getBoundingClientRect().left / top / right / bottom
        left: 元素左边框相对于视口左边的距离
        top: 元素上边框相对于视口顶部的距离
        right: 元素右边框相对于视口左边的距离
        bottom: 元素下边框相对于视口顶部的距离
        width: 元素的宽度（包含 padding 和 border）
        height: 元素的高度（包含 padding 和 border）
        x: 等同于 left
        y: 等同于 top
        

## DOM
1. 冒泡和捕获  先捕获再冒泡
    el.addEventListener('click', function () {}, true) // 捕获
    el.addEventListener('click', function () {}, false) // 默认 冒泡
    阻止事件冒泡
        event.stopPropagation()
        event.stopImmediatePropagation()
            stopPropagation()：只阻止事件冒泡，不影响同一元素上的其他监听器
            stopImmediatePropagation()：阻止事件冒泡，并且阻止同一元素上的其他监听器
    阻止默认事件
        event.preventDefault()


    性能：事件代理
        事件代理：将事件绑定到父元素上，然后根据事件的目标元素来决定事件处理函数的执行
        优势：事件代理可以大大提高性能，因为事件处理函数只需要绑定到一个元素上，而不需要绑定到每个子元素上
    ```javascript
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('child')) {
                // 处理 child 元素的点击事件
            }
        }, false);  
    ```

### 网络 协议
XMLHttpRequest
```javascript
    const xhr = new XMLHttpRequest()
    xhr.open()
    xhr.sen()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
```

1. Restfull GET|POST|PUT|DELETE
2. 跨域：反向代理、jsonp、iframe
3. 状态码：协商缓存、协商缓存
ECMAScript
