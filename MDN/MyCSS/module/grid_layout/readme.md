## 网格布局grid
CSS 网格布局擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是 HTML 生成了这些区域）。


### grid
grid 是一个 CSS 简写属性，可以用来设置以下属性： 显式网格属性 grid-template-rows、grid-template-columns 和 grid-template-areas， 隐式网格属性 grid-auto-rows、grid-auto-columns 和 grid-auto-flow， 间距属性 grid-column-gap 和 grid-row-gap。


### grid-template-colums
基于网格列的维度，去定义网格线的名称和网格轨道的尺寸大小。
```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}
```

### grid-template-rows
基于 网格行 的维度，去定义网格线的名称和网格轨道的尺寸大小。
```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}
```

### grid-template-areas
网格区域 grid areas 在 CSS 中的特定命名。
```css
#grid {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
page > header {
  grid-area: head; /* 4. 指定当前元素所在的区域位置，从 grid-template-areas 选取值 */
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}
```

### grid-temoplate
属性简写，用以定义网格中行、列与分区。
是grid-template-rows、grid-template-columns与grid-template-areas 的简写
```css
/* 为 grid-template-areas grid-template-rows / grid-template-column */
grid-template: 
            "a a a" 40px
            "b c c" 40px
            "b c c" 40px / 1fr 1fr 1fr;
```


### grid-auto-columns
### grid-auto-rows
隐式创建的网格纵向轨道（track）的宽度。
如果一个表格项目被定位在没有使用 grid-template-columns 显式指定尺寸的列中，隐式的 grid 轨道就会被创建出来支撑它。显式地定位到超出范围的列中，或者通过自动布局算法创建额外的列，就会发生上述情况。
```css
grid-auto-columns: 1fr;
```


### grid-auto-flow
控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。
value:
- row 自动布局算法按照通过逐行填充来排列元素，在必要时增加新行。如果既没有指定 row 也没有 column，则默认为 row。
- column 该关键字指定自动布局算法通过逐列填充来排列元素，在必要时增加新列。
- dense 该关键字指定自动布局算法使用一种“稠密”堆积算法，如果后面出现了稍小的元素，则会试图去填充网格中前面留下的空白。这样做会填上稍大元素留下的空白，但同时也可能导致原来出现的次序被打乱。如果省略它，使用一种「稀疏」算法，在网格中布局元素时，布局算法只会「向前」移动，永远不会倒回去填补空白。这保证了所有自动布局元素「按照次序」出现，即使可能会留下被后面元素填充的空白。


### grid-column
### grid-row
节点从grid布局，从哪一列开始，到哪一行结束，从哪一列开始，到哪一列结束
指的都是行列的开始位置。
```css

grid-row: span 3;
```
span 表示跨越的网格数量


### grid-column-start
### grid-column-end
### grid-row-start
### grid-row-end
行列的开始结束位置


### grid-area 
指定一个网格项的大小和位置
- 如果指定了 4 个 <grid-line> 的值，grid-row-start 会被设为第一个值，grid-column-start 为第二个值， grid-row-end 为第三个值，grid-column-end 为第四个值。
- 当 grid-column-end 被忽略时，若 grid-column-start 为一 <custom-ident>（自定义关键字数据类型）， grid-column-end 则为该 <custom-ident>；否则为 auto。
- 当 grid-row-end 被忽略时，若 grid-row-start 为一 <custom-ident>，grid-row-end 则为该 <custom-ident>；否则为 auto。
- 当 grid-column-start 被忽略时，若 grid-row-start 为一 <custom-ident>，则所有四项普通写法的属性值均为该值。否则为 auto。
- 网格面的属性亦可设为一 <custom-ident> 作为其名称，然后可通过 grid-template-areas 放置。


### row-gap
### column-gap
行列的间距

### grid-gap
 CSS简写属性设置行和列之间的间隙（也称为gutter）。这个属性适用于多列、flex和网格容器。
```css
grid-gap: 1rem 2rem;
gap: 1em;
```


### repeat()函数
表示轨道列表的重复片段，允许以更紧凑的形式写入大量显示重复模式的列或行。
```css
/* 生成5列，分别是50px 1fr 50px 1fr 100px */
grid-template-columns: repeat(2, 50px 1fr) 100px;
```

### minmax()
定义了一个长宽范围的闭区间，它与CSS 网格布局一起使用。
```css
/* 在200px 到1fr之间 */
minmax(200px, 1fr)
```

### fit-content
关键字相当于 fit-content(stretch)。 在实际应用中，这意味着盒子会使用可用空间，但绝不会超过 max-content。
### fit-content()
函数将给定大小夹紧为可用大小 根据公式 min(maximum size, max(minimum size, argument)).
用于grid-tempalte-columns，用在width属性上时，这个函数都不支持
```css
/* 限定最大为300px */
fit-content(300px)
```

> fit-content(300px) 和 max-width: 300px 有以下关键区别：
1. 行为方式不同
    - fit-content(300px)：
        - 会先尝试适应内容的宽度
        - 如果内容宽度小于300px，就使用内容宽度
        - 如果内容宽度大于300px，就使用300px
        - 不会占用额外可用空间
    - max-width: 300px :
        - 元素会尽可能占据可用空间（如果是块级元素）
        - 仅在超过300px时才会限制宽度
        - 即使内容很少，也会占据父容器的全部宽度（除非设置了其他宽度属性）

2. 使用场景
    - fit-content(300px) 适合：
        - Grid布局中需要根据内容自适应的列
        - 需要紧凑布局的场景
        - 不希望元素占用多余空间的情况

    - max-width: 300px 适合：
        - 需要限制最大宽度但仍想占据可用空间的场景
        - 响应式布局中控制元素最大宽度
        - 块级元素的常规宽度限制