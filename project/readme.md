 ### 工具
```java
// 命令行工具
npm i commander
// 轮询工具
npm i inquireer
// 颜色工具
npm i chalk
// axios
npm i axios
// git仓库下载
npm download-git-repo
npm i path
npm i fs-extra

// ora 进度条
```

```js

// 脚手架入口

const program = require('commander')

program.command('create <project-name>')
.description('Create a new project')
.option('-f, --force', 'Force remove')
.action((name, options) => {
    console.log(name, options)
})
// 解析参数
program.parse(process.argv)
```

### 处理工程入口

npm init 之后

在package.json的bin 配置项目入口

关联主命令与配置项

npm link 

### JIT just in time
浏览器解析js会进行识别，识别为字节码，某些热点代码会进行优化并且翻译为机器码。
浏览器在执行js代码时，会进行字节码翻译成机器码，然后执行。
字节码占用空间少，但要有一步转译为机器码的过程。
机器码执行速度快，但占用空间大。