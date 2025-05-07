## table

### border-collapse
决定表格的边框是分开的还是合并的
- collapse
- separate
### border-spacing
指定相邻单元格边框之间的距离.只适用于 边框分离模式
```css
table {
  border-spacing: 10px 5px;
}

```

### caption-side
表格的标题（<caption>）放到规定的位置。但是具体显示的位置与表格的 writing-mode 属性值有关。
- top
- bottom
- block-start
- block-end
- inline-start
- inline-end
### empty-cells
渲染表格 <table> 中没有可见内容的单元格的边框和背景。

- show 边框和背景正常渲染。与普通元素一样。
- hide 边框和背景被隐藏。
### table-layout
布局表格的单元格、行和列的算法。

- auto 自动表格布局算法。表格及其单元格的宽度会根据内容自动调整大小。
- fixed 表格和列的宽度是由 table 和 col 元素的宽度或第一行单元格的宽度来设置的。后续行中的单元格不会影响列的宽度。在“fixed”布局方法下，一旦下载并分析了第一行表格，整个表格就可以被渲染出来。这可以加快渲染时间

### vertical-align
指定行内（inline）、行内区块（inline-block）、表格单元格（table-cell）盒子的垂直对齐方式。