// 单例模式

// ts 方式
class Singleton{
    #text:number
    private constructor(){
        this.#text = 1
    }
    private static instance:Singleton
    static getInstance(){
    if(!Singleton.instance){
        Singleton.instance = new Singleton()
    }
        return Singleton.instance
    }   
}


class JSSingleton{
    static #instance
    #text
    constructor(){
        if(JSSingleton.#instance){
            return JSSingleton.#instance
        }
        this.#text = 1
        JSSingleton.#instance = this
    }
    static getInstance(){
        if(!JSSingleton.#instance){
            JSSingleton.#instance = new JSSingleton()
        }
        return JSSingleton.#instance
    }
}
const instance0 = new Singleton() // ts private阻止直接new
// 获取实例
const instance = Singleton.getInstance()



const instance1 = new JSSingleton() // js private阻止直接new
// 获取实例
const instance2 = JSSingleton.getInstance()
