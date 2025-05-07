## CSS 布局
1. 块级元素在具有水平书写模式的语言中垂直运行，在任何垂直书写模式的语言中水平运行
2. 对应的内联方向是内联内容（如句子）的运行方向。

### 弹性盒布局
```css
/* flex-flow 是flex-direction 和 flex-wrap 的缩写 */
.container {
    flex-flow: row wrap;
}
.item{
    /* 占据剩余空间1，最小宽度基准200px 
    注意基准值，不是最小值  flex: 1 0 200px;  
    设置不允许收缩后才能应用最小值200px
     */
    flex:1 200px;

    /* 相当于 */
    flex-grow: 1;
    /* 不写省略为1 */
    flex-shrink: 1;
    flex-basis: 200px;

    /* 排序 默认0*/
    order: 3;
}
```

### grid 布局
```css
.container {
    display: grid;
    /* 
    网格宽度，支持长度和百分比和fr
    fr分配剩余可用空间，所占为比例 1/ 3
    支持repeate()函数生成重复配置，例如repeat(3, 1fr, 2fr) 相当于 1fr 2fr 1fr 2fr 1fr 2fr
    repeat(auto-fill, minmax(200px, 1fr)) 自动填充，最小200px，最大1fr
    auto-fill 一直填充，直到没有剩余空间,保留空列,适合后续可能添加新内容的场景
    auto-fit 一直填充，直到没有剩余空间,折叠空列
     */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    /* 间距简写 */
    grid-gap: 1rem;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;


    /* 隐式网格 即超出已使用grid-template-rows定义的行的高度*/
    grid-auto-rows: 100px;
    grid-auto-columns: 100px;
    /* 根据内容自动调整高度，但至少100px minmax定义最小和最大值 */
    grid-auto-rows: minmax(100px, auto);
    grid-auto-flow: row;

    /* 命名网格 网格名称与内部元素绑定*/
    /* grid-template-areas: "header header header" "sidebar content content" "footer footer footer";
    .item {
        grid-area: header;
    } */
}
指定内部元素的排列方式, 开始结束均指行列的开始位置
.item {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    /* 简写 负数为倒数第几行*/
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
.item {
    grid-column: 1 3;
    grid-row: 1 3;
}
```


### float布局
浮动元素脱离文档流，正常元素行内盒子已被缩短，故文字会排布在浮动元素周围，但是浮动元素从正常文档流移出，故段落的盒子仍然保持全部宽度。
```css
/* 清除浮动 */
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
/* 使用BFC清除浮动 使用visible之外的其他值*/
.container {
    overflow: auto;
}

/* display: flow-root; 生成块级元素盒，建立BFC，定义格式化上下文的根元素*/
.container {
    display: flow-root;
}
```

### position布局
```css
相对定位，距原先位置左侧100px，距顶部100px
.box1 {
    position: relative;
    left: 100px;
    top: 100px;
}
相对定位，移出文档流，以坐标的形式相对于容器定位
.box2 {
    position: absolute;
    left: 100px;
    top: 100px; 
}
.box3 {
    position: fixed;
    left: 100px;
    top: 100px;
}
```

### 固定定位
移出文档流，以坐标的形式相对于视口定位
```css
.box {
    position: fixed;
    top: 0;
    left: 0;
}
```

### 粘性定位
```css
.box {
    position: sticky;
    top: 0;
    left: 0;
}
```

### 表格布局
一个<table>标签之所以能够像表格那样展示，是由于 css 默认给<table>标签设置了一组 table 布局属性。当这些属性被应用于排列非<table>元素时，这种用法被称为“使用 CSS 表格”。

```css
div {
    display: table;
    display: table-cell;
    display: table-row;
    display: caption;
}
```

### 多列布局
column-count或者column-width指定一个容器分成几列或者列宽
```css
.box {
    column-count: 3;
    column-width: 100px;

    /* 简写 */
    column: 3 100px;
}
```
列样式
```css
.box {
    /* 列间距 */
    column-gap: 20px;

    /* 列分割线 */
    column-rule-color: red;
    column-rule-width: 2px;
    column-rule-style: solid;
    /* 简写 */
    column-rule: 2px solid red;

    /* 跨列内容 只能指定跨所有行*/
    column-span: all;

    /* 指定列的填充方式 
    auto 按顺序填充每一列，当列填满才会填充下一列，导致最后列有空白，需要设置容器高度
    balance 默认值尽可能使所有列高度均衡，内容平分到每一列
    
    */
    column-fill: auto;
}
```