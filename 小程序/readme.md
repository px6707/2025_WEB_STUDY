## 小程序

### 双线程模型
逻辑层和渲染层的时间分开，js占用时间过长也不会导致页面失去响应。
1. 渲染层视图层
2. JSCore 逻辑层

|运行环境|渲染层|逻辑层|
|---|---|---|
|IOS|WebkitView|JSCore|
|安卓|chrom定制内核|v8|
|开发者工具|chrom webview|NWJS v8套壳|

由于setData需要跨线程通信，因此需要尽量减少setData的调用次数和携带的数据大小，减少js代码的复杂度

 ### react native
 react native 是通过jsbridge将js代码转换成原生代码，
 渲染的是原生组件
 js运行在jsCore中
 通过jsBridge在Native和js之间进行通信

### taro1、2 和 3版本的区别
1. Taro 1.x 和 2.x（编译时转换）：
- 在编译时将 React 代码转换为对应平台的代码
- 使用 AST 静态分析，将 React/Vue 组件转换为小程序组件
- 限制较多，只能使用框架指定的组件和API
- 跨平台兼容性好，但开发体验一般
- 不支持 React Hooks（1.x）或支持较少（2.x）

2. Taro 3.x（运行时）：
- 采用运行时架构，不再进行代码转换
    1. 预置一个基础模版base.wxml， 可以根据数据渲染不同的界面结构
    2. 运行时react代码在小程序的逻辑层运行，通过taro提供的DOM、BOM API 创建虚拟DOM树
    3. 将虚拟DOM树转换成小程序的数据格式
    4. 使用小程序的setData机制更新数据，数据变化触发基础模版的重新渲染
    5. 通用模版根据数据结构展示对应的组件
- 实现了一个轻量的运行时框架
- 可以直接使用 React/Vue 等社区组件库
- 支持完整的 React 特性（包括 Hooks）
- 更好的开发体验和更少的限制
- 可以使用 React 生态的工具（DevTools等）
- 支持多框架：React、Vue、Vue3、Preact等