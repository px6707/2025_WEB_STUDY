## 伪元素
伪元素模块定义了不直接出现在文档树中的抽象元素。

### :: after
::after 会创建一个伪元素，作为所选元素的最后一个子元素。


### :: before
::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来为一个元素添加修饰性的内容。此元素默认是行级的。

### ::file-selector-button
 CSS 伪元素代表 type="file" 的 <input> 的按钮。

### ::first-letter
 CSS 伪元素将样式应用于区块容器第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效。
 - 第一个字母之前或紧随其后的标点符号也包含在匹配中。
 - 有些语言的数字符总是一起大写，如荷兰语中的 IJ。在这种情况下，数字的两个字母都应与 ::first-letter 伪元素匹配。
 - ::before 伪元素和 content 属性的组合可能会在元素开头注入一些文本。在这种情况下，::first-letter 将匹配生成内容的第一个字母。


 ### ::first-line
 的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。
 > ::first-line 伪元素只能在块容器中，所以，::first-line伪元素只能在一个 display 值为 block, inline-block, table-cell 或者 table-caption中有用.。在其他的类型中，::first-line 是不起作用的。

 ### ::grammer-error
 浏览器标识为语法错误的文本段
 firefox 中不支持

 ### ::highlight
火狐 android不支持
设置自定义高亮样式,需要配合js在页面注册
```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: #ad26ad;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: #5d0a99;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: #0000ff;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: #07c607;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: #b3b308;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: #ffa500;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: #ff0000;
  text-decoration: underline;
}
```
```javascript
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent = "此浏览器不支持 CSS 自定义高亮 API！";
}

// 创建并注册彩虹色中每种颜色的高亮。
const highlights = [];
for (let i = 0; i < 7; i++) {
  // 为该颜色创建新的高亮。
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // 以自定义名称注册此高亮。
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// 逐个字符迭代文本。
for (let i = 0; i < textNode.textContent.length; i++) {
  // 专门为此字符创建一个新范围。
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // 将该范围添加到下一个可用的高亮中，当达到第 7 个高亮时，循环回到第一个高亮。
  highlights[i % 7].add(range);
}

```

### ::marker
safari 不支持
匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 <li>


### ::placeholder
表示 <input> 或 <textarea> 元素中的占位文本。

### ::selection
firefox safri 不支持
应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。

### ::spelling-error
表示浏览器标记为不正确拼写的文本段。
firefox 不支持

### ::target-text
代表了浏览器在支持文本片段技术时所滚动到的文字。它使得作者可以选择高亮一段文字的方式。
高亮效果是临时的，页面刷新后会消失
只有通过点击链接或手动输入 URL 时才会触发高亮