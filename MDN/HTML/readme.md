## html

### 实体引用特殊字符
|原义字符|等价字符引用|
|:---:|:---:|
|<|&lt;|
|>|&gt;|
|"|&quot;|
|'|&apos;|
|&|&amp;|


### HTML 元信息

### <title> 
作为标题的同时，在添加书签时，<title> 的内容被作为建议的书签名。

### <meta>
属性：
- name 元数据类型 desctiption、author 等
- content 内容


### 图标
```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```


### 加载js和css
```html
<script src="script.js"></script>
<link rel="stylesheet" href="styles.css">
```
加载策略
- async表示脚本异步下载，在下载完成之后立即执行。defer代表在html加载完成之后下载，下载完成之后执行。
- type="module"实际上会自动应用类似defer的行为
### 设定语言
```html
<html lang="en">

</html>
```

### 强调与重要性
1. em em表示emphasis，强调，在显示上使用斜体。并且影响屏幕阅读器的语调。比如我很庆幸你没有<em>迟到</em>。会有反讽效果，因此em最好不要用来表示纯样式
2. <strong> 强调重要性，在显示上使用粗体。。浏览器默认样式为粗体，但你不应该纯粹为了获得粗体风格而使用这个标签。如果仅仅为了获得粗体样式而不增加语义辅助，你应该使用 <span> 元素和一些 CSS，或者是 <b> 元素

### 文档布局元素
1. <header>
2. <nav>
3. <main>
4. <article>
5. <section>
6. <aside>


### 列表
1. 有序列表ol
2. 无序列表ul
3. 描述列表dl dt要描述的标题 dd描述的内容

### 引用
1. 块引用 <blockquote cite="引用自xxx">
2. 行引用 <q cite="引用自xxx">
这些引用的cite并不会显示，也不会链接。
### 引文 
<cite>,并且手动链接
```html
<a href="/zh-CN/docs/Web/HTML/Element/blockquote"><cite>MDN blockquote page</cite></a>
```

### 缩略语
```html
<!-- title可以作为tooltip显示，有title的时候，会有 underline dotted样式 -->
<abbr title="Hyper Text Markup Language">HTML</abbr>
```
### 地址
address

### 上标和下标
sup sub
```html
x<sup>2</sup> 
```

### 显示代码
- code 标记计算机通用代码。
- pre 保留空白字符
- var 标记具体变量名。
- kdb 标记输入电脑的键盘（或其他类型）输入。
- samp 标记计算机程序的输出

### 日期和时间
```html
<time datetime="2016-01-20">2016 年 1 月 20 日</time>
```


### 音频和视频
浏览器兼容不同格式，浏览器会检查 <source> 元素，并且播放第一个与其自身 codec 相匹配的媒体。
 type 属性，这个属性是可选的，如果没有添加 type 属性，浏览器会尝试加载每一个文件，直到找到一个能正确播放的格式，但是这样会消耗掉大量的时间和资源。
```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <source src="movie.ogv" type="video/ogv">
    你的浏览器不支持 video 标签。
</video>
``` 