## stream
流，是对输入输出设备的抽象


### 四种流
- readable
- writable
- Duplex 可读可写（双工流）
- transform 读写过程中可以修改数据（转换流）


### eventEmitter
```js
function EventEmitter() {
    this.events = {}
}

EventEmitter.prototype.emit = function (type, ...args) {
    if(this.events[type]){
        this.events[type].forEach(listener => {
            listener(...args)
        })        
    }
}
EventEmitter.prototype.on = function (type, listener) {
    const eventList = this.events[type]||(this.events[type]=[])
    eventList.push(listener)
}
EventEmitter.prototype.once = function (type, listener) {
    const once = function(...args){
        listener(...args)
        this.off(type, once)
    }
    once.listener = listener
    this.on(type, once)
}
EventEmitter.prototype.off = function (type, listener) {
    this.events[type] = this.events[type]?.filter(l => l !== listener&&l.listener !== listener)
}

const emit = new EventEmitter()
emit.on('test', () => {
    console.log('test')
})
emit.emit('test')
```