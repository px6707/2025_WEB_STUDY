// 职责链

function mid1(next){
    console.log('start mid1')
    next()
    console.log('end mid1')
}

function mid2(next){
    console.log('start mid2')
    next()
    console.log('end mid2')
}

function mid3(next){
    console.log('start mid3')
    next()
    console.log('end mid3')
}

class App{
    midArr = []
    constructor(){
        
    }
    use(fn){
        this.midArr.push(fn)
    }
    execute(){
        const reducer=this.midArr.reduce((fn,next)=>{
            return (n)=>fn(()=>next(n))
        }, (next)=>{if(next)next()})
        reducer(()=>{})
    }
}

const app = new App()
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.execute()