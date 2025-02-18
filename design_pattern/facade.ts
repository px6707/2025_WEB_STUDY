// 外观模式

const moduleA = {
    method1(){
        console.log('method1 form module A')
    },
    method2(){
        console.log('method2 form module A')
    },
    method3(){
        console.log('method3 form module A')
    }
}
 

const moduleB = {
    method1(){
        console.log('method1 form module B')
    },
    method2(){
        console.log('method2 form module B')
    },
    method3(){
        console.log('method3 form module B')
    }
}

const facade = {
    method1(){
        moduleA.method1()
    },
    method2(){
        moduleA.method2()
    },
    method3(){
        moduleA.method3()
    },
    method4(){
        moduleB.method1()
    },
    method5(){
        moduleB.method2()
    },
    method6(){
        moduleB.method3()
    }
}
facade.method1()