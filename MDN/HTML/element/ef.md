### em
强调元素，通常为斜体。cite也是斜体，但语义表示引用。i也是斜体，但没有语义

### embed
用于嵌入外部内容的通用容器，但在现代网页开发中，通常有更好的替代方案。
```html
<!-- 嵌入PDF -->
<embed 
    src="document.pdf" 
    type="application/pdf"
    width="600" 
    height="400">
```
现代替代方案：
- PDF：使用 <object> 或 <iframe>
- 视频：使用 <video>
- 音频：使用 <audio>
- 图片：使用 <img>
- SVG：使用 <svg> 或 <img>

### fencedframe
safari和firefox不支持
更安全的方式嵌入第三方内容，提供比iframe更强的隔离性和安全性
1. 强隔离性：
    - 完全隔离的浏览上下文
    - 阻止与父页面的直接通信
    - 限制对浏览器API的访问
2. 与iframe的区别
    - 更严格的安全隔离
    - 无法使用postmessge
    - 不支持同源策略例外（iframe可以通过一些技术放宽同源策略，1, 设置document.domain 2， 使用postMessage 3， 使用allow-same-origin ）
    - 限制更多的浏览器AIP访问

### fieldset
对表单中的控制元素进行分组， 也包括label元素。默认情况下会有一个2px groove的边框和内边距。
如果内部有legend元素，会放在fieldset的边界上。
属性：
1. disabled fieldset的子控件会继承这个属性，也就是子元素都设置为不可用
2. form 一个form表单的id，fieldset中的控件将成为这个form的一部分，提交表单时，这些控件的数据会一起提交，以达成更复杂的布局
3. name 元素分组名称

> 此元素会创建BFC
```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

### figcaption
图像标题元素
```html
<figure>
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>

```
### figure
代表一段独立内容，可能包含 <figcaption> 元素定义的说明元素。该插图、标题和其中的内容通常作为一个独立的引用单元。
> 通常，figure的内容为图像、插图、图表、代码片段等，提供更好的语义化结构，一个 <figure> 只能有一个 <figcaption>内容应该是相对独立的，即使移动位置也不影响文档的主要内容流

### font
已弃用，用来制定字体大小、颜色

### footer
页脚

### form
表单
- autocomplete  input 元素是否能够拥有一个默认值,默认值由浏览器自动补全
- rel
    - external 表单提交到外部网站
    - nofollow 浏览器不要跟踪这个表单提交链接
    - noopener 防止新页面通过window.opener API访问原页面
    - noreferrer 不发送referrer信息，提供额外的隐私保护
- name

- action 提交表单的url
- encype 当method为post时，提交给服务器的类型
    - application/x-www-form-urlencoded：未指定属性时的默认值。
    - multipart/form-data：当表单包含 type=file 的 <input> 元素时使用此值。
    - text/plain
- method post、get
- novalidate 提交表单不需要验证
- target 提交表单后，显示相应信息的位置
    - _blank
    - _self
    - _parent
    - _top
### frame
弃用，另一个html的展示区域，性能有问题，可以包含在frameset中，现在可以使用iframe
### frameset
弃用，包含frame的html元素，定义尺寸
```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```