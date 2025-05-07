Promise 三种状态，pending、fullfiled、rejected，状态一旦变化就不会再变化
.then，处理成功的情况
.catch，处理失败的情况
.finally，无论成功还是失败都会执行
静态方法
Promise.resolve，返回一个成功的promise
Promise.reject，返回一个失败的promise
Promise.all，返回一个promise，所有的promise都成功才成功，有一个失败就失败
Promise.race，返回最先完成的 promise 结果,最先完成包括成功或者失败
Promise.allSettled,可以处理混合的成功和失败情况，等待所有 Promise 完成，返回一个数组，包含所有 Promise 的结果
Promise.any，返回第一个成功的 Promise，只有所有 Promise 都失败时才会失败

