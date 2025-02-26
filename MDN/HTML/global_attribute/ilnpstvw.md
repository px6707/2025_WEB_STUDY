### id
唯一标识

### inert
bool， 该元素及其所有的后端都是惰性的。
1. 防止用户触发click时间
2. 阻止获取焦点
3. 屏幕阅读器跳过该元素
4. 键盘事件无法触发


### inputmode
用于指定用户输入内容时应该显示的虚拟键盘类型。主要在移动设备上有明显效果。
- none 无虚拟键盘，自定义键盘
- text 默认值普通文本输入
- decimal 带小数点的数字键盘
- numeric 纯数字键盘
- tel 电话键盘
- search 搜索键盘
- email 带有@符号的键盘
- url 带有/ .com 的键盘

### is
safari 不支持
指定当前元素为某一个自定义元素


### itemscope
微数据属性，这些item属性用于为网页添加结构化数据，帮助网页更好的理解页面内容，有利于seo，但实际上使用比较少

表示一个包含微数据的项目
创建一个新的项目作用域
### itemid
全局唯一标识，只能为同时拥有itemscope和itemtype的元素使用。hatwg.org 的定义规定了 itemid 必须是 URL。但是，下面的示例正确展示了 URN 也可以使用。

### itemtype
指定项目的类型（使用 URL），定义数据的结构和含义.必须是schema中指定的url

### itemprops
定义项目的属性，指定属性的名称，可以嵌套使用

### itemref
itemref 提供了元素 id（并不是 itemid）的列表，并具有文档其他地方的额外属性。

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### lang
语言

### nonce
安全相关的属性，主要用于内容安全策略（CSP）中。
    ```html
    <!-- 在script标签中使用nonce -->
    <script nonce="rAnd0m123">
    // 脚本内容
    </script>
    <!-- 服务器端设置CSP header -->
    Content-Security-Policy: script-src 'nonce-rAnd0m123'
    ```
    nonce 是随机生成的，由服务器产生，添加到脚本上，浏览器会检查nonce会response头，是否匹配

### part
以元素中 part 属性名称组成的列表，该列表以空格分隔。通过 Part 的名称，可以使用 CSS 伪元素“::part”来选择 shadow 树中指定元素并设置其样式。

### popover
指定一个元素为弹出框元素
在按钮上使用 popovertarget 属性，指定弹出框的ID
```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>

```
- auto 默认，点击弹窗之外的区域可以关闭
- manual 必须明确隐藏


### slot
shadow DOm中的槽，使用这个slot属性，指定将元素放在哪一个插槽中
```html
<!-- 自定义组件1 -->
<template id="card-component-template">
    <style>
      :host {
        display: block;
      }
    </style>
    <div class="base" part="base">
      <div part="header"><slot name="header_slot"></slot></div>
      <div part="body"><slot name="body_slot"></slot></div>
      <div part="footer"><slot name="footer_slot"></slot></div>
    </div>
  </template>


<card-component>
  <p slot="header_slot">This is the header</p>
  <p slot="body_slot">This is the body</p>
  <p slot="footer_slot">This is the footer</p>
</card-component>
```

### spellcheck
是否可以检查元素的拼写错误，但需要浏览器设置为英文、基本没啥用

- true
- false
### style
css 样式

### tabindex
元素是否可以聚焦，以及聚焦顺序。注意的是普通div元素，聚焦过一次后就不能再次聚焦了，因为它本身不是交互元素。d但可以使用role属性来让div变成可聚焦的元素

- 负值 表示元素是可聚焦的，但是不能通过键盘导航来访问到该元素，用 JS 做页面小组件内部键盘导航的时候非常有用。
- 正值 ，表示元素是可聚焦的，并且可以通过键盘导航来访问到该元素；它的相对顺序按照tabindex 的数值递增而滞后获焦。如果多个元素拥有相同的 tabindex，它们的相对顺序按照他们在当前 DOM 中的先后顺序决定。

```html
<!-- 使用原生可聚焦元素 -->
<button>这个可以重复聚焦</button>
<input type="text" value="这个也可以重复聚焦">

<!-- 或者给 div 添加交互角色 -->
<div tabindex="0" role="button">
    这个也可以重复聚焦
</div>
```


### title
元素的标题

### translate
枚举属性，对应元素的可翻译属性值及其子节点内容是否跟随系统语言做出对应的翻译变化。
实际的翻译效果取决于翻译工具和浏览器翻译能力。
- yes 网页本地化时，对应内容要被翻译
- no 无需翻译
- '' 同yes，要被翻译

### virtualkeyboardpolicy
火狐、safari不支持
指定元素内容可编辑时，控制平板、手机或其他可能没有硬件键盘的设备的屏幕虚拟键盘的行为
- auto或空字符串  默认，元素聚焦或被点击时显示虚拟键盘
- manual 元素的聚焦和点击与虚拟键盘的状态分离

### writingsuggestions
浏览器提供的编写建议是否应该在该元素中出现。
- true 或者 ''  建议由浏览器提供
- false