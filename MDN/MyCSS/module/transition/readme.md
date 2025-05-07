## transition 过度

### transition
是 transition-property、transition-duration、transition-timing-function、transition-delay 的简写。
```css
/* margin-right 2s 内执行完 0.5s 后开始 */
transition: margin-right 2s .5s;
/* margin-right 2s 内执行完 color 1s 内执行完 */
transition: margin-right 2s, color 1s;

transition: margin-right 2s ease-in-out;
```

### transition-property
指定应用过度属性名称
- none 没有过度动画
- all 所有可被动画的属性都表现为过渡
- 属性名
```css
transition-property: margin-right;
```

### transition-duration
以秒或毫秒为单位指定过渡动画所需的时间
如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减。两种情况下，属性列表都保持不变。
```css
transition-duration: 10s, 30s, 230ms;
```


### transition-timing-fuinction
如果 timing function 的个数比主列表中数量少，缺少的值被设置为初始值（ease） 。如果 timing function 比主列表要多，timing function 函数列表会被截断至合适的大小。这两种情况下声明的 CSS 属性都是有效的。
- timing function ease ease-in ease-out ease-in-out

### transition-delay
在过渡效果开始作用之前需要等待的时间。
你可以指定多个延迟时间，每个延迟将会分别作用于你所指定的相符合的 css 属性
```css
transition-delay: 2s, 4ms;
```