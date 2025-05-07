## animations 动画
css动画模块允许使用关键帧来改变css的值。每个关键帧描述了动画元素在动画序列的给定时间应该如何渲染。可以控制动画的持续时间、重复次数、延迟开始等参数

### animation 简写的css属性
是animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count，animation-direction, animation-fill-mode, animation-play-state,animation-timeline的简写形式

其中 animation-name 是必须的，其他属性是可选的

### animation-composition
多个动画同时影响一个属性时使用的复合操作
* replace 影响的属性覆盖，后面的动画会完全替换前面的动画效果
* add 两个动画效果会叠加
* accumulate 同一个属性的值，数值累加
    ```css
        @keyframes rotate1 {
            100% { transform: rotate(90deg); }
        }

        @keyframes rotate2 {
            100% { transform: rotate(90deg); }
        }

        /* 使用 accumulate 时，最终旋转角度为 180度 */
        /* 使用 add 时，两个变换会同时应用，仍然是 90度 */
    ```

### animation-delay
css动画从应用到元素到执行动画的等待时间。
单位 秒(s) 或 毫秒(ms)
正值表示在指定的时间之后开始动画，负值表示动画立即开始，但动画在已经运行了x秒的位置开始


### animation-direction
动画应该向前还是向后播放，还是交替播放
 * normal 每个循环中向前播放。每次循环时，动画都会重置到开始状态重新开始
 * reverse 向后播放。每次动画循环时，动画重置到结束状态重新开始。缓动函数也是反向执行，ease-in 会编程 ease-out
 * alternate 动画在每个循环中反转方向，第一个循环向前播放，第二个循环向后播放
 * alternate-reverse 东湖在每个循环中反转方向，第一个循环向后播放，第二个循环向前播放


### animation-duration
动画持续时间
* 单位 秒(s) 或 毫秒(ms) 负值无效
* auto 相当于 0s 
如果没有提供值，动画仍然会执行，会触发animationStart和animationEnd时间。当持续时间为0s时，动画是否可见取决于animation-fill-mode的值

### animation-fill-mode
设置动画在执行前后为目标应用样式的方式
* none 动画不执行时，不会应用任何样式
* forwards 目标元素将保留执行过程中遇到的最后一个关键帧设置的计算值。取决于animation-direction和animation-iteration-count的值
* backwards 目标元素将保留执行过程中遇到的第一个关键帧设置的计算值。取决于animation-direction的值
* both 遵循正向和反向规则，动画开始前元素就会处于第一个关键帧的状态，动画结束后元素就会处于最后一个关键帧的状态

### animation-iteration-count
设置动画播放次数
* infinite 永远重复
* number 重复次数，非整数可以播放动画的一部分

### animation-name
动画名称，指定一个或多个@keyframes 的动画规则
* none 没有动画
* name 指定一个@keyframes 的动画规则， 区分大小写的字母、数字、下划线、/和-组成，开头不能出现两个破折号

### animation-play-state
设置动画是正在运行还是暂停，暂停状态的动画重新running，会在暂停时停止的位置开始动画，而不是从动画序列的起点重新开始。
* running 动画正在运行
* paused 动画暂停


### animation-timing-function
设置动画在每个周期内的进展方式
* linear 平均速度动画， 相当于 cubic—bezier(0.0, 0.0, 1.0, 1.0)
* ease 动画中期速度增加，动画结束时速度减慢 cubic-bezier(0.25, 0.1, 0.25, 1.0)
* ease-in 从缓慢开始，随着动画属性的过渡速度增加，直到完成 cubic-bezier(0.42, 0, 1.0, 1.0)
* ease-out 快速开始，慢下来的动画继续。 cubic-bezier(0, 0, 0.58, 1.0)
* ease-in-out 动画属性缓慢过渡，加速，然后再减速。cubic-bezier(0.42, 0, 0.58, 1.0)
* cubic-bezier(<number [0,1]> , <number> , <number [0,1]> , <number>) 定义了三次贝塞尔曲线，其中第一个和第三个值必须在0到1的范围内。
* linear(<number> <percentage>{1,2}, …) 线性分段动画，一个停止点是一个输出进度和一个输入百分比的组合。输入百分比指的是时间进度，输出进度指的是动画属性的值到达的百分比。
* steps(<integer>, <step-position>) n个停止点，每个停止点有相同的时间
    * jump-start 左连续函数，第一次跳转发生在动画开始时
    * jump-end 右连续函数，最后一次跳转发生在动画结束时
    * jump-none 两端没有跳转，有效地消除了插值迭代中的一个步骤。相反，它同时保持0%标记和100%标记，每个持续时间为1 。
    * jump-both 包括在0%和100%标记处的暂停，有效地在动画迭代期间增加了一个步骤。
    * start 相当于 jump-start
    * end 相当于 jump-end
    * step-start 相当于 steps(1, jump-start) 一个步骤，开始就直接跳转到最后
    * step-end 相当于 steps(1, jump-end) 一个步骤， 结束就直接跳转到最后

### animation-timeline 实验性技术
控制css动画进度的时间线
/* 基本语法 */
animation-timeline: none | auto | <timeline-name> | scroll() | view();

