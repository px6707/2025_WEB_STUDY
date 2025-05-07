### 求和问题

一个数组中的元素不重复，给出一个和为target，求哪两个元素的和为target，返回这两个元素的索引。
例如[1,2,3] target = 4  返回[0, 2]

```js

// 哈希表映射
function(sums, target) {
    const obj = {}
    for(let i=0; i<sums.length;i++>){
        const curNum = sums[i]
        const diff = target - curNum
        const diffIdx = obj[diff]
        if(diffIdx!=undefined){
            return [diffIdx, i]
        }
        obj[curNum] = i
    }
}
```

时间复杂度O(n),空间复杂度O(n)

