## 树
即有向无环图

### 二叉树
每个节点最多有两个子节点

### 广度有限搜索
英文BFS

```js
const root = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 3,
                    children: []
                },
                {
                    val: 4,
                    children: []
                },
                {
                    val: 5,
                    children: [
                        {
                            val: 6,
                            children: []
                        },
                        {
                            val: 7,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            val: 8,
            children: [
                {
                    val: 9,
                    children: [],
                },
                {
                    val: 10,
                }
            ]
        }
    ]
}
```
```js
function BFSFun(root){
    const queue = [root]
    while(queue.length){
        const item = queue.shift()
        console.log(item)
        if(item.children?.length){
            queue.push(...item.children)
        }
        
    } 
}


function BFSFunLevel(root){
    const queue = [root]
    let level = 0
    while(queue.length){
        const size = queue.length
        console.log(`level ${level}`)
        for(let i = 0; i<size; i++){
            const item = queue.shift()
            console.log(item)
            if(item.children?.length){
                queue.push(...item.children)
            }
        }
        level++
    }
}
```

 ### 深度优先搜索
英文DFS
分为前序遍历（DLR）、中序遍历（LDR）、后续遍历（LRD）
先访问根节点就是前序遍历，先访问左再访问根节点就是中序遍历，先访问左再访问右最后访问根节点就是后序遍历
```js
// 前序遍历
function DFSFun(root){
    if(!root) return
    console.log(root)
    for(let i=0; i<root.children?.length; i++){
        DFSFun(root.children[i])
    }  
}

// 后序遍历
function DFSFunAfter(root){
    if(!root) return
    for(let i=0; i<root.children?.length; i++){
        DFSFunAfter(root.children[i])
    }
    console.log(root)
}

// 中序遍历
function inorderTraversal(root) {
    if (!root) return;
    
    const n = root.children ? root.children.length : 0;
    // 遍历前半部分子节点
    for (let i = 0; i < Math.floor(n/2); i++) {
        inorderTraversal(root.children[i]);
    }
    
    // 访问根节点
    console.log(root.val);
    
    // 遍历后半部分子节点
    for (let i = Math.floor(n/2); i < n; i++) {
        inorderTraversal(root.children[i]);
    }
}
// 二叉树中序遍历
function middelOrder(root) {
    if (!root) return;
    middelOrder(root.left);
    console.log(root.val);
    middelOrder(root.right);
}
```


```js
class TreeNode{
    constructor(value, left, right){
        this.val = value
        this.left = left
        this.right = right
    }
}

function buildTree(preOrder, inOrder){
    const preStart = 0;
    const preEnd = preOrder.length - 1

    const inStart = 0;
    const inEnd = inOrder.length - 1
    const obj = {}
    for(let i = 0; i<inOrder.length; i++){
        obj[inOrder[i]] = i
    }
    function build(
        preOrder, preStart, preEnd,
        inOrder, inStart, inEnd
    ){
        if(preStart > preEnd || inStart > inEnd){
            return null
        }
        const rootValue = preOrder[preStart]
        const index = obj[rootValue]

        const left = build(
            preOrder, preStart + 1, preStart+index-inStart,
            inOrder, inStart, index-1
        )
       
        const right = build(
            preOrder, preStart+index-inStart+1, preEnd,
            inOrder, index+1, inEnd
        )
       
        return new TreeNode(rootValue, left, right)
    }
    return build(
        preOrder, preStart, preEnd,
        inOrder, inStart, inEnd
    )
}
```