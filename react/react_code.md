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
CommitWork阶段：遍历effectList执行三个子阶段：Before mutation（DOM操作前),Mutation（DOM操作), Layout（DOM操作后）。将complete中产生的真实dom挂载
```javascript
// 简化的工作循环
function workLoop(deadline) {
  while (workInProgress) {
    // 执行beginWork
    workInProgress = performUnitOfWork(workInProgress);
  }
  
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