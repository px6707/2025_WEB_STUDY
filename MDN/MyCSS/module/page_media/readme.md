## 分页媒体

分页媒体（paged media）模块定义控制打印内容或将内容拆分为离散页面的任何其他媒体的内容的表现属性。它允许你设置分页、控制可打印区域、以不同方式设置左侧和右侧页面的样式，以及控制元素内的分隔符。
### break-after
### break-before
### berak-inside
### orphans
### widows


### @page
浏览器支持性很差，firefox safari 和他们的移动端版本都不支持

用于修改打印页面的不同方面。它的目标是修改页面的尺寸、方向和页边距。@page at 规则可用于针对打印输出中的所有页面，也可使用其各种伪类来针对一个子集。
```css
/* 针对所有页面 */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* 针对所有偶数页面 */
@page :left {
  margin-top: 4in;
}

/* 针对所有奇数页面 */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* 针对所有设置了 `page: wide;` 选择器的页面 */
@page wide {
  size: a4 landscape;
}

@page {
  /* 右上方的空白框显示页码 */
  @top-right {
    content: "Page " counter(pageNumber);
  }
}
```
@page at 规则只能包含页面描述符和边距 at 规则。



### :blank
实验属性
:blank CSS 伪类选择器选择用户输入为空的输入框，如 <input> 和 <textarea>。


### :first
:first CSS 伪类与 @page at 规则一起使用。表示打印文档的第一页。
```css
/* 打印时选择第一页 */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```
> 备注： 你不能使用此伪类更改所有的 CSS 属性。你只能更改文档的边距、orphans、widows 和分页符。此外，在定义边距时，你只能使用绝对长度单位。所有其他属性都将被忽略。


### :left
火狐不支持
:left CSS 伪类, 需要和@规则 @page 配套使用，对打印文档的左侧页设置 CSS 样式。
```css
/* 设置打印时的左侧文档样式 */
@page :left {
  margin: 2in 3in;
}

```

### :right
火狐不支持
表示打印文档的所有右页。
> 备注： 此伪类只能用于更改页面的 margin, padding, border, and background 属性。其他属性都将被忽略，只会影响页框，不会影响文档内容。