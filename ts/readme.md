## 什么是 ts
js 的超集 添加了静态类型和基于类的面向对象编程
解决大型复杂项目，架构以及代码维护复杂的问题
校本化语言，面向简单页面场景

ts具有自主检测能力，可以在编译时进行语法检测
js在运行时报错


js是弱类型，无静态类型选项
ts 支持类型检车，可以在编译时进行语法提示
强弱类型区分，应该以是否存在隐式转换，ts还是存在隐式转换，严格意义上ts还是弱类型

运行环境上
js可以直接在浏览器运行
ts依赖于便于打包后，才能在浏览器运行

## ts原理
1. 源码输入
2. 词法分析，对每一个单词进行标记 scanner 流
3. 语法分析 parser 生成AST抽象语法树
4. 绑定器 引用的映射 创建一个从AST到符号的引用链接
5. 校验器 静态类型检查
6. 发射器 emit 分发转译为js代码

## Reflect defineMetaData


## ts基础语法

* boolean string number array null undefined
* tuple
[number, string]
* 枚举
```typescript
// 数字枚举
enum Color {
    Red,
    Green,
    Blue
}

const c: Color = Color.Green
console.log(c) // 1
// 规定起始值的数字枚举
enum Color {
    Red = 2,
    Green,
    Blue
}

const c: Color = Color.Green
console.log(c) // 3
// 字符串枚举
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

const c: Color = Color.Green
console.log(c) // green
// 混合枚举  未赋值的从0开始赋值
enum Color {
    Red = 'red',
    Green,
    Blue = 'blue',
    Yellow,
    Black=10,
    White
}

const c: Color = Color.Green
console.log(c) // 1
const c2: Color = Color.Yellow
console.log(c2) // 3
const c3: Color = Color.white
console.log(c3) // 11
```

* any|unknown|void|never
```typescript
// any 绕过所有类型检查
let a: any = 1
a = '1'

// unknown 绕过赋值检查，他可以是任何类型，但不能赋值给其他类型
let b: unknown = 1
b = '1'
let cd:number = b // 报错

// void 表示没有返回值的函数
function fn(): void {
    return
}

// never 表示永远不会返回的函数
function fn(): never {
    throw new Error('报错')
}

```


* object | Object |{}
```typescript
// object 表示非原始类型的对象
const obj: object = {
    name: 'zhangsan',
    age: 18
}

// Object 含有Object上的一些方法，例如toString
const obj: Object = {
    name: 'zhangsan',
    age: 18
}

// {} 表示空对象，没有任何属性
const obj: {} = {
}

```

## 接口 interface
```typescript
interface User {
    name: string,
    age: number
}

const user: User = {
    name: 'zhangsan',
    age: 18     
}
```

## type和interface的区别
相同点：
    1，都可以用来描述对象
    2， 都可以拓展
不同点：
    1. interface 使用 extends 关键字继承父接口
    type 使用 & 关键字合并类型
    2. type可以描述原始类型，例如type A = string
    interface 不能描述原始类型
    3. type可以描述联合类型，例如type A = string | number
    interface 不能描述联合类型
    4. interface可以被多次定义，多次定义会合并
    type 不能被多次定义

类型联合冲突
```typescript
interface A {
    name: string
    age: number
}
interface B {
    name: number
    address: string
}

type AB = A & B 
// 由于 A 和 B 中的 name 属性类型不同（string vs number），类型 AB 中的 name 属性实际上变成了 never 类型，因为没有任何值可以同时满足 string 和 number 类型。
```

## 断言
as 断言
```typescript
const a: unknown = 1
const b: number = a as number
```
<> 断言
```typescript
const a: unknown = 1
const b: number = <number>a
```
! 断言
```typescript
const a: unknown = 1
const b: number = a! as number
```
!! 断言
```typescript
const a: unknown = 1
const b: number = a!! as number
```

## 类型守卫
```typescript
const a: unknown = 1
if (typeof a === 'number') {
    const b: number = a
}
```


## 泛型
```typescript
function fn<T>(a: T): T {
    return a
}
fn(1) // 1
fn('1') // '1'
fn({ name: 'zhangsan', age: 18 }) // { name: 'zhangsan', age: 18 }
```

## 装饰器
## 装饰器
要使用装饰器，需要在 tsconfig.json 中启用 experimentalDecorators 选项：
```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
### 执行顺序
装饰器工厂函数从上到下依次执行
用于创建真正的装饰器函数
装饰器应用
同一个目标的多个装饰器从下到上执行
先执行内部成员的装饰器，最后执行类装饰器

旧版装饰器（Stage 2）
```typescript
// 类装饰器
function classDecorator(constructor: Function) {
    console.log('类装饰器');
}

