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
将列出的依赖包打包到你的模块中
分发私有或修改过的包
确保完全的版本一致性
支持离线安装
防止依赖包从 npm 仓库消失

### optionalDependencies
可选依赖包，这些依赖安装失败，npm 会继续安装其他依赖，不会报错  
包的功能不是必需的
包在某些平台可能无法安装
有替代方案的功能
### files
控制 npm publish 时包含哪些文件
减小包的体积
避免发布不必要的文件（如源码、测试文件等）

### workspace
管理多包（monorepo）项目。
```json
{
  "name": "my-project",
  "workspaces": [
    "packages/*"      // 指定工作区目录
  ]
}
```
统一管理多个相关包
包之间可以相互依赖
共享依赖，避免重复安装
统一的版本控制


### npm与yarn的区别
npm 包扁平化下载，导致包可能得冲突
npm：所有依赖平铺在 node_modules 下
### pnpm
pnpm：使用硬链接和符号链接，每个包都有独立的依赖空间
严格的依赖隔离
避免幽灵依赖
节省磁盘空间
安装速度快


### npx
临时执行 npm 包命令而不需要全局安装