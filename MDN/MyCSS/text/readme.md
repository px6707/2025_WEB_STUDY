## 文本和字体样式
```css
div{
    font-style: italic; //斜体 italic normal oblique 斜体模拟版本，将普通文本斜体的样式应用到文本
    font-weight: bold; //加粗 normal  bolder lighter 当前元素的粗体设置为比父元素更细或更粗
    text-transform: capitalize; //首字母大写
    text-transform: lowercase; //小写字母
    text-transform: uppercase; //大写字母
    text-transform: full-width; //全角 固定宽度的正方形，类似等宽字体，允许拉丁和中文、日语对齐


    text-decoration: underline; //下划线 overline line-through 这是一个缩写形式，实际是由text-decoration-line text-decoration-style text-decpration-color 组成


    text-shadow: 2px 2px 2px red; //阴影 x轴偏移量 y轴偏移量 模糊半径 颜色

    line-height: 2; //行高 接受大多数长度单位， 也可以接受无单位值，含义为字体大小的倍数

    letter-spacing: 2px; //字间距
    word-spacing: 2px; //单词间距

    // font 简写
    font: italic 20px/2 sans-serif; //font-style font-variant font-weight font-stretch font-size/line-height font-family
}
```