### 

### new Array().fill()
fill方法用于填充数组，但fill方法是浅拷贝，如果fill中的元素是对象，那么所有元素都会指向同一个对象
例如：
```js
const arr = new Array(3).fill({})
arr[0].a = 1
console.log(arr)
// [{a: 1}, {a: 1}, {a: 1}]
```
