## 形状
 形状（CSS shape）模块用于描述几何形状。

### shape-outside
属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。注意它只是定义了文本`如何对元素环绕`，而非定义显示出来的形状。
需要和clip-path配合使用
```css
/* 定义环绕 */
clip-path: polygon(0 0, 150px 150px, 0 150px); */
/* 定义形状 */
shape-outside: polygon(0 0, 150px 150px, 0 150px);
```
- none 该浮动区域不产生影响，行内元素以默认的方式包裹着该元素的 margin box。
- margin-box 
- padding-box
- border-box
- content-box

- circle
- ellipse
- polygon 等

### shape-image-threshold
设定一个 alpha 通道的界限值来提取shape-outside 值为图像的形状。所有 alpha 值比这个界限值大的像素都会被当做形状的一部分，以此确定形状的边界。界限值为0.5时，形状会包含所有不透明度超过 50% 的像素。
```css
shape-outside: linear-gradient(50deg, rgb(77, 26, 103), transparent 80%,
                transparent);
shape-image-threshold: .2;
```

### shape-margin
设定由shape-outside创建的 CSS 形状的外边距。

```css
shape-margin: 20px;
```