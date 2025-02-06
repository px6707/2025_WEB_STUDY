## 行内布局

### alignment-baseline
兼容性问题，不兼容firefox
指定了用于对齐方框文本和行内内容的基线。
value:
- baseline 使用父节点的 dominant-baseline 值。
- alphabetic 用于书写拉丁语、西里尔文、希腊语和许多其他文字；将方框的字母基线与其父方框的字母基线匹配，对应于大多数（但不是所有）字符的底部。
- central  将方框的中心基线与其父方框的中心基线相匹配，对应于表意文字中心基线，位于表意文字下方基线和表意文字上方基线之间。
- ideographic 将方框的表意字符侧面基线下的表意字符面与其父方框的表意字符面相匹配，并使用字体中的表意字符基线表构建派生的基线表。
- mathmatical  匹配方框的数学基线与其父方框的数学基线，对应于设计数学字符的中心基线。
- middle 将方框的垂直中点与父方框的基线加上父方框x高度的一半对齐。
- text-bottom 使用行内内容框的line-under边缘，将框的底部匹配到父内容区域的顶部。
- text-top 将盒子的顶部匹配到父级内容区域的顶部；行内内容框的换行边缘。

> alignment-baseline 属性只对行内框、flex项目、网格项目、表格单元格以及 <text> 、 <textPath> 和 <tspan>  SVG元素起作用。如果存在，则覆盖形状的 alignment-baseline 属性。


### dominant-baseline
是一个用于设置文本主导基线的 CSS 属性，主要用于 SVG 和高级排版。
value:
- auto 使用父元素的 dominant-baseline 值
- alphabetic  使用字母的基线（如拉丁文、希腊文等）
- central 使用元素中心作为基线
- hanging 使用悬挂基线（用于某些印度文字）
- ideographic  使用表意文字的基线（如中文、日文等）
- mathmatical 使用数学符号的基线
- middle 使用中间位置作为基线
- text-bottom 使用文本框的底部作为基线
- text-top

与 alignment-baseline 的区别
1. dominant-baseline 设置元素的主导基线
2. alignment-baseline 控制元素如何与父元素的基线对齐


### initial-letter

实验属性 用于设置首字母样式，嵌入、凸起和下城
不支持firefox 和 webviewon ios
value：
- normal 正常文本
- integer 下沉行数

```css
.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}
```


### line-height
设置多行元素的空间量，如多行文本的间距。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非替代的 inline 元素，它用于计算行盒（line box）的高度。
value:
- normal 取决于用户代理。桌面浏览器（包括 Firefox）使用默认值，约为 1.2，这取决于元素的 font-family。
- length 高度 设置 line-height 时使用无单位数值，是这个无单位<数字>乘以该元素的字体大小。
- percentage 与元素自身的字体大小有关，计算值是给定的百分比值乘以元素计算出的字体大小。<percentage> 值可能会带来不确定的结果


### vertical-align
指定行内（inline）、行内区块（inline-block）、表格单元格（table-cell）盒子的垂直对齐方式。
vertical-align 属性可被用于两种上下文：
1. 使行内元素盒模型与其行内元素容器垂直对齐
2. 垂直对齐表格单元格的内容
> 注意 vertical-align 只对行内元素、行内块元素和表格单元格元素生效：不能用它垂直对齐块级元素。

value:
1. 相对父元素的值：这些值使元素相对其父元素垂直对齐：
    - baseline 使元素的基线与父元素的基线对齐。
    - sub 使元素的基线与父元素的下标基线对齐。
    - super 使元素的基线与父元素的上标基线对齐。
    - text-top 使元素的顶部与父元素的字体顶部对齐。
    - text-bottom 使元素的底部与父元素的字体底部对齐。
    - middle 使元素的中部与父元素的基线加上父元素 x-height 的一半对齐。
    - length 使元素的基线对齐到父元素的基线之上的给定长度。可以是负数。
    - percentage 使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是 line-height 属性的百分比。可以是负数。
2. 相对行的值：使元素相对整行垂直对齐：
    - top 使元素及其后代元素的顶部与整行的顶部对齐。
    - bottom 使元素及其后代元素的底部与整行的底部对齐。
3. 单元格的值
    - baseline 使单元格的基线，与该行中所有以基线对齐的其他单元格的基线对齐。
    - top 使单元格内边距的上边缘与该行顶部对齐。
    - middle 使单元格内边距盒模型在该行内居中对齐。
    - bottom 使单元格内边距的下边缘与该行底部对齐。


### 基线
基线（baseline）是指欧洲和西亚文字排版中，字体中大多数文字坐落在其上的一条假想线。
东亚文字没有基线，所有字形（glyph）坐落在一个方框中，既没有升部（ascender）也没有降部（descender）。当与有低基线的文字混排时，东亚文字应该坐落在有低基线的文字的基线与降部高度的中间。