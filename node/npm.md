## npm

### name
包名称
如果要发布一个命令行，如果bin未指定，则命令名称就是报名

### scoped
包名给个空间
```json
{
    "scpoed":"@bable/src"
}
```

### version
版本
版本规则
major minor patch
major - 不兼容的更新,breakchange
minor - 包含新功能
patch - 包含Bug修复

- ^4.x.y 代表可以更新到4.n.m
- ~4.x.y 代表可以更新到4.x.n
- \>=4.x.y 代表大于等于指定版本
- 4.x.y 代表精确版本

npm init 时下载规则

- npm 5.0 之前没有lock.json 完全按照package.json下载
- npm 5.0- 5.1 之间新增了lock.json，它完全按照lock.json下载
- npm 5.1- 5.2.4 当package.json中声明的依赖版本规范有符合更新的版本时，会忽略lock.json，更新符合的包，并修改lock.json   例如：lock.josn vue:"2.3.1" package.json vue:"^2.3.0",如果npm中有一个2.3.3，则lock.json会更新为2.3.3 这种策略丢失了lock文件的本来作用
- npm 5.2.4 之后，如果lock.json和package.json 版本兼容，则按照lock.json按照。如果不兼容则按照package.json按照并更新lock文件。 例如 lock.josn vue:"2.3.1" package.json vue:"^2.3.0"， 由于lock文件的版本和package的版本兼容，所以安装的一直按照lock安装2.3.1，不管npm服务器上是否有新版本。如果修改了package.json 为vue："^3.0.0" ,则安装时，安装3.0.0版本并修改lock文件


### description
描述

### keywords
关键词

### author
作者


### private
私有，npm不会发布

### main
包入口文件

### moudule
对于webpack打包工具，优先使用它

### bin
脚手架字段，如果bin字段是 "bin":"lib/index,js"， 则命令行名称是 name
如果写法是 "bin":{"@scoped/name":"lib/index.js"}, 则命令行名称是@scoped/name
### scripts
脚本字段    
```json
{
    "script": {
        "start": "rollup -c"
    }
}
```
npm run start 和直接 rollup -c 的区别是
如果全局安装了rollup可以运行，但如果只有项目安装了rollup则不行

### dependencies
项目依赖,这些依赖都是线上环境代码的组成部分，狭义的说就是src源代码中要使用的依赖

### devDependencies
开发依赖，开发时使用，src不会使用的 例如eslint、webpack

### peerDependencies
同版本依赖，要求宿主环境要有，但是我不提供。
例如react组件库，不会dependencies安装react，需要peerDependencies react，要求使用者安装react

### bundleDependencies

### optionalDependencies

### file

### workspace