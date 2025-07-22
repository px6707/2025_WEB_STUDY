## vapor

vapor 模式，是 vue 单文件组件 SFC 的一种新的编译模式，目标是减小包大小并提升性能。支持现有 Vue API，几乎具有相同行为

### 现阶段可使用的场景
1. 现有应用程序中部分使用，例如性能敏感子页面
2. 完全以 vapor 模式构建小型的新应用程序
3. 内部尝鲜，提 Issue 为社区踩坑

### 不可使用的场景
1. 现有组件整体迁移 vapor 模式在边缘还比较粗糙，不能 100% 还原 API
2. SSR hydration 即不可与 Nuxt 一起使用 
3. Transition 
4. KeepAlive
5. Suspense
6. 深度嵌套的第三方 VDOM 组健康

### 如何使用
1. 在一个 vapor 的应用中，通过 createVaporApp 创建，可以避免引入虚拟 DOM 运行时代码.
    ```javascript
        import { createVaporApp } from 'vue'

        const app = createVaporApp({
        // 你的组件
        })
    ```
2. 如果在 createApp 创建的 VDOM 应用中使用必须安装 vaporInteropPlugin
    ```javascript
        import { vaporInteropPlugin } from 'vue'
        const app = createApp({
            // 你的组件
        }).use(vaporInteropPlugin)
        .mount('#app')
    ```
    > 也可以在 vapor 应用实例中安装 vaporinteropPlugin 以允许在内部使用 VDOM 组件，但将引入 vdom 运行时并抵消较小 bundlue 的好处

3. 单文件组件，直接在 script 上面添加 vapor 标记
    ```vue
    <script setup vapor>
    </script>
    ```

### 特性兼容 不兼容以下特性
1. Options API
2. app.config.globalProperties
3. getCurrentInstance
4. $slots $props
5. @vue:xxx 元素生命周期
6. 自定义指令接口变化
    ```javascript
    type VaporDirective = (
        node: Element | VaporComponentInstance,
        value?: () => any,
        argument?: string,
        modifiers?: DirectiveModifiers,
    ) => (() => void) | void
    ```
    value 是一个响应式getter，返回绑定的值。用户可以使用 watchEffect （在组件卸载时自动释放）设置响应式效果，并且可以选择返回一个清理函数。例子:
    ```javascript
        const MyDirective = (el, source) => {
            watchEffect(() => {
                el.textContent = source()
            })
            return () => console.log('cleanup')
        }
    ```
    