## 溢出

### overflow
是 overflow-x 和 overflow-y 的简写,指定visible和clip以外的值会生成新的区块格式化上下文。
JavaScript 的 Element.scrollTop 属性可用于滚动 HTML 元素，即使当 overflow 设置为 hidden 时。
- visibel
- hidden 内容裁剪以适应padding盒
- scroll
- auto 溢出则有滚动条
- clip 类似于hidden， clip禁止所有滚动，包括编程方式的滚动，且不会开启新的格式化上下文，但是可以使用display:flow-root创建新的格式化上下文

### overflow-block
大部分浏览器不支持
设置了当内容溢出盒的块首和块末侧时所显示的内容

### overflow-inline
大部分浏览器不支持
设置了当内容溢出盒的行首和行末侧时所显示的内容


### overflow-clip-margin
firefox safari 无效
决定了一个 overflow: clip 的元素在被裁剪之前会被绘制到离边界多远的地方。此属性定义的边界称为盒子的溢出剪辑边缘。



### scroll-behavior
当用`户手动导航`或者` CSSOM scrolling API` 触发滚动操作时，CSS 属性 scroll-behavior 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。
- auto 立即滚动
- smooth 平滑滚动


### scrollbar-gutter
允许作者为滚动条保留空间，从而在内容增长时避免不必要的布局变化，同时在不需要滚动时避免不必要的视觉效果。
元素的滚动条gutter是内边框边缘和外内边距边缘之间的空间，浏览器可以在其中显示滚动条。如果没有滚动条，gutter将被绘制为内边距的延伸。
浏览器会决定使用经典滚动条还是覆盖滚动条：
- 经典的滚动条总是放置在阴沟中，占用空间。
- 覆盖滚动条被放置在内容之上，而不是在gutter中，并且通常是部分透明的。

value:
- auto 初始值。当 overflow 为 scroll ，或者 overflow 为 auto ，盒子溢出时，经典的滚动条会产生沟槽。覆盖滚动条不消耗空间。不预留滚动条空间,当内容溢出需要滚动条时，滚动条会占用内容空间,这可能导致布局在出现/消失滚动条时发生抖动
- stable 当使用经典滚动条时，如果 overflow 为 auto ,  scroll ，或 hidden ，即使盒子没有溢出，也会出现凹槽。当使用覆盖滚动条时，gutter将不存在。总是预留滚动条的空间,即使当前不需要滚动条，也会保留这个空间,防止因滚动条出现/消失导致的布局抖动,也可以用于并排盒子的显示一致性
- both-deges 如果一个gutter出现在框的内联起始/结束边缘，那么另一个也会出现在相反的边缘。在元素的两边都预留滚动条的空间，即使只在一边需要滚动条，两边都会保留空间，用于保持视觉对称性.
> 这个值必须和stable一起使用，否则无效。overflow:stable both-edges


### text-overflow
用于确定如何提示用户存在隐藏的溢出内容。以是裁剪、显示一个省略号（“…”）或显示一个自定义字符串。
- clip 在内容区域的极限处截断文本
- ellipisis 这个关键字会用一个省略号 来表示被截断的文本


### line-clamp
可以把块容器中的内容限制为指定的行数。
它只有在 display 属性设置成 -webkit-box 或者 -webkit-inline-box 并且 box-orient 属性设置成 vertical时才有效果。

在大部分情况下，也需要设置 overflow 属性为 hidden，否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号。
- interger 这个值表明内容显示了多少行之后会被限制。必须大于 0。
- none 这个值表明内容显示不会被限制。


### scroll-timeline-name
用于创建滚动动画时间轴。
在 animation-timeline 声明中引用该名称，表示用于通过滚动操作驱动动画进度的容器元素。
```css
.overflow-contariner {
    /* auto也可以 */
    overflow: scroll;
    /* 指定这个滚动盒子的驱动名称 */
    scroll-timeline-name: --story-scroll;
    child{
        /* 指定滚动引擎要执行的动画 */
        animation-name: scrollAnimation;
        /* 使用滚动父元素的滚动引擎驱动动画 */
        animation-timeline: --story-scroll;
    }
}

@keyframes scrollAnimation {
   0% {
        opacity: 1;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

```