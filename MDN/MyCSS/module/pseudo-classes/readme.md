## 伪类
表示元素的特殊状态

###  :active
a 元素或者button元素 按键按下和松开按键之间的时间

### :any-link
作为超链接锚点的元素，匹配每个具有href的a 元素和area元素。
`注意一定要有href`

### :autofill
匹配自动填充的input，如果又编辑了内容，则不匹配

### :blank
空输入框 input textarea， 啥浏览器都不支持

### :buffering
只有safari支持
匹配可播放元素缓存媒体资源，用于audio或者video


### :checked
选中状态的radio checkbox或者select的option元素

### :current
无浏览器实现
表示当前显示的元素或元素的祖先


### :default
表单中默认选项,用于button radio checkbox、option


### :defined
表示任何已定义元素，包括浏览器内置元素或成功定义的自定义元素
```css
/* 选择插槽内容任意元素 */
::slotted(*) {
  font-weight: bold;
}

/* 选择插槽内的任意 <span> 元素 */
::slotted(span) {
  font-weight: bold;
}

```


### :dir()
匹配特定文字书写方向的元素
```css
:dir(lrt){

}
```

### :disabled
禁用的元素

### :empty
匹配不含任何子元素的元素.子元素可以是元素节点或者文本（包括空格）。但不包括注释、处理指令和CSS content

### :enabled
已启用的元素，非disabled的表单元素

### :first
与@page 打印规则一起使用。表示打印文档的第一页。

### :first-child
表示一组兄弟元素中的第一个元素

### :first-of-type
表示一组兄弟元素中的第一个具有同类型的元素

### :focus
表示当前获得焦点的元素

### :focus-visible
根据用户的输入方式（鼠标vs键盘）来智能地显示焦点指示器。
:focus 会在元素获得焦点时始终显示焦点样式
:focus-visible 只在用户需要看到焦点位置时才显示（比如使用键盘导航时）,鼠标点击button不会匹配，文本输入框获得焦点时，总会匹配


### :focus-within
当元素或其任意后代被聚焦时匹配。
```html
  <label
    >Flavor:
    <select name="flavor">
      <option>Cherry</option>
      <option>Green Tea</option>
      <option>Moose Tracks</option>
      <option>Mint Chip</option>
    </select>
  </label>
```
```css

label:focus-within {
  font-weight: bold;
}

```

### :fullscreen
safari不支持
匹配当前处于全屏模式的所有元素。


### :future
firefox不支持
一个时间维度的伪类，它将匹配完全出现在匹配 :current 的元素之后的任何元素。例如，在WebVTT显示的字幕视频中。

### :has-slotted
兼容性差
当 <slot> 元素的内容不是空或者没有使用默认值时匹配
仅当在shadow DOM中的CSS中使用时有效。


### :has()
 选择包含特定子元素的父元素。:has(selector) /* 选择包含指定选择器的元素 */
 ```css
 /* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}

 ```

 ### :host  :host()
 在 shadow DOM 内部匹配宿主。
 ```css
 /* 宿主具有footer类时，显示红色 */
 :host(.footer) { color : red; }
 ```

 ### :host-context()
 火狐、safari不支持
 选择影子根宿主，仅当它是给定的选择器参数的后代
 ```css
 /* 如果宿主元素是h1的后代，字体加粗 */
 :host-context(h1) {
  font-weight: bold;
}
 ```


 ### :hover
 鼠标悬停


 ### :in-range
 input的值在min和max范围内

 ### :indeterminate
 任意的状态不确定的表单元素.
 未选择值的radio、没有值的progress
 或者指定了indeterminate=true 的checkbox


 ### :invalid
 选择任何未通过验证的 <form>、<fieldset>、<input> 或其他表单元素。


 ### :is()
 以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。
 :is() 会计入整个选择器的优先级（它采用其最具体参数的优先级），而 :where() 的优先级为 0。
` :is() 不能选择伪元素`
### :lang()
基于元素语言来匹配页面元素


### :last-child
一组兄弟元素中的最后一个元素

### :last-of-type
一组兄弟元素中的最后一个具有特定类型的元素

### :left
火狐不支持
与@page组合使用，匹配打印文档时左侧页

### :link
尚未被访问的元素，匹配每个具有 href 属性的未访问的 <a> 或 <area> 元素。


### :local-link
无浏览器支持
匹配每个具有 href 属性的本地链接，如锚点 #target


