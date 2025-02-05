## 片段
CSS 片段模块定义了当内容被分割（fragmented）到多个页面、区域或列时的显示方式。
当行向盒子被分割为多行时，就会出现分片。当一个块在列布局容器内跨越多列，或在打印时跨越分页符时，也会出现这种情况。元素的每一个渲染的部分都称为片段（fragment）。

### box-decoration-break
定义当元素跨多行、多列或多页时，元素的片段应如何呈现。有一些兼容性问题，IE、safari
它会影响一下属性的表现
- background
- border
- border-image
- box-shadow
- clip-path
- margin
- padding
value:
- slice 默认，元素在断开处（换行、分页等）被切割，边框、内边距等装饰在断开处会被切断，背景图像会被当作一个整体来处理，边框半径只应用在整个盒子的角落
- clone 每个框片段与指定的边框、填充和边距独立呈现。每个片段都有完整的边框、内边距等装饰，背景图像会在每个片段中重新开始，边框半径会应用到每个片段的角落


### break-after
生成的盒子之后的页面，列或区域中断行为（换句话说，如何以及是否中断）。如果没有生成的盒子，则该属性将被忽略。
每个潜在的断点（亦即每个元素的边界）都受到三个属性的影响：上一个元素的 break-after 值、下一个元素的 break-before 值以及当前元素自身的 break-inside 值。
- 以下规则被用于判断中断是否必要：
    1. 如果上述三个属性中，如果任何一个的值属于“强制中断”值，那么这个属性将被优先应用，此处所称“强制中断”的值为： always、 left、 right、 page、 column 和 region。如果几个相关值都是这样的断点，则取流中最新出现的元素之一（即break-before优先于break-after，后者本身优先于break-inside）。
    2. 如果三个相关值中的任何一个是避免换行值，即avoid、avoid-page、avoid-region、avoid-column，则此时不会应用此类换行。
值：
- auto 允许但不强制在主体框（page、column、region）后插入任何分隔符
- avoid 避免在主体框（page、column、region）后插入任何分隔符
- always 强制在主体框（page、column、region）后进行分页。 实验属性
- all 前置在主体框后进行分页。突破所有fragmentation上下文。
- avoid-page 避免主体框后的任何分页 实验属性
- page 强制在主体框后进行分页
- left 强制在主体框后设置一到两个分页符，使下一页成为左页
- right 强制在主体框后设置一到两个分页符，使下一页成为右页
- recto 强制在主体框后设置一到两个分页符，无论哪个分页符将使下一页成为recto页
- verso 强制在主体框之后设置一到两个分页符，使下一页成为反页
- avoid-column 避免在主体框之后发生任何列打断。实验属性
- column 强制在主框之后断开列。 实验属性
- avoid-region 避免主框之后的任何区域断裂。
- region 强制一个区域在主框之后断开。

可以使用的属性只有 auto、avoid、page、column
优先级：break-before > break-after > break-inside

### break-before
设置盒子之前的分页、分列表现

### break-inside
设置盒子内部的分页、分列表现。
可使用的值有：auto、avoid、avoid-column、avoid-page

这些属性用在多列布局 column-width：200px； 打印布局中特别有用



### orphans
设置块容器中必须显示在页面、区域或列底部的最小行数。在印刷术中，孤行字是段落中单独出现在页面底部的第一行。（该段落在下一页继续。）
兼容性：不支持firefox
值：
- interger 设置碎片断开之前，碎片底部可以保留的最小行数。该值必须为正。
```css
.text {
  orphans: 2;    /* 默认值 */
  orphans: 3;    /* 保留3行 */
  orphans: 4;    /* 保留4行 */
}
```
> 应用于打印布局和多列布局

### window
用来设置一个块级容器在新的分页，区域或者列的顶部需要结合在一起的最小行数。widow 指的是在新页面顶部单独出现的段落的最后一行。（这一行来自于上一个页面的段落）
兼容新：不支持firefox