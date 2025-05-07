async function async1(){
    // 执行promise中的同步任务
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2(){
    console.log('async2');
}

// 同步任务开始
console.log('script start');
// 本轮的check
setImmediate(()=>{
    console.log('out immediate')
})
// timer 阶段
setTimeout(function(){
    // 本轮的timer
    console.log('setTimeout0')
    // 进入下一轮的timer
    setTimeout(function(){
        console.log('setTimeout1')
    },0)
    // 不进入下一轮的check，而是插入点当前轮的check
    setImmediate(function(){
        console.log('setImmediate')
    })  
},0)
async1();

// nextTick阶段
process.nextTick(function(){
    // nextTick 优于微任务先执行
    console.log('process.nextTick')
    // 嵌套的nextTick会放在当前nextTick队列的末尾
    process.nextTick(function(){
        console.log('process.nextTick222')
    })
    // 虽然是在nextTick 中注册的setTimeout，也不会进入当前的timer，而是下一轮
    setTimeout(function(){
        console.log('setTimeout in nexttick')
    },0)
    setImmediate(()=>{
        console.log('immediate in nexttick')
    })  
})
// 微任务阶段
new Promise(function(resolve){
    console.log('promise 1')
    resolve()
    console.log('promise 2')
}).then(function(){
    console.log('promise then')
})
// 同步任务结束
console.log('script end');



// script start
// async1 start
// async2
// promise 1
// promise 2
// script end
// process.nextTick
// process.nextTick222
// async1 end
// promise then
// setTimeout0
// out immediate
// setImmediate
// setTimeout in nexttick
// setTimeout1