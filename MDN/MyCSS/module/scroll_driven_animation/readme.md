## 滚动驱动动画

允许你根据基于滚动的时间轴而不是默认的基于时间的文档时间轴的进展来对属性值进行动画。

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

### animation-range
简写属性用于沿时间轴设置动画附件范围的开始和结束，即动画在时间轴的哪里开始和结束。 animation-range 简写属性可以作为 <animation-range-start> 和 <animation-range-end> 值的组合应用于容器元素。如果两个值都被指定，它们将按照 <animation-range-start> 然后 <animation-range-end> 的顺序被解释。

- normal  : 默认值，等同于cover
- cover 从元素进入视口开始到完全离开视口结束
- contain 从元素完全进入视口开始到开始离开视口结束
- entry  从元素开始进入视口到完全进入视口
- exit 从元素开始离开视口到完全离开视口
- entry-crossing
- exit-crossing
- 百分比 相对于视口高度的百分比，可以精确控制动画的触发位置
css
- 长度值 使用具体的像素值


### animation-range-start
### animation-range-end

### scroll-timeline
- scroll-timeline用于基于元素的滚动位置创建动画。它跟踪滚动容器的滚动进度 
- scroll-timeline：基于滚动容器的滚动位置
是 scroll-timeline-name 和 scroll-timeline-axis 的组合

scroll-timeline-name 定义了滚动驱动的名称
scroll-timeline-axis 定义了滚动驱动的轴


### view-timeline
是 scroll-timeline-name 和 scroll-timeline-axis 的组合
- view-timeline基于元素在视口中的可见性创建动画。它跟踪元素进入和离开视口的过程。
- view-timeline：基于元素在视口中的可见性


### timeline-scope
修改命名动画时间线的作用域。
默认情况下，命名时间线只能被设置为直系后代元素的控制时间线.
timeline-scope会导致时间轴的范围增加到 timeline-scope 设置的元素及其所有后代元素。
```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### scroll()
和animation-timeline 一起用的函数，用于创建一个基于滚动位置的时间线
```css
animation-timeline: scroll(); /* 默认使用根元素(document)的滚动 */
animation-timeline: scroll(nearest); /* 使用最近的可滚动祖先元素 */
animation-timeline: scroll(root); /* 使用根元素的滚动 */
animation-timeline: scroll(self); /* 使用元素自身的滚动 */
```

### view()
和animation-timeline 一起用的函数，用于创建一个基于滚动位置的时间线
```css
animation-timeline: view(); /* 默认使用元素自身的视图时间线 */
animation-timeline: view(block); /* 使用块方向的视图时间线 */
animation-timeline: view(inline); /* 使用内联方向的视图时间线 */
animation-timeline: view(vertical); /* 垂直方向 */
animation-timeline: view(horizontal); /* 水平方向 */
```
>scroll()：基于滚动位置创建动画;view()：基于元素在视口中的可见性创建动画