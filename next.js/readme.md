## next.js

 serverside component 和 clientside component 的区别，都能ssr吗？

### ssr的流程
1. 用户发起HTTP请求
2. 服务其接受请求
3. 服务器获取数据，注入到HTML模版中
4. 服务器返回完整的HTML给浏览器

### 优点
- 解决了首屏加载慢的问题
- SEO友好，可以直接获取页面中的数据
- 对低性能设备友好，减少了客户端的计算负担


### 确定
- 服务器负载较大
- 页面切换需要重新加载整个页面
- 交互性不如客户端渲染


### SSG 静态页面
```javascript
// 在构建时获取数据并生成HTML
export async function getStaticProps() {
  const posts = await prisma.post.findMany(); // 从数据库获取数据
  return {
    props: { posts },
    revalidate: 60 // 可选：启用ISR
  };
}
```
- 在构建时就完成数据获取和HTML生成
- 用户访问时直接返回预渲染的HTML
- 包含完整的内容，对SEO友好
- 通过ISR实现内容的定期更新
- 不需要重新部署整个应用
- 保持内容的相对新鲜度

这与传统方案的对比：

1. 纯静态HTML：
    - 内容写死
    - 无法使用React特性
    - 更新需要重新编写HTML
2. 客户端渲染(CSR)：
    - 首屏加载慢（需要等待JS下载和执行）
    - SEO不友好（搜索引擎看到的是空壳）
    - 每次访问都需要重新获取数据


### serverside component 、 clientside component 
Server Components
1. 定义方式：
    - 默认所有组件都是Server Components
    - 不需要特殊声明
2. 特点
    - 可以直接访问后端资源（数据库、文件系统）
    - 可以使用异步操作（async/await）
    - 代码不会被发送到客户端（减少bundle size）
    - 不能使用浏览器API
    - 不能使用React hooks（useState, useEffect等）
    - 不能添加交互事件（onClick等）
完全在服务器上渲染，生成静态HTML，不需要客户端hydration，更快的首屏加载
Client Components
1. 定义方式：使用use client
2. 特点
    - 可以使用浏览器API
    - 可以使用React hooks
    - 可以添加交互事件
    - 代码会被发送到客户端
    - 不能直接访问后端资源
    - 会增加JavaScript bundle size
先在服务器上渲染，生成初始HTML，需要客户端hydration，可以进行交互
#### 使用Server Components的场景：
- 数据获取
- 访问后端资源
- 保持敏感信息在服务器
- 纯展示型组件
- 大型依赖库
#### 使用Client Components的场景：
- 需要交互的UI
- 使用浏览器API
- 使用React hooks
- 需要事件监听
- 需要状态管理



#### hydration水合
Hydration（水合）是React中一个重要的概念：

Hydration的概念
Hydration是指将服务端渲染的静态HTML与React在客户端的JavaScript代码"融合"的过程。这个过程会：

1. 复用服务端已经渲染的HTML结构
2. 添加事件处理器
3. 创建组件的状态
4. 使组件可交互

#### Hydration过程
1. 初始状态：
    - 服务器生成静态HTML
    - 浏览器显示这个HTML（快速的首屏展示）
    - 此时页面不能交互
2. JavaScript加载：
    - 浏览器下载React代码
    - 下载组件的JavaScript代码
3. Hydration发生：
    - React "认领"已有的HTML结构
    - 添加事件监听器
    - 设置初始状态
    - 页面变得可交互
4. 完成后：
    - 组件完全可交互
    - 状态可以更新
    - 事件可以响应