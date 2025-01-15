## CSS 背景样式
1. Background-image 默认情况下，大图片不会缩小适应盒子，只会展示一部分，小图片则会平铺多个填充
    1. Background-repeat
        1. No-repeat 阻止背景重复平铺
        2. Repeat-x 仅水平方向平铺
        3. Repeat-y 仅垂直方向重复平铺
        4. Repeat 默认值，两个方向重复平铺
    2. Background-size
        1. Cover 图像足够大，使它完全覆盖盒子区域，同时保持宽高比，部分图像可能回跳出盒子外
        2. Contain 图像调整到合适框内尺寸，此时如果图像宽高比与盒子不同，则可能出现空隙
        3. 只定义盒子大小，则图片使用盒子大小，可能出现图片扭曲
    3. Background-position 指定背景图片在盒子上的位置，默认原点在左上角，默认值为0，0
        1. 可以使用关键字、数值和百分比
        2. 可以使用四值语法，top 20px right 10%
    4. linear-gradient 渐变
    5. 多背景 url指定多个图片，逗号分隔，前面的覆盖后面的，image1覆盖imag2覆盖image3覆盖image4
        ```css
            background-image: url(image1.png), url(image2.png), url(image3.png),url(image4.png);
            background-repeat: no-repeat, repeat-x, repeat;
            background-position: 10px 20px, top right;

            <!-- 不同属性的每个值，将与其他属性中相同位置的值匹配，例如上面image1图片的repeate为no-repeat
            当属性数量不同时，较小数量的值会循环，例如有四个背景图，但只有2个位置，因此image3使用10px 20px，image4 使用top right -->
        ```
    6. 背景附加 background-attach 控制内容滚动时的滚动方式
        1. Scroll 元素的背景在《页面》滚动时滚动，滚动《元素》背景不会移动 (默认)
        2. Fixed 元素的背景固定在视口上，当页面和元素滚动时，它不会滚动，保持在屏幕的相同位置
        3. Local 背景固定在所设置的元素上，滚动该元素，背景随之滚动
    7. 背景简写
        ```css
            background: url(https://mdn.github.io/shared-assets/images/examples/big-star.png) center center / 400px 200px no-repeat,rebeccapurple;
        ```
        1. 不同背景使用逗号分隔
        2. background-color 只能在最后一个逗号之后指定
        3.  Background-size 值只能立即包含在 background-position 之后，用“/”字符分隔，例如：center/80%

