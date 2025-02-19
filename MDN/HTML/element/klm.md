### kbd
键盘输入元素, 默认字体有所不同
```html
<p>Save the document by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
```


### label
标签，表示用户界面某个元素的说明，一般是label和input关联
- for 管理的元素的id，点击label可以foucus到该元素。也可以把input作为label的子节点
    ```html
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <label>
        Do you like peas?
        <input type="checkbox" name="peas" />
    </label>
    ```
- form 


### legend
表示父元素fieldset内容的标题


### li
有序列表ol和无序列表ul中的每一项
- value 数字，表示有序列表的编号


### link
当前文档与某个外部资源的关系。最常用于链接样式表、网站图标
link加载script和script标签的区别在于，link加载脚本不会执行
```html
<link rel="stylesheet" href="style.css">
<link rel="icon" href="favicon.ico">
<!-- 预获取（可能需要的资源） -->
<link rel="prefetch" href="future-script.js">
```

- rel 
- media 媒体查询，满足条件时加载
- size 图标大小 144x144 像素宽带x像素高度
- type 链接资源的MIME类型，为浏览器选择最合适的图标提供了有用的提示。
    ```html
        <!-- 配备高分辨率 Retina 显示屏的 iPad Pro: -->
        <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/apple-touch-icon-167x167.png" />
        <!-- 3x 分辨率的 iPhone： -->
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon-180x180.png" />
        <!-- 非 Retina iPad、iPad mini，等等： -->
        <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png" />
        <!-- 2x 分辨率的 iPhone 和其他设备： -->
        <link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
        <!-- 基本的 favicon -->
        <link rel="icon" href="/favicon.ico" />
        <!-- 媒体查询 -->
        <link href="print.css" rel="stylesheet" media="print" />
    ```
- as 当rel="preload"时必须填写，当设置rel="modulepreload" 为可选属性，否则不应使用。指定正在加载的内容类型
- crossorigin 域名跨域加载
- fetchpriority 优先级,high low auto ,预加载资源的优先级
- href
- hreflang 资源的语言
- imagesizes 适用于rel="pre" as="image" 表示img元素的大小
- integrity 资源base64编码的哈希值。用来验证资源是否被传输没有遭到篡改。只有指定rel="stylesheet" 、preload、modulepreload时才有用
- referrerpolicy 使用的referrer
- title 用于stylesheet时，定义了一个默认样式或备用样式 , 火狐ie6 支持查看 > 页面样式菜单中选择要使用的样式表
    ```html
    <link href="default.css" rel="stylesheet" title="默认样式" />
    <link href="fancy.css" rel="alternate stylesheet" title="精美样式" />
    <link href="basic.css" rel="alternate stylesheet" title="基本样式" />

    ```

### main
应用主体部


### map
与area元素配合定义可点击的链接区域
```html
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    target="_blank"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
</map>
<img usemap="#infographic" src="/media/examples/mdn-info2.png" alt="MDN infographic" />
```
- name 映射的名称，在img中，可以使用usemap使用这个map


### mark
标记文本元素为突出显示文本，默认黄色背景
```css
mark {
    background-color: mark;
    color: marktext;
}
```
语义化意义：
1. 表示引用或参考内容中的相关性
2. 标识搜索匹配的文本
3. 突出显示文档中的重要部分
4. 不应该用于装饰性的高亮（应使用CSS）


### marquee
弃用 跑马灯元素


### menu
菜单元素，和ul都表示无序列表。它们的关键区别在于，<ul> 主要用于显示内容，而 <menu> 则用于交互式内容。


### meta
元数据，必须放在head内部
- chartset 文档的字符编码
- content 值
- http-equiv 模拟HTTP响应头
    - content-security-policy 允许定义内容策略，有助于防止跨站点脚本攻击
    - content-type 声明MIME和文档字符编码，
    - default-style 设置默认 CSS 样式表组的名称。
    - x-ua-compatible content 属性必须具有值 "IE=edge"。E浏览器兼容性设置
    - refresh 面重新加载的秒数—仅当 content 属性包含非负整数时。 页面重定向到指定链接的秒数——仅当 content 属性包含非负整数后跟字符串“;url=”和有效的 URL 时。
    ```html
        <!-- 内容类型， 不设置页面加载速度变慢（因为需要检测编码） -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!-- 刷新/重定向 -->
        <meta http-equiv="refresh" content="3;url=https://example.com">

        <!-- 浏览器兼容性 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ```
- name name和content一起使用，给文档提供元数据name为元数据名称，content为值
```html
<meta name="description" content="网页描述内容">
<!-- 关键词 -->
<meta name="keywords" content="HTML, CSS, JavaScript">
<!-- 作者 -->
<meta name="author" content="作者名称">
<!-- 视口设置 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO相关 -->
<!-- Open Graph 协议 - 社交媒体分享 -->
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="图片URL">
<meta property="og:url" content="页面URL">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面标题">

<!-- mobile-agent 针对中国搜索引擎百度、360等，在手机搜索时显示的url -->
<meta http-equiv="mobile-agent" content="format=html5;url=http://m.example.com">

```


### meter
在已知范围内的标量值或分数值。progress表示进度（下载进度、上传进度）meter表示度量值（温度、内存使用、考试成绩）
```html
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>

```
- value 当前数值
- min 下限
- max 上限
- low 低档部分的数值上限
- high 高档部分的数值上限
- optimum 最佳数值
- form form所有者

默认颜色由浏览器决定，再有optimum的情况下，超过high为绿色，低于low为红色，中间为黄色。
可以自定义颜色
```css
/* 基本样式修改 */
meter {
    width: 200px;
    height: 20px;
}

/* 修改meter的背景色 */
meter::-webkit-meter-bar {
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 3px;
}

/* 优化值范围的颜色（webkit浏览器） */
meter::-webkit-meter-optimum-value {
    background: #86c557; /* 最优范围颜色 */
}

meter::-webkit-meter-suboptimum-value {
    background: #ffd700; /* 次优范围颜色 */
}

meter::-webkit-meter-even-less-good-value {
    background: #ff4500; /* 最差范围颜色 */
}

/* Firefox的样式 */
meter::-moz-meter-bar {
    background: #86c557;
}

meter:-moz-meter-optimum::-moz-meter-bar {
    background: #86c557;
}

meter:-moz-meter-sub-optimum::-moz-meter-bar {
    background: #ffd700;
}

meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: #ff4500;
}
```