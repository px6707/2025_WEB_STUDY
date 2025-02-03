## 自定义属性
就是定义变量

### 语法
属性名需要以两个减号开始，属性值是任何有效的 CSS 值。自定义属性也是写在规则集之内的
```css
element {
  --main-bg-color: brown;
}
规则集所指定的选择器定义了自定义属性的可见作用域。
可以使用:root 选择器来定义全局下的自定义属性。
```css
:root {
  --main-bg-color: brown;
}
```
由自定义属性标记设定值（比如： --main-color: black;），由 var() 函数来获取值（比如： color: var(--main-color);）
```css
element {
  background-color: var(--main-bg-color);
}
```

### 自定义属性集成
```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```
```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}

```
在这个情况下， var(--test) 的结果分别是：

- 对于元素 class="two" ：10px
- 对于元素 class="three" ：2em
- 对于元素 class="four" ：10px （继承自父属性）
- 对于元素 class="one" ：非法值，会变成自定义属性的默认值


### 自定义属性备用值
```css
/* red 作为没有--my-var的备用值 */
.two {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}
```


### 无效变量
```css
:root {
  --text-color: 16px;
}
p {
  color: blue;
}
p {
  color: var(--text-color);
}
```
以上例子中，给color 赋值了16px，显然是无效值，但无效值和css语法错误处理方式并不一样
浏览器会执行如下两个步骤：
1. 检查属性 color 是否为继承属性。是，但是 <p> 没有任何父元素定义了 color 属性。转到下一步。
2. 将该值设置为它的默认初始值，比如 black。
> **注意** 段落颜色并不是蓝色，因为无效代换导致了它被替换成了默认初始值的黑色。如果你直接写 color: 16px 的话，则会导致语法错误，而前面的定义则会生效（段落显示为蓝色）。


### 注册自定义属性
可以使用css或者js的方式来注册自定义属性
```javascript
window.CSS.registerProperty({
  name: '--my-var',
  syntax: '<length>',
  inherits: false,
  initialValue: '0px'
})
```
```css
@property --my-var {
  syntax: '<length>';
  inherits: false;
  initial-value: '0px';
}
```
>**注意** 注册属性的一个好处是，浏览器现在知道如何通过过渡等方式处理你的自定义属性！当属性没有注册时，浏览器不知道如何处理它，因此它假定可以使用任何值，因此无法对其进行动画处理。不过，当属性有注册的语法时，浏览器可以围绕该语法进行优化，包括为其添加动画！
已经注册的属性不能被更新，重新注册会报错，表示已经被定义