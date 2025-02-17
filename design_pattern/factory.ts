// 工厂模式
class Button{
    type:'primary' | 'secondary' | 'link'
    text:string
    constructor(text:string){
        this.text = text
    }
}

class PrimaryButton extends Button{
    type:'primary' = 'primary'
    activeStyle:string
    constructor(text:string, activeStyle:string){
        super(text)
        this.activeStyle = activeStyle
    }
}
class SecondaryButton extends Button{
    type:'secondary' = 'secondary'
    activeStyle:string
    constructor(text:string, activeStyle:string){
        super(text)
        this.activeStyle = activeStyle
    }
}

class LinkButton extends Button{
    type:'link' = 'link'
    activeStyle:string
    constructor(text:string, activeStyle:string){
        super(text)
        this.activeStyle = activeStyle
    }
}


function buttonFactory(type:'primary' | 'secondary' | 'link', text:string, activeStyle:string){
    switch(type){
        case 'primary':
            return new PrimaryButton(text, activeStyle)
        case 'secondary':
            return new SecondaryButton(text, activeStyle)
        case 'link':
            return new LinkButton(text, activeStyle)
        default:
            return new Button(text)
    }

}