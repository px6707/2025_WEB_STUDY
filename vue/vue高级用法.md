## vue高级用法

### 模板化



### 插槽
插槽的原理
1. complier 编译阶段，会把template编译成render函数，其中插槽会被编译成父组件中的函数，放在h函数的子节点参数中使用。
2. 在子组件挂载过程中，会获取父组件传入的slot函数，并储存在slots对象中,其中具名插槽的名字回座位函数的key
3. 子组件会执行这些slots函数，如果时作用域插槽，则子组件会负责传入子组件的数据
4. 由于插槽函数时在父组件生成的，因此可以使用父组件中的数据，这就是个闭包
  ```javascript
  // 父组件模板
  <Child>
    <template #default>{{ parentData }}</template>
  </Child>

  // 编译后在父组件中生成插槽函数
  render() {
    return h(Child, null, {
      default: () => this.parentData  // 插槽函数在父组件中定义
    })
  }

  // 子组件挂载过程
  function mountComponent(vnode) {
    const instance = createComponentInstance(vnode)
    
    // 在子组件挂载时，将父组件的插槽函数
    // 存储到子组件的 $slots 对象中
    initSlots(instance, vnode.children)
    
    // 继续挂载流程...
  }
  // 简化的初始化过程
  function initSlots(instance, children) {
    if (children) {
      // 将父组件传递的插槽函数存储到子组件的 $slots 中
      instance.slots = normalizeSlots(children)
    }
  }

  // 标准化插槽
  function normalizeSlots(children) {
    const slots = {}
    for (const key in children) {
      const value = children[key]
      slots[key] = (...args) => normalizeSlotValue(value(...args))
    }
    return slots
  }

    // 标准化插槽值
    function normalizeSlotValue(value) {
      return Array.isArray(value) ? value : [value]
    }
    // 具名插槽的编译结果
    {
      slots: {
        default: () => [...],
        header: () => [...],
        footer: () => [...]
      }
    }
  ```
2. 

#### 默认插槽
组件外部维护参数及结构，内部安排位置
* 默认插槽的实现方式

### 具名插槽
* 插槽散开
插槽内容聚合成数组，放到子组件对应的插槽上
```html
<!-- 子组件 -->
 <template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    
    <main>
      <slot></slot>  <!-- 默认插槽，等同于 name="default" -->
    </main>
    
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<!-- 父组件 -->
<template>
  <base-layout>
    <!-- 方式1：使用 v-slot -->
    <template v-slot:header>
      <h1>页面标题</h1>
    </template>

    <!-- 方式2：使用简写 # -->
    <template #footer>
      <p>页脚内容</p>
    </template>

    <!-- 默认插槽内容 -->
    <p>主体内容</p>
  </base-layout>
</template>

<!-- 动态插槽名字 -->
<template>
  <base-layout>
    <template v-slot:[dynamicSlotName]>
      <p>动态插槽内容</p>
    </template>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      dynamicSlotName: 'header' // 可以动态改变
    }
  }
}
</script>
```

### 作用域插槽
```html
<!-- 子组件 -->
<template>
    <div>
        <slot></slot>
        <slot name="header" :title="slotProps" :desc="description"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<!-- 父组件 -->
<template>
    <div>
        <child>
            <template #header="{ title, desc }" >
                <h1>header</h1>
            </template>
            <template v-slot:footer>
                <h1>footer</h1>
            </template>
        </child>
    </div>
</template>
```

### weatch和computed的区别
1. computed: 计算属性，用于派生状态，返回一个值；watch: 监听器，用于响应数据变化，执行副作用操作
2. 原理不同：watch对劫持的数据进行观察，触发相应回调；computed 先收集依赖、然后对依赖项进行数据劫持、依赖的变化触发计算回调
3. computed具有缓存机制，多次访问computed的值，只会计算一次

### vue2 管道
```js
```


### 父子组件声明周期顺序
```javascript
// 加载渲染过程
Parent beforeCreate
Parent created
Parent beforeMount
  Child beforeCreate
  Child created
  Child beforeMount
  Child mounted
Parent mounted

// 子组件更新过程
Parent beforeUpdate
  Child beforeUpdate
  Child updated
Parent updated

// 销毁过程
Parent beforeDestroy
  Child beforeDestroy
  Child destroyed
Parent destroyed
```
created：父组件创建，子组件创建
mounted：子组件先完成，父组件再完成
destory： 子组件先卸载，父组件再卸载

### mixin
mixin 合并策略
1. 生命周期，mixin声明周期在组件声明周期之前，多个mixin按照引入顺序执行
2. 变量，mixin低于组件，多个mixin按照引入顺序，后者覆盖前者