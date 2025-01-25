## 对齐
### justify-content
作用于容器整体的内容对齐方式
控制所有项目作为一个整体在主轴上如何分布

```css
.div{
    /* 均匀分布空隙 */
    justify-content: space-evenly;
}
```

### justify-items
作用于**单个网格项(Grid Item)**的内容对齐,制每个项目内部内容在其网格单元格内的对齐方式
主要用于 Grid 布局


### align-content
作用于多行内容的整体对齐方式
控制行与行之间的空间分配和对齐
只有当容器有多行内容时才生效
是多行上的对齐方式
safe 是一个对齐溢出行为修饰符，它的主要作用是防止对齐操作导致内容溢出容器并变得不可见。让我详细解释：
```css
.container {
  align-content: safe center;  /* 安全的居中对齐 */
  align-content: unsafe center;/* 不安全的居中对齐 */
}
如果指定的对齐方式会导致内容溢出容器并不可见，则会自动回退到一个"安全"的位置
通常会回退到 start 位置，因为这是最不可能导致内容丢失的位置
```
### align-items
作用于单行内容在交叉轴上的对齐方式
控制每个项目在其所在行内如何对齐

注意是 单行 上的项目 的对齐方式


### place-content
是align-content 和 justify-content的简写。使用这两个属性的值可以用于任何的布局情况。
第一个值为 align-content 属性，第二个值为 justify-content .

### place-items
place-items 是一个简写属性 ，它允许你在相关的布局（如 Grid 或 Flexbox）中可以同时沿着块级和内联方向对齐元素 (例如：align-items 和 justify-items 属性) 。如果未提供第二个值，则第一个值作为第二个值的默认值。

### place-self
CSS简写属性允许你一次在块方向和行内方向对齐单个元素（即 align-self 和 justify-self 属性）