// 过滤器模式
class Filter{
    criteria:any
    constructor(criteria:any){
        this.criteria = criteria
    }
    meetCriteria(elements:any[]){
        return elements.filter(el=>this.criteria(el))   
    }
}

class LessThan3Filter extends Filter{
    constructor(){
        super((el:any)=>el<=3)
    }
}

const elements:any[]=[1,2,3,4]
const lessThan3Filter = new LessThan3Filter()
console.log(lessThan3Filter.meetCriteria(elements))