## 动态组件 component

### 生命周期
1. compoennt 不缓存，每一次都是真切换。前一个unmount后一个mount

### 保持component不销毁
- 使用keep-alive


### defineAsyncComponent
- 异步组件，每次component切换时都要重新加载
- 使用keep-alive 可以缓存，不会每次都重新加载


### keep-alive
如何控制缓存变量

- include 控制哪个组件被缓存
- exclude 控制哪个组件不被缓存
- max 控制缓存的组件最多有多少个


### teleport 传送门
实现了包裹的组件的内容渲染到任何dom节点上，实现组件代码与实际渲染位置的解耦
```html
<teleport to="body">
```
### suspense
异步组件等待
```html
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./Child.vue'))
<suspense>
    <template>
        <Child />
    </template>
    <template #fallback>
        <div>Loading...</div>
    </template>
</suspense>
```

### transition
进入或离开可以由以下的条件之一触发：

- 由 v-if 所触发的切换
- 由 v-show 所触发的切  换
- 由特殊元素 <component> 切换的动态组件
- 改变特殊的 key 属性

#### 6个过度class
1. v-enter-from 进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。
2. v-enter-active ：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。
2. vu-enter-to 进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 v-enter-from 被移除的同时)，在过渡或动画完成之后移除。
3. v-leave-from 离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。
4. v-leave-active 离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。
5. v-leave-to 离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 v-leave-from 被移除的同时)，在过渡或动画完成之后移除。

<!-- 命名过渡 -->
```html
<Transition name="fade">
  ...
</Transition>
```
```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

覆盖默认类名
```html
<Transition
  name="custom-classes"
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
>
  <p v-if="show">hello</p>
</Transition>
```