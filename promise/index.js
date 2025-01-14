//  class手写Promise
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.fullfilledHandlers = []
        this.rejectedHandlers = []
        function resolve(value) {
            if(this.status !== PENDING) {
                return
            }
            queueMicrotask(() => {
                if(this.status !== PENDING) {
                    return
                }
                this.status = FULFILLED
                this.value = value
                this.fullfilledHandlers.forEach(fn => fn(this.value))
            })
        }
        function reject(reason) {
            if(this.status !== PENDING) {
                return
            }
            queueMicrotask(() => {
                if(this.status !== PENDING) {
                    return
                }
                this.status = REJECTED
                this.reason = reason
                this.rejectedHandlers.forEach(fn => fn(this.reason))
            })
        }
        executor(resolve, reject)
    }

    then(fullfilledHandler, rejectedHandler) {
        return new MyPromise((resolve, reject) => {
            fullfilledHandler = typeof fullfilledHandler === 'function' ? fullfilledHandler : value => value
            rejectedHandler = typeof rejectedHandler === 'function' ? rejectedHandler : reason => { throw reason }
            if(this.status === FULFILLED) {
                try{
                    const result = fullfilledHandler(this.value) 
                    resolve(result)
                }catch(e){
                    reject(e)   
                }
            }
            if(this.status === REJECTED) {
                try{
                    const result = rejectedHandler(this.reason) 
                    resolve(result)
                }catch(e){
                    reject(e)   
                }
            }
            if(this.status === PENDING) {
                this.fullfilledHandlers.push(() => {
                    try{
                        const result = fullfilledHandler(this.value) 
                        resolve(result)
                    }catch(e){
                        reject(e)   
                    }
                })
                this.rejectedHandlers.push(() => {
                    try{
                        const result = rejectedHandler(this.reason) 
                        resolve(result)
                    }catch(e){
                        reject(e)   
                    }
                })
            }
        })
    }
    catch(rejectedHandler) {
        return this.then(null, rejectedHandler)
    }
    finally(finalHandler) {
        return this.then(finalHandler, finalHandler)
    }

    static resolve(value) {
        return new MyPromise((resolve)=>{
            resolve(value)
        })
    }
    static reject(reason) {
        return new MyPromise((resolve, reject)=>{
            reject(reason)
        })
    }
    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const result = []
            let count = 0
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    result[i] = res
                    count++
                    if(count === promises.length) {
                        resolve(result)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }
    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
    static allSettled(promises) {
        return new MyPromise((resolve, reject) => {
            const result = []
            let count = 0
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    result[i] = { status: 'fulfilled', value: res }
                    count++
                    if(count === promises.length) {
                        resolve(result)
                    }
                }, err => {
                    result[i] = { status: 'rejected', reason: err }
                    count++
                    if(count === promises.length) {
                        resolve(result)
                    }
                })
            }
        })
    }
    static any(promises) {
        return new MyPromise((resolve, reject) => {
            const result = []
            let count = 0
            for(let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    resolve(res)
                }, err => {
                    result[i] = { status: 'rejected', reason: err }
                    count++
                    if(count === promises.length) {
                        reject(result)
                    }
                })
            }
        })
    }
}

new MyPromise((resolve, reject) => {

}).then(()=>{},()=>{}).catch(()=>{})
.finally(()=>{})
