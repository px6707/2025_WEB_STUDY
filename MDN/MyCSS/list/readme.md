## 列表样式
```css
ul {
    list-style-type: none; 符号类型
    list-style-position: inside; 符号位置，在列表项中还是在列表外outside
    list-style-image: url('https://mdn.github.io/shared-assets/images/examples/big-star.png'); 图片作为符号
    list-style: square inside url('https://mdn.github.io/shared-assets/images/examples/big-star.png'); 简写,顺序不固定，如果指定了type和image，image会覆盖type，如果图像无法加载，则会显示类型

    图片作为符号在大小等方面有限，可以使用background属性替换
    list-style-type: none;
    padding-left: 2em;
    background-image: url('https://mdn.github.io/shared-assets/images/examples/big-star.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 1.6em 1.6em;
}
```

```html
<!-- 计数开始 反向计数 指定数值-->
<ol start="5" reversed>
    <li>Item 1</li>
    <li value="5">Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ol>
```