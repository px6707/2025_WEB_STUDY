// 发布订阅模式
// 发布者和订阅者解耦的设计模式

class EventEmitter{
    eventMap:Record<string, ((data:any)=>void)[]> = {}
    public addEventListener(name:string,fn:(data:any)=>void){
        (this.eventMap[name]||(this.eventMap[name] = [])).push(fn)
    }
    public removeEventListener(name:string,fn:(data:any)=>void){
        this.eventMap[name] = (this.eventMap[name]||(this.eventMap[name] = [])).filter(item => item !== fn)
    }
    emit(name:string, data:any){
        for (let cb of this.eventMap[name]){
            cb(data)
        }
    }
}

const emitter = new EventEmitter()

emitter.addEventListener('click', (data) => {
    console.log(data)
})
emitter.addEventListener('click', (data) => {
    console.log(data)
})

function blur(data){
    console.log(data)
}
emitter.addEventListener('blur', blur)

emitter.removeEventListener('click', blur)
emitter.emit('click', 'hello')