const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'


class MyPromise{
    constructor(exector){

        this.status = PENDING
        this.value = null
        this.reason = null
        this.fullfilledHandlers = []
        this.rejectedHandlers = []

        function resolve(value){
            this.status = FULLFILLED
            this.value = value
            queueMicrotask(()=>{
                this.fullfilledHandlers.forEach(fn=>fn(this.value))
            })
            
        }
        function reject(reason){
            this.status = REJECTED
            this.reason = reason
            queueMicrotask(()=>{
                this.rejectedHandlers.forEach(fn=>fn(this.reason))
            })
        }
        try{
            exector(resolve, reject)
        }catch(e){
            reject(e)
        }
    }

    then(fullfilledHandler, rejectedHandler){
        return new MyPromise((resolve, reject)=>{
            if(this.status === FULLFILLED){
                try{
                    const result = fullfilledHandler(this.value)
                    resolve(result)
                }catch(e){
                    reject(e)
                }
            }
            if(this.status === REJECTED){
                
            }
            if(this.status === PENDING){
                this.fullfilledHandlers.push(()=>{
                    try{
                        const res = fullfilledHandler(this.value)
                        resolve(res)
                    }catch(e){
                        reject(e)
                    }
                })
                this.rejectedHandlers.push(()=>{
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
    catch(catchHandler){
        return this.then(null , catchHandler)
    }
    finally(finallyHandler){
        return this.then(finallyHandler, finallyHandler)
    }
    static resolve(value){
        return new MyPromise(()=>{
            this.resolve(value)
        })
    }
    static reject(reason){
        return new MyPromise((_, reject)=>{
            reject(reason)
        })
    }
    static all(promiseArray){
        return new MyPromise((resolve, reject)=>{
            const result = []
            const count = 0
            for(let i=0; i<promiseArray.length; i++){
                promiseArray[i].then((value)=>{
                    result[i] = value
                    count++
                    if(count === promiseArray.length){
                        resolve(result)
                    }
                }, err=>{
                    reject(err)
                })
            }
        })
    }
}
const promise  = new MyPromise((resolve, reject)=>{
    resolve('成功')
    // reject('失败')    
}).then(value=>{
    console.log(value)
    return '成功'
}, reason=>{
    console.log(reason)
    return '失败'
})
.catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})