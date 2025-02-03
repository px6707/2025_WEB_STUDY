## vue-router
vue 路由管理。

### hash
- 使用createWebHashHistory()创建
- URL中带有#号，如：https://example.com/#/user/id
- 不需要特殊的服务器配置
- 对SEO不友好
- 基于URL hash的变化，不会导致页面重新加载
### history
- 使用createWebHistory()创建
- URL格式更友好，如：https://example.com/user/id
- 需要服务器配置支持，否则会出现404错误
- 基于HTML5的History API（history.pushState和history.replaceState）

### 路由原地刷新发生什么
1. 在传统的网站中，用户访问一个URL，服务其会接受这个请求，并返回对应的页面
2. 在SPA这种单页应用中，所有的页面都是由前端js动态生成的。服务器只有个一个index.html
3. 当使用history模式时，url 看起来像是https://example.com/users，这是一个真实的 URL 路径。
4. 当用户访问 https://example.com/users 或者刷新页面，浏览器就会向服务器发送请求，尝试获取/ursl路径资源。
5. 但服务器没有/users 资源，他只有一个index.html，因此就会返回404错误，导致白屏
6. 服务其做特殊配置，将所有路由都定向到index.html。
7. 浏览器加载了index.html后，由前端js动态生成所有页面，包括用户刷新时所在的页面
### 路由守卫

#### 全局守卫
beforeEach beforeResolve afterEach

#### 组件守卫
beforeRouterLeave
beforeRouterEnter
beforeRouteUpdate  

#### 路由独享守卫
```javascript
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // ...
    }
  }
]
```
#### 路由执行过程
1. 导航触发
2. 失活组件内部路由调用 beforeRouteLeave
3. 调用全局路由 beforeEach
4. 如果是重用组件，重用组件调用组件内部的 beforeRouteUpdate
5. 调用路由独享守卫 beforeEnter
6. 解析异步路由组件
7. 在被激活的组件调用 beforeRouteEnter， 此时组件实例还不存在，所以不能访问 this。（仅在组件首次创建时执行，重用组件时不执行）
8. 调用全局的 beforeResolve
9. 导航被确认
10. 调用全局的 afterEach
11. 触发DOM更新
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入

