// 命令模式

class Command{
    receiver:Receiver
    args:any
    type:string
    isExecuted:boolean = false
    constructor(receiver:Receiver,type:string, args:any){
        this.receiver = receiver
        this.args = args
        this.isExecuted = false
        this.type = type
    }
    execute(){
        if(!this.isExecuted){
            this.receiver.execute(this.args,this.type)
            this.isExecuted = true
        }
    }

}

class Receiver{
    value:number = 0
    constructor(){
        this.value = 0
    }
    execute(arg:number,typpe:string){
        switch(typpe){
         case 'add':
            this.value+=arg
            break;
         case 'sub':
            this.value-=arg
            break;
         default:
            throw new Error('unknown type')
        }
    }

}

const receiver = new Receiver()
const command = new Command(receiver,'add',1)