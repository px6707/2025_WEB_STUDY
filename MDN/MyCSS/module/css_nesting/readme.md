## css 原生嵌套

CSS 嵌套不同于如 Sass 等的 CSS 预处理器的一点是，它是被浏览器直接解析的，而不是先经由 CSS 预处理器的预编译。而且在 CSS 嵌套中，& 嵌套选择器的优先级类似于 :is() 函数；它的优先级由它所关联的选择器列表当中优先级最高的选择器决定。

如果不在一个嵌套规则里使用，则 & 嵌套选择器将代表其根作用域。
```css
/* 检测浏览器是否支持 & 嵌套选择器 */
@supports(selector(&)){

}
```
### 子选择器

```css
/* 不使用嵌套选择器 */
parent {
  /* 父样式 */
  child {
    /* 父级的子样式 */
  }
}

/* 使用嵌套选择器 */
parent {
  /* 父样式 */
  & child {
    /* 父级的子样式 */
  }
}

/* 浏览器均会把以上两个样式表解析为 */
parent {
  /* 父样式 */
}
parent child {
  /* 父级的子样式 */
}

.parent-rule {
  /* 父规则的属性 */
  :hover {
    /* 子规则的属性 */
  }
}

/* 当嵌套规则需要被附加（无空格）到父规则上时，例如当使用伪类，或者创建组合选择器时，& 嵌套选择器必须紧贴在子选择器之前。

考虑以下示例。我们想要为一个元素添加样式，一些是需要永久应用的，而另一些嵌套样式则仅当鼠标悬停时才被应用。如果不添加 & 嵌套选择器，浏览器会添加空格，最终我们得到的将是一个匹配任意被悬停的子元素的选择器。 */
/* 浏览器会将以上嵌套规则解析为 */
.parent-rule {
  /* 父规则的属性 */
}

.parent-rule *:hover {
  /* 子规则的属性 */
}


/* 如果不在一个嵌套规则里使用，则 & 嵌套选择器将代表其根作用域。 */
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}

```



### 关系选择器
CSS 关系选择器也可以在使用或不使用 & 嵌套选择器的情况下使用。

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}

/* 这段也可以用嵌套选择器改写为 */

h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}

```


### 组合选择器
组合选择器必须使用 & 嵌套选择器。
```css
.a {
  /* 带有 class="a" 元素的样式 */
  .b {
    /* 其实就是不用&就变成了子选择器了 */
    /* 带有 class="b"，且为 class="a" 元素的子元素的样式 */
    
  }
  &.b {
    /* 带有 class="a b" 元素的样式 */
  }
}
```


### 后附嵌套选择器
& 嵌套选择器也可以添加到一个选择器的后方。这将起到反转上下文的效果。
```css
.foo {
  /* .foo 的样式 */
  .bar & {
    /* .bar .foo 的样式 */
  }
}
```


### 没有拼接
> 警告：这在 CSS 嵌套中是不可能的：当不使用组合器时，嵌套选择器将被当作类型选择器。允许拼接会使得这个规则无效。
```css
.component {
  &__child-element {
  }
}
/* 在 Sass 中，这将变为 但在css中是不可能的*/
.component__child-element {
}

```
会被解释为组合选择器
```css
.my-class {
  element& {
  }
}

/* 浏览器将其解析为组合选择器 */
.my-class {
}
element.my-class {
}

```

### 无效嵌套
如果一个嵌套 CSS 规则无效，那么所有其包含的样式都将被忽略。这不影响其父级及其后面的规则。


### @规则也可以嵌套

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width: 1024px) {
      max-inline-size: 1024px;
    }
  }
}

/* 等价于 */
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}

```


### 嵌套优先级
& 嵌套选择器的优先级由它所关联的选择器列表当中优先级最高的选择器决定。这与 :is() 函数的优先级计算方式一致。
```html
<b class="foo">
  <c>蓝色文字</c>
</b>

```

```css
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}

```
上面c的颜色共匹配到两条颜色， 一个是b c ，一个是 .foo c
但是会显示蓝色，因为#a就算没有用到，但是优先级也会使用整个嵌套关系中优先级最高的#a c 101作为优先级，而不是.foo c 的011