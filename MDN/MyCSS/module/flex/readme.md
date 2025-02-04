## 弹性盒子 flex

### flex
flex-grow flex-shrink flex-basis 的简写


可以使用一个，两个或三个值来指定 flex 属性。

- 单值语法：值必须是以下之一:
    - 一个 <flex-grow> 的有效值：此时简写会扩展为 flex: <flex-grow> 1 0。
    - 一个 <flex-basis> 的有效值：此时简写会扩展为 flex: 1 1 <flex-basis>。
    - 关键字 none 或者全局关键字之一。
- 双值语法：

    - 第一个值必须是一个 flex-grow 的有效值。

    - 第二个值必须是以下之一：

        - 一个 flex-shrink 的有效值：此时简写会扩展为 flex: <flex-grow> <flex-shrink> 0。
        - 一个 flex-basis 的有效值：此时简写会扩展为 flex: <flex-grow> 1 <flex-basis>。
- 三值语法：值必须按照以下顺序指定：

    - 一个 flex-grow 的有效值。
    - 一个 flex-shrink 的有效值。
    - 一个 flex-basis 的有效值。



### flex-basis
指定了 flex 元素在主轴方向上的初始大小。
说明：
1. 可用空间 = 容器宽度 - 所有项目的 flex-basis 总和
2. 每个项目增长尺寸 = (可用空间 * flex-grow) / 所有项目的 flex-grow 总和
3. 最终尺寸 = flex-basis + 增长尺寸
举例说明：
```css
.item1 { flex: 1 1 30px; }
.item2 { flex: 1 1 100px; }
```
计算过程：
可用空间 = 500px - (30px + 100px) = 370px
每个项目的增长份额 = 370px * (1/2) = 185px

item1 最终宽度 = 30px + 185px = 215px
item2 最终宽度 = 100px + 185px = 285px

> 虽然两个项目的 flex-grow 都是 1（平等分配剩余空间）
但它们的起点（flex-basis）不同
分配剩余空间时，是在各自 flex-basis 的基础上增加相同的量
所以基准值大的项目，最终尺寸也会更大


### flesx-flow
flex-flow 属性是 flex-direction 和 flex-wrap 的简写。
```css
/* flex-flow：<'flex-direction'> */
flex-flow: row;

/* flex-flow：<'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;

/* flex-flow：<'flex-direction'> 和 <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;


```