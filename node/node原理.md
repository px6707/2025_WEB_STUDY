## node原理

### 事件循环
宏任务和微任务
宏任务是消息队列中等待被主线程执行的事件，每个宏任务在执行的时候都会创建栈，宏任务结束，栈也会被清空。

同n微tcIO

同步任务——>nextTick——>微任务-> timer -> pending callbacks -> idle,prepare -> poll -> check -> close back

nodejs中事件6个阶段
1. timer
处理setTime setInterval
2. pending callbacks
处理系统回调如TCP错误、流操作
```javascript
const net = require('net');

const server = net.createServer((socket) => {
    socket.on('error', (err) => {
        // TCP错误会在pending callbacks阶段处理
        console.log('Socket error:', err);
    });
});

server.on('error', (err) => {
    // 服务器错误也在pending callbacks阶段处理
    console.log('Server error:', err);
});
```
3. idel,prepare
nodejs 内部使用，不涉及开发代码
4. poll
最重要的处理阶段，处理IO回调。poll阶段会检查是否有check回调，如果有则结束poll执行check，没有则等待IO操作，执行完成的IO回调
```js
fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    console.log('文件内容:', data);
});
```
5. check
执行setImmediate回调，在poll阶段完成后立即执行。这里有个特殊的地方，在当前时间循环中都可以立即向当前check阶段插入任务
```js
setImmediate(() => {
    console.log('setImmediate');
});
```
6. close callbacks
处理服务器关闭事件
```js
server.close(() => {
    console.log('Server closed');
});
```


### generator

<!-- promise实现同时下载3个文件 -->
```javascript
function readFile(url){
    return new Promise((resolve) => {
        console.log(`开始下载: ${url}`);
        // 模拟随机下载时间
        setTimeout(() => {
            console.log(`下载完成: ${url}`);
            resolve(`Downloaded ${url}`);
        }, Math.random() * 2000 + 1000); // 1-3秒随机时间
    });
}

const files = []
function format(file){
    return {file, status:'pending'}
}
function getFiles(files, limit){
    let stack = []
    function run(){
        const pendingLength = stack.filter(item=>item.status==='pending').length
        if(pendingLength<limit&&stack.length<files.length){
            const canAddCount = Math.min(
                limit - pendingLength, // 还可以添加的数量
                files.length - stack.length // 剩余未添加的文件数量
            );
            const newFiles = files.slice(stack.length, stack.length+canAddCount).map(format)
            stack.push(...newFiles) 
            for(let fileObj of newFiles){
                readFile(fileObj.file).then(()=>{
                    fileObj.status = 'done'
                    if(stack.length===files.length&&stack.every(item=>item.status==='done')){
                        console.log('所有文件下载完成！');
                        return;
                    }
                    run()
                })
            } 
        }
    }
  run()
}

getFiles([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 3)

```


### v8内存管理
v8中限制64位机器内存限制1.4G，32位机0.7G。v8可以使用文件配置，但只能配置为2倍，不建议修改。


#### 新生代
存放时间短
使用scavenge算法，把新生代空间分成两部分，from对象区 to空闲区
1. 对象区域放新加入的对象
2. 对象区域快满的时候，执行垃圾清理（先标记）
3. 把活动的对象复制到空闲区域，并且排序
4. 复制完之后，把对象区域和空闲区域进行翻转
5. 清理to区域
5. 重复执行上面的步骤
6. 经过2次垃圾回收之后还存在的对象，移动到老生代中


#### 老生代
长期存在的，容量大，对象活动时间长
使用标记清除算法
从根元素开始，找到活动对象，找不到就是垃圾
直接清理会垃圾，会产生碎片。所以把活动对象向同一端移动，避免碎片产生。