// 方法装饰器
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('方法装饰器');
}

// 属性装饰器
function propertyDecorator(target: any, propertyKey: string) {
    console.log('属性装饰器');
}

// 参数装饰器
function parameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log('参数装饰器');
}

@classDecorator
class Example {
    @propertyDecorator
    name: string;

    @methodDecorator
    greet(@parameterDecorator param: string) {
        return "Hello, " + param;
    }
}
```

新版装饰器（Stage 3）
```typescript
// 类装饰器
function classDecorator() {
    return function(value: Function, context: ClassDecoratorContext) {
        console.log('类装饰器');
    }
}

// 方法装饰器
function methodDecorator() {
    return function(value: Function, context: DecoratorContext) {
        console.log('方法装饰器');
        return function(...args: any[]) {
            // 在这里可以修改方法的行为
            return value.apply(this, args);
        }
    }
}

// 属性装饰器
function propertyDecorator() {
    return function(value: undefined, context: DecoratorContext) {
        console.log('属性装饰器');
    }
}

// 访问器装饰器
function accessorDecorator() {
    return function(value: undefined, context: DecoratorContext) {
        console.log('访问器装饰器');
    }
}

@classDecorator()
class NewExample {
    @propertyDecorator()
    name: string;

    @accessorDecorator()
    accessor age: number;

    @methodDecorator()
    greet(param: string) {
        return "Hello, " + param;
    }
}
```

## 辅助类型
Partial<T> Required<T> Readonly<T> Pick<T, K> Omit<T, K> Exclude<T, U> Extract<T, U> ReturnType<T> Parameters<T> ConstructorParameters<T> InstanceType<T> Record<K, T> NonNullable<T> Nullable<T>
```typescript
type Partial<T> = {
    [P in keyof T]?: T[P]
}
type Required<T> = {
    [P in keyof T]-?: T[P]
}
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type Omit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}
type Exclude<T, U> = T extends U ? never : T
type Extract<T, U> = T extends U ? T : never
type ReturnType<T> = T extends (...args: any) => infer R ? R : any
type Parameters<T> = T extends (...args: infer P) => any ? P : any
type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : any
type InstanceType<T> = T extends new (...args: any) => infer R ? R : any
type Record<K extends keyof any, T> = {
    [P in K]: T
}
type NonNullable<T> = T extends null | undefined ? never : T
type Nullable<T> = T | null | undefined


// 例子
Partial - 将所有属性变为可选
interface User { name: string; age: number; }
type PartialUser = Partial<User>;
// 结果: { name?: string; age?: number; }

Required - 将所有属性变为必选
interface User { name?: string; age?: number; }
type RequiredUser = Required<User>;
// 结果: { name: string; age: number; }

Readonly - 将所有属性变为只读
interface User { name: string; }
type ReadonlyUser = Readonly<User>;
// 结果: { readonly name: string; }

Pick<T, K> - 从类型中选择部分属性
interface User { name: string; age: number; address: string; }
type NameOnly = Pick<User, 'name'>;
// 结果: { name: string; }

Omit<T, K> - 从类型中移除部分属性
interface User { name: string; age: number; address: string; }
type NoName = Omit<User, 'name'>;
// 结果: { age: number; address: string; }

Exclude<T, U> - 从类型 T 中排除可以赋值给类型 U 的类型
type T = string | number | boolean;
type StringOnly = Exclude<T, number | boolean>;
// 结果: string

Extract<T, U> - 提取类型 T 中可以赋值给类型 U 的类型
type T = string | number | boolean;
type NumberOnly = Extract<T, number>;
// 结果: number

ReturnType - 获取函数类型的返回值类型
function foo() { return { name: 'foo' }; }
type FooReturn = ReturnType<typeof foo>;
// 结果: { name: string; }

Parameters - 获取函数类型的参数类型元组
function foo(name: string, age: number) { return null; }
type FooParams = Parameters<typeof foo>;
// 结果: [string, number]

Record<K, T> - 创建一个键类型为 K，值类型为 T 的对象类型
type PageInfo = Record<'home' | 'about', { title: string }>;
// 结果: { home: { title: string }; about: { title: string }; }


NonNullable - 从类型中排除 null 和 undefined
type T = string | null | undefined;
type NonNullableT = NonNullable<T>;
// 结果: string

```