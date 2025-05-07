## 响应式设计

### 响应式图片

<picture> 元素提供了更灵活的图片源选择控制，允许基于不同条件指定不同的图片源。
为不同屏幕尺寸显示不同的图片裁剪版本
提供现代格式（如WebP）的图片，同时保留后备方案
```html
<picture>
  <source media="(min-width: 800px)" srcset="hero.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="后备图片">
</picture>

多格式支持
<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <img src="image.jpg" alt="后备图片">
</picture>
```


srcset 属性允许我们为同一个 <img> 元素指定多个不同尺寸的图片源，让浏览器根据设备特性选择最合适的图片。

w 单位表示图片的实际宽度（像素）
sizes 属性告诉浏览器在不同断点下图片会显示的尺寸
浏览器会自动选择最适合当前设备的图片版本
```html
<img 
  src="small.jpg"
  srcset="small.jpg 300w,
          medium.jpg 600w,
          large.jpg 900w"
  sizes="(max-width: 500px) 300px,
         (max-width: 900px) 600px,
         900px"
  alt="响应式图片"
>

<img 
  src="image-1x.jpg"
  srcset="image-1x.jpg 1x,
          image-2x.jpg 2x,
          image-3x.jpg 3x"
  alt="不同像素密度的响应式图片">
```


### 视口元标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
这个元标签告诉移动端浏览器，它们应该将视口宽度设定为设备的宽度，将文档放大到其预期大小的 100%，在移动端以你所希望的为移动优化的大小展示文档。
这个标签是应为有些移动端浏览器会把视口宽度设为 960 像素，并以这个宽度渲染页面，结果展示的是桌面布局的缩放版本。这样视口查询不生效。通过设定width=device-width，你用设备的实际宽度覆写了苹果默认的width=960px，然后你的媒介查询就会像预期那样生效。
initial-scale：设定了页面的初始缩放，我们设定为 1。
height：特别为视口设定一个高度。
minimum-scale：设定最小缩放级别。
maximum-scale：设定最大缩放级别。
user-scalable：如果设为no的话阻止缩放。
你应该避免使用minimum-scale、maximum-scale，尤其是将user-scalable设为no。用户应该有权力尽可能大或小地进行缩放，阻止这种做法会引起访问性问题。


### 媒体查询
包括一个媒体类型（可选，无值则用于全部媒体类型），一个媒体表达式和一组css规则
```css
@media media-type and (media-feature-rule) {
  div.example {
    font-size: 60px;
  }
}
```

媒体类型
all  所有媒体类型
screen  屏幕
print  打印
projection  投影（废弃）

### 朝向

orientation  媒体特性用于检测设备是处于横向还是纵向模式。
1. landscape（横向）：
    * 屏幕宽度大于高度
    * 典型场景：手机或平板横置
2. portrait（纵向）：
    * 屏幕高度大于宽度
    * 典型场景：手机或平板竖直持握
```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}

```
### 指点装备
hover 和 pointer
1. hover 用于检测是否有悬停功能
    * none 不支持悬停例如 手机、平板等触摸屏设备
    * hover 支持悬停例如 桌面设备
2. pointer 用于检测是否有指针设备
    * none 没有指针设备
    * fine 精确的输入设备：鼠标、触摸屏
    * coarse 不精确的输入设备：触摸屏
```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}

/* 精确指针设备的样式 */
@media (pointer: fine) {
    /* 小型可点击元素 */
    .button {
        padding: 5px 10px;
    }
}

/* 触屏等不精确设备的样式 */
@media (pointer: coarse) {
    /* 更大的点击区域 */
    .button {
        padding: 12px 20px;
        min-height: 44px; /* 触屏设备推荐最小点击区域 */
    }
    
    /* 增加元素间距 */
    .nav-links li {
        margin: 10px 0;
    }
}
```

### 媒体查询混合
1. 与 and 逻辑
2. 或 ， 用逗号分隔
3. 非 not  not必须放在媒体查询的最前面，否定的是整个媒体查询，而不是媒体表达式
```css
/* 媒体查询混合 */
/* body 的文字只会在视口至少为 400 像素宽，且设备横放时变为蓝色。 */
@media screen and (min-width: 400px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
/* 文本会在视口至少为 400 像素宽的时候或者设备处于横放状态的时候变为蓝色 */
@media screen and (min-width: 400px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}

/* 不是打印媒体时应用的样式 */
@media not print {
    .screen-only {
        display: block;
    }
}
/* 非触屏设备的样式 */
@media not (pointer: coarse) {
    .hover-effect:hover {
        transform: scale(1.1);
    }
}
/* 当宽度不大于800px时应用样式 */
@media not (min-width: 800px) {
    /* 等同于 max-width: 799px */
    .content {
        flex-direction: column;
    }
}
/* 理解not 不能用于否定单个特性 是什么意思 */
/* 错误理解 */
/* 这样写并不是表示："屏幕且不是横向" */
@media screen and not (orientation: landscape) {
    /* 这样的写法是无效的 */
}

/* 正确写法 */
/* 这表示："不是（屏幕且横向）的情况" */
@media not (screen and (orientation: landscape)) {
    /* 这样的写法是有效的 */
}

/* 实际应用中更清晰的写法 */
@media screen and (orientation: portrait) {
    /* 使用肯定的表达方式更清晰 */
}
```