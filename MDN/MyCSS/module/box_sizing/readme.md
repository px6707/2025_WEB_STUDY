## 盒模型相关属性

### height
max-content、min-content、fit-content
#### max-content
- `max-content` 使元素的高度等于其内容的自然高度
- 元素会完全展开以容纳所有内容，不会发生换行或截断
- 即使父容器设置了固定高度，元素也会保持其内容的完整高度
- 内容过多时可能影响性能，建议配合 max-height 使用
#### min-content
使用最小可能的高度
可能导致内容截断
#### fit-content
在 max-content 和可用空间之间取较小值
更适合需要自适应的场景

```css
div{
    height: max-content
}
```


## visible
collapse
* 用于 <table> 行、列、列组和行组，将隐藏表格的行或列，并且不占用任何空间（与将 display: none 用于表格的行/列上的效果相当）。但是，计算其他行和列的大小时，仍会像显示折叠行或列中的单元格一样进行计算。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
* 折叠的弹性元素和 ruby 元素会被隐藏，它们本来将要占用的空间会被移除。
*对于其他元素，collapse 被视为与 hidden 相同。