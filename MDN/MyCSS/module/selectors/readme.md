## 选择器

### 通用选择器
```css
* {
    display: block;
}
```
### 元素选择器
```css
element {
    
}
```
### 类选择器
```css
.class {
    
}
```
### ID选择器
```css
#id {
    
}
```
### 属性选择器
```css
/* 存在 title 属性的 <a> 元素 */
a[title] {
  color: purple;
}

/* 存在 href 属性并且属性值匹配"https://example.org"的 <a> 元素 */
a[href="https://example.org"]
{
  color: green;
}

/* 存在 href 属性并且属性值包含"example"的 <a> 元素 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在 href 属性并且属性值结尾是".org"的 <a> 元素 */
a[href$=".org"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的<a>元素 这个单词必须前后有空格的独立单词*/
a[class~="logo"] {
  padding: 2px;
}
/* 以logo开头 */
a[class^="logo"] {
  padding: 2px;
}
/* 属性值以logo或logo-开头，典型场景式匹配zh-CN、zh-TW */
a[class|="logo"] {
  padding: 2px;
}
[attr operator value i] 标识符 i或者I,表示忽略大小写
a[class|="logo" i] {
  padding: 2px;
}
```

## 分组选择器
### 选择器列表
,
选择器列表的一个缺点是选择器列表中的单个不受支持的选择器会使整个规则无效化。
解决无效的选择器列表问题的一种方法是使用 :is() 或 :where() 伪类，它们接受一个可容错选择器列表。

## 组合选择器

### 后端选择器
空格

### 直接子代选择器
>

### 一般兄弟选择器
~
### 紧邻选择器
+
### 列组合器
||  实验属性 只有firefox支持,用于选择表格中特定列的单元格
```css
col.selected||td {
  /* 选择带有selected类的col元素所在列的所有td单元格 */
  background: gray;
  color: white;
  font-weight: bold;
}
```
### 伪类
**伪类**是添加到选择器的关键字，用于指定所选元素的特殊状态。
:
- :active 被用户激活的元素。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。
- :any-link 作为超链接源锚点的元素，无论是否已被访问。它匹配每个具有 href 属性的 <a> 或 <area> 元素
- :auto-fill 在浏览器自动填充表单中的 <input> 元素的值时匹配该 input 元素。如果用户编辑了该字段，则该类将不再匹配。
```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>

```
```css 
input {
  border: 3px solid grey;
  border-radius: 3px;
}

input:-webkit-autofill {
  border: 3px solid blue;
}
input:autofill {
  border: 3px solid blue;
}

```
- blank 实验 选择用户输入为空的输入框
- :checked 任何处于选中状态的radio、checkbox、或 ("select") 元素中的option HTML 元素 ("option")。
- :current() 无浏览器支持 一个时间维度的伪类，表示当前显示的元素或元素的祖先。
- :default 一组相关元素中的默认表单元素。可以在 <button>, <input type="checkbox">, <input type="radio">, 以及 <option> 上使用。就是表单上有默认值的元素。
- :defined 任何已定义的元素,包括任何浏览器内置的标准元素以及已成功定义的自定义元素
```css
simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}

```
- :dir() 匹配特定文字书写方向的元素,:dir() 并不等于使用 [dir=…] 属性选择器。dir 的值且不会匹配到未定义此属性的元素.
- disabled 任何被禁用的元素
- :empty 选择不包含任何子元素的元素.子元素可以是元素节点或文本（包括空格）。但是注释、处理指令和 CSS content 不会影响元素是否被认定为空。
- :enabled 任何已启用的元素
- first 与 @page at 规则一起使用。表示打印文档的第一页。
```css
/* 打印时选择第一页 */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

```
- first-child 一组兄弟元素中的第一个元素。
- first-of-type 一组兄弟元素中其类型的第一个元素。
- :fullscreen 匹配当前处于全屏模式的所有元素。
- :future 火狐不支持 匹配完全出现在匹配 :current 的元素之后的任何元素。
- :focus 获得焦点的元素
- :focus-visible 当元素匹配:focus伪类并且客户端 (UA) 的启发式引擎决定焦点应当可见 时，:focus-visible 伪类将生效。
- :focus-within 当元素或其任意后代元素被聚焦时，将匹配该元素。换言之，它表示 :focus 伪类匹配到该元素自身或它的后代时，该伪类生效。（这也包括 shadow 树中的后代元素。）

