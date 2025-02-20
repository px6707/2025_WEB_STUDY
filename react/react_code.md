## react 源码

### react 版本
15
stack reconciler

16.0 引入filber reconciler

17.0.2
- legacy 模式 使用create-react-app创建，有fiber数据结构，但是不做高优先级打断低优先级
- Concurrent模式：需要自己打包源码编译，可以实现高优先级打断低优先级，但是不稳定

18
Concurrent模式++


### 源码

 react 提供了API服务

 react-dom 各个平台crud element的方法

 react-reconciler react调度服务


 react更新：react函数重新执行一遍，然后观察节点差异。当setState、useState的dispatch、foreceUpdate函数执行的时候，说明当前react函数需要重新执行

#### react的数据结构

- eleemnt或者叫vdom
- current fiber
- workInProgress fiber
- 真实DOM

react的调和过程，第一部分就是current fiber 和 vdom的对比，生成 workInProgress fiber的过程



### Fiber
fiber是一个数据结构，很大程度上适合element对应的
- 不完全是， app节点也是一个fiber节点
```javascript
const fiberNode={
    type:'div',
    key,
    tag, //
    return,// 指向父节点
    sibling,// 指向兄弟节点
    pendingProps, // 新的props
    momoriedProps,  // 旧的props
    updateQueue, // 更新队列
    momeriedState, // 状态
    effectList, // 需要更新的节点的链表
    effectTag,  // 副作用标记
    nextEffect,
    fistEffect,
    lastEffect,
    // 双缓存节点, currentFiber和worinProgress fiber链接，存储了两个fiber的关系，方便之后的寻找
    alternate
}
```

### react流程
协调的流程
react reconciler：
pre -> begin work -> complete work -> commit work


准备阶段： 创建FiberRoot和RootFiber，创建workInProgress树的根节点
begin work 阶段：自上而下进行处理，根据fiber.tag（组件类型）调用不同的处理函数，对比current 使用v-dom和current fiber生成子节点的workinprogress fiber，期间执行函数组件、类组件、diff子节点，对比后给要更新的节点打上effecttag（placement、deletion、placemengAndUpdate）
complete work 阶段：自下而上进行处理，处理fiber节点的props，创建或更新DOM节点，处理事件监听，收集副作用（effectList），把需要更新的节点放入effectList链表，构建真实dom但是不挂载。
CommitWork阶段：遍历effectList执行三个子阶段：Before mutation（DOM操作前，处理事件、getSnapshotBeforeUpdate）,Mutation（DOM操作，处理effectLIst，更新界面，把workinProgressFiber变成currentFiber）, Layout（DOM操作后， 处理componentDidMount、componentDidUpdate、useLayoutEffect生命周期执行）。将complete中产生的真实dom挂载
 ```javascript
 // 简化的工作循环
 function workLoop(deadline) {
   while (workInProgress) {
     // 执行beginWork
     workInProgress = performUnitOfWork(workInProgress);
  
  if (!workInProgress && pendingCommit) {
    // 进入commit阶段
    commitRoot(pendingCommit);
  }
}

function beginWork(workInProgress) {
    return workInProgress.child;
}

function performUnitOfWork(fiber) {
  // 1. beginWork
  let next = beginWork(fiber);
  
  if (!next) {
    // 2. 如果没有子节点，进入complete阶段
    next = completeUnitOfWork(fiber);

  return next
}
function completeUnitOfWork(fiber) {
    // 完成当前fiber的工作
completeWork(fiber);
  // 查找下一个要处理的节点
  if (fiber.sibling) {
    return fiber.sibling;
  }
  return fiber.return
}
```


### 浏览器事件循环

宏任务 微任务 reqeustAnimationFrame layout(渲染) requestIdleCallback

如果宏任务特别长，就会导致卡顿，而在react中，宏任务可能会长的就是一直循环performUnitOfWork。为了优化这个问题，可以把宏任务分批执行，每批执行一定数量的宏任务，这样就不会导致卡顿了。
1.  如何分批执行宏任务？ messageChannel 宏任务优先级合适，兼容性好
2.  为什么其他方法不行
  - promise 微任务，任务优先级太高，会在宏任务完成后立即执行，不会让出主线程
  - generator 需要手动执行next()，无法自动调度，组织复杂
  - setTimeout 最小延迟4ms，而一帧16.6ms，精确度不够，造成不必要的延迟
  - requestIdleCallback 兼容性问题，执行频率不稳定,50ms渲染问题

```js
function testTask(){
  return ()=>{
    // performUnitOfWork()
    return ()=>{
      // performUnitOfWork()
      return ()=>{
        // performUnitOfWork()
      }
    }
  }
}

// testTask函数每次执行都是一个performUnitofWork, 同时返回下一个任务
let deadline
const threshold = 5
const now = ()=> performance.now()

const queue = [{cb:testTask}]

const peek = (arr)=>arr[0]

const transition = []
// 自执行函数, 返回messageChannel的postMessage函数 来触发transition中的函数执行
// 避免每次都要创建messageChannel
const postMessage = (function (){
  const {port1, port2} = new MessageChannel()
  // 在下一帧的宏任务触发
  port1.onmessage = ()=>transition.slice(0, 1).forEach(f=>f())
  return ()=>port2.postMessage(undefined)
})() 
function startTransition(flush){
  transition.push(flush)&&postMessage()
}
function flush(){
  // 定义一个时间段5ms，如果执行不到5ms， 且没有高优先级输入，则继续执行
  // 没过5ms，让出一次执行权，到下一个宏任务
  deadline = now() + threshold
  let task = peek(queue)

  while(task&&!showYield()){
    const {cb} = task
    task.cb = null

    const next = cb()
    if(next&&typeof next === 'function'){
      task.cb = next
    }else{
      queue.shift()
    }
    task = peek(queue)
  }

  // task没有或者showYield（到时间了）
  task&&starrtTransition(flush)
}

function showYield(){
  return now() > deadline || 高优先级输入
}
```


### schedule和reconciler
1. scheduler 调度器
  - 任务优先级管理
  - 事件分片
  - 任务调度执行
2. reconciler 协调器
  - Fiber 树的构建和对比， vdom和current fiber对比，生成workinprogress fiber，打标机（正删改查）
  -  生成真实DOM但不挂载，收集EffectList
  - commit 阶段：把需要更新的节点挂载到DOM上，执行副作用函数
