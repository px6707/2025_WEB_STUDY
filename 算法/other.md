## 其他

### 接雨水
```js
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

var trap = function(height) {
    const len = height.length
    const leftMaxArr = new Array(len)
    leftMaxArr[0] = 0
    for(let i =1;i<len;i++){
        leftMaxArr[i] = Math.max(leftMaxArr[i-1], height[i-1])
    }

    const rightMaxArr = new Array(len)
    rightMaxArr[len-1] = 0
    for(let i =len-2;i>0;i--){
        rightMaxArr[i] = Math.max(rightMaxArr[i+1], height[i+1])
    }
    let res = 0
    for(let i =1;i<len-1;i++){
        const leftMax = leftMaxArr[i];
        const rightMax = rightMaxArr[i];

        res += Math.max(Math.min(leftMax, rightMax)- height[i], 0)
    }

    return res
}
```

### 爬楼梯
```js
// 爬n个楼梯，每次可以爬1个或者2个，有多少种爬法

var climbStairs = function(n) {
    const dp = new Array(n)
    dp[0] = 1
    dp[1] = 1
    for(let i =2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
```


###  N皇后问题
```js
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

let res = []
var solveNQueens = function(n) {
    const map = Array.from({length:n}, ()=> new Array(n).fill('.'))
    res = []
    help(map, 0)
    return res
};

function help(map, row){
    if(row === map.length){
        res.push(map.map(item=>item.join('')))
        return
    }
    for(let col=0; col<map.length; col++){
        if(valid(map, row, col)){
            map[row][col] = 'Q'
            help(map, row+1);
            map[row][col] = '.'
        }
    }
}

function valid(map, row, col){
    const n = map.length
    for(let i =0; i<n; i++){
        if(map[i][col] === 'Q'){
            return false
        }
    }

    let min = Math.min(row, col)
    for(let i = 1; i<=min; i++){
        if(map[row-i][col-i] === 'Q'){
            return false
        }
    }
    min = Math.min(row, n-col-1)
    for(let i = 1; i<=min; i++){
        if(map[row-i][col+i] === 'Q'){
            return false
        }
    }

    return true
}
```

### 煎饼排序
```js
// 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。

// 一次煎饼翻转的执行过程如下：

// 选择一个整数 k ，1 <= k <= arr.length
// 反转子数组 arr[0...k-1]（下标从 0 开始）
// 例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。

// 以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。

找到最大素组 n 的下标k， K进行翻转，翻转过后，最大的数字就到最前面
然后对整个数组 n 进行翻转，翻转过后，最大的数字就到最后面

找到第二大数字 n-1 的下标k， K进行翻转，翻转过后，第二大数字就到最前面
然后对数组 前n-1个元素 进行翻转，翻转过后，第二大数字就到倒数第二

重复这个过程，直到数组有序

function pancakeSort(arr){
    const res = []
    const n = arr.length
    for(let i = n; i>0; i--){
        const index = arr.indexOf(i)
        reverse(arr, index)
        res.push(index+1)
        reverse(arr, i-1)
        res.push(i)
    }
    return res
}
function reverse(arr, k){
    for(let i=0;i<k/2; i++){
        [arr[i], arr[k-i]] = [arr[k-i], arr[i]]
    }
}
 
```


### 深拷贝
```js
function deepCopy(obj, map=new Map()){
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }
    if(obj instanceof Date){
        return new Date(obj)
    }
    if(map.get(obj)){
        return map.get(obj)
    }
    const newCopy = new obj.constructor()
    map.set(obj, newCopy)
    for(const key in obj){
        newCopy[key] = deepCopy(obj[key], map)
    }
    return newCopy
}
```