- :has() 选择包含特定子元素的父元素。:has(selector) /* 选择包含指定选择器的元素 */
- :host 影子宿主
- :host() 影子宿主
- :host-context() 影子宿主
- :hover 任何鼠标悬停的元素
- :indeterminate 任意的状态不确定的表单元素,例如那些将 HTML indeterminate 属性设置为 true 的复选框.表单中的radio和checkbox未选择且indeterminate=true的元素
- :in-range  inpute元素，值处于属性 min 和 max 限定的范围之内
- :invalid 选择任何未通过验证的 <form>、<fieldset>、<input> 或其他表单元素。
- :is() 选择该列表中任意一个选择器可以选择的元素
- :lang() 基于元素语言来匹配页面元素。
- :last-child 一组兄弟元素中的最后一个元素。
- :last-of-type 一组兄弟元素中的最后一个具有特定类型的元素。
- :left @page 配套使用，对打印文档的左侧页设置 CSS 样式。
- :link 尚未被访问的元素
- :local-link 无浏览器支出，链接到本地的链接
- :modal 选择处于模态状态的元素,模态元素会阻止与页面其他部分的交互，直到模态对话框被关闭。
- :not() 匹配不符合一组选择器的元素,防止特定的元素被选中，它也被称为反选伪类
- :nth-child() 根据父元素内的所有兄弟元素的位置来选择子元素。
- :nth-last-child 从兄弟节点中从后往前匹配处于某些位置的元素
- :nth-of-type 一组兄弟元素中的特定类型的元素。
- :nth-last-of-type 从兄弟节点中从后往前匹配处于某些位置的元素的类型。
- :only-child 没有任何兄弟元素的元素。
- :only-of-type 没有任意一个元素，这个元素没有其他相同类型的兄弟元素。
- optional 任何未设置 required 属性的 <input>、<select> 或 <textarea> 元素。
- :out-of-range 一个 <input> 元素，其当前值处于属性 min 和 max 限定的范围外。
- :past 火狐不支持 匹配任何完全出现在匹配 :current 的元素之前的元素。
- :picture-in-picture 火狐不支持 当前处于画中画模式的元素。
- :placeholder-shown 当前显示占位符文本的任何 <input> 或 <textarea> 元素
- :paused 只有safari支持 匹配处于“暂停”状态（即非“播放”状态）的可播放的元素，如 <audio> 或 <video>。
- :playing 只有safari支持 匹配处于“播放”状态的可播放的元素，如 <audio> 或 <video>。
- :read-only 表示元素不可被用户编辑的状态.
>备注： 这个选择器不只是选择具有 readonly 属性的<input> 元素，它也会选择所有的不能被用户编辑的元素。连div都能匹配
- :read-write 一个元素（例如可输入文本的 input 元素）可以被用户编辑。会选择所有可以被用户编辑的元素，例如设置了 contenteditable 属性的 <p> 元素。
- :required 任何设置了 required 属性的 <input>、<select> 或 <textarea> 元素。
- :right @page 一起配套使用，表示打印文档的所有右页。
- :root 匹配文档树的根元素。对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。
- :scope 作为选择器要匹配的作为参考点或作用域的元素。当在样式表的根级别使用时，:scope 等效于 :root;当在 @scope 块中使用时，:scope 匹配块所定义的作用域的根
- :state 指定自定义状态的自定义元素
- :target 一个唯一的元素（目标元素），其 id 与当前 URL 片段匹配。
- :target-within 无浏览器支持
- :user-invalid 选择任何未通过验证的 <form>、<fieldset>、<input> 或其他表单元素。任何经过验证的表单元素，在用户与它交互之后，根据它们的验证约束，它们的值是无效的。
- :valid 内容验证正确的<input> 或其他 <form> 元素。
- :visited 户访问链接后生效
- :where() 选择所有能被该选择器列表中任何一条规则选中的元素。 :is() 会计入整个选择器的优先级（它采用其最具体参数的优先级），而 :where() 的优先级为 0。

### 伪元素
一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
::

- ::after 创建一个伪元素，作为所选元素的最后一个子元素
- ::before 创建一个伪元素，作为所选元素的第一个子元素
- ::backdrop 背景遮罩,一个与视口大小相同的盒子，它会被渲染在任何顶层展示元素的下方。
- ::cue 匹配所选元素中的WebVTT提示。这可以用于在 VTT 轨道的媒体中使用字幕和其他线索。
- ::cue-region WebVTT（Web Video Text Tracks）中的提示区域。它与视频字幕和音频描述相关。
- ::first-letter 区块容器第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效。
- ::first-line 块级元素）的第一行应用样式。
- ::first-selector-button 代表 type="file" 的 <input> 的按钮。
- ::grammar-error 火狐不支持浏览器标识为语法错误的文本段
- ::marker 列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上
- ::part() 在阴影树中任何匹配 part 属性的元素。
- ::placeholder  表示 <input> 或 <textarea> 元素中的占位文本。
- ::selection safari不支持 文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。
- ::slotted() 选定那些被放在 HTML 模板中的元素
- ::spelling-error 火狐不支持 浏览器标记为不正确拼写的文本段。
- ::target-text 浏览器在支持文本片段技术时所滚动到的文字。它使得作者可以选择高亮一段文字的方式。
