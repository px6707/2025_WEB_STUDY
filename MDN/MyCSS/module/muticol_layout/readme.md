## 多列布局

是一种定义了多栏布局的模块，可支持在布局中建立列（column）的数量，以及内容如何在列之间流动（flow）、列之间的间距（gap）大小，以及列的分隔线（column rules）。

### column-count
个元素的内容分成指定数量的列。
```css
column-count: 3;
/* 用来指定列的数量，如果值为 auto，则列的数量根据内容自动计算。或者width */
column-count: auto;
```

### column-fill
控制元素内容分成列时的平衡方式。
- auto 按顺序填充列，内容占其可用空间，可能导致某些列保持空白
- balance 内容平均分配
- balance-all 内容平均分配，每个片段都平衡 不支持
```css
column-fill: balance;
```


### column-gap
置元素列之间的间隔（gutter）大小。
```css
column-gap: 10px;
column-gap: 10%;
```


### column-rule
 简写属性可以在多列布局中设定分割线的宽度、样式和颜色。
- column-rule-width
- column-rule-style
- column-rule-color
```css
/* 单值 */
column-rule: dotted;
两个值
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;
```
### column-rule-color
设置分隔线的颜色
### column-rule-style
设置分隔线的样式
### column-rule-width
设置分隔线的宽度


### column-span
column-span 的值被设置为 all 时，可以让一个元素跨越所有的列。
- all 跨越所有的列
- none 不跨越任何列
```css
column-span: all;
```


### column-width
设置了多列布局中理想的列宽度。容器将有尽可能多的列，其中任何列的宽度都不会小于 column-width 值。如果容器的宽度比指定的值窄，那么单列的宽度将比声明的列宽度小。
```css
column-width: 100px;
```

### columns
设置元素的列宽和列数。
```css
columns: 3;
columns: 6rem auto;
```