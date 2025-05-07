## Vue 基础

### MVVM 模式
1. 组成部分包括view、model、viewModel。model代表数据，view是用于界面UI（template部分），viewmodel是数据转换，将model的数据传递给view

### 双向绑定原理
compiler => 生成render函数，生成vnode
a. 利用花括号{{}}构筑了数据与vm的绑定关系
b. 通过视图绑定来处理数据 v-model=>：value @input

### 响应式原理
defineReactive
a. 数据劫持 
b. 依赖收集 每个vue文件都会生成一个负责渲染的watcher，computed生成对应的watcher，每个watch生成对应watcher
c. 更新通知

### diff算法
tick 一个tick render=>vnode=>dom的过程  
vue2 diff算法 同层比较、双端比较、同层使用Key比较
判断是否是相同节点
```javascript
// 先判断Key，再判断标签，再判断是否是注释节点，再判断是否定义了data，再判断是否是<input>,最后判断是否是同一个type
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key 值相同
    oldVnode.tag === newVnode.tag && // 标签名相同
    oldVnode.isComment === newVnode.isComment && // 是否都是注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了 data
    sameInputType(oldVnode, newVnode) // 当标签是<input>时，type必须相同
  )
}
```

```javascript
// 双游标比较算法
// oldVnode: A B C D
// newVnode: B A D C

// 步骤1：比较 A 和 B，不同
// 步骤2：比较 D 和 C，不同
// 步骤3：比较 A 和 C，不同
// 步骤4：比较 D 和 B，不同
// 步骤5：在老节点中找到新开始节点 B
//       将 B 移动到头部: B A C D
// 步骤6：继续比较...

// 老节点先遍历完，说明新节点有剩余，需要添加
// 新节点先遍历完，说明老节点有剩余，需要删除

function updateChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let newStartIdx = 0
  let newEndIdx = newCh.length - 1
  
  let oldStartVnode = oldCh[oldStartIdx]
  let oldEndVnode = oldCh[oldEndIdx]
  let newStartVnode = newCh[newStartIdx]
  let newEndVnode = newCh[newEndIdx]

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (sameVnode(oldStartVnode, newStartVnode)) {
      // 1. 头头比较
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 2. 尾尾比较
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // 3. 头尾比较
      patchVnode(oldStartVnode, newEndVnode)
      // 将老节点移动到尾部
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // 4. 尾头比较
      patchVnode(oldEndVnode, newStartVnode)
      // 将老节点移动到头部
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 5. 以上都未命中，通过 key 在老节点中找到新开始节点
      let idxInOld = findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      if (idxInOld >= 0) {
        // 找到，移动到头部
        const vnodeToMove = oldCh[idxInOld]
        patchVnode(vnodeToMove, newStartVnode)
        oldCh[idxInOld] = undefined
        parentElm.insertBefore(vnodeToMove.elm, oldStartVnode.elm)
      } else {
        // 没找到，创建新节点
        parentElm.insertBefore(createElm(newStartVnode), oldStartVnode.elm)
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }

  // 处理剩余节点
  if (oldStartIdx > oldEndIdx) {
    // 老节点先遍历完，说明新节点有剩余，需要添加
    addVnodes(parentElm, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx > newEndIdx) {
    // 新节点先遍历完，说明老节点有剩余，需要删除
    removeVnodes(oldCh, oldStartIdx, oldEndIdx)
  }
}

```
## 生命周期
beforeCreate  创建vue实例、初始化声明周期、初始化事件中心
created   初始数据观测 可以使用Data、props、computed、methods。初始化inject、provide，完成数据响应式处理
beforeMount   挂载之前 可以数据操作，生成了渲染函数创建vNode，但没有挂载没有dom
mounted   挂载，有真实dom
beforeUpdate   更新之前 可数据已经更新，dom还没有更新
updated   更新，数据和DOm已经更新
beforeDestroy   销毁之前
destroyed   销毁