## API

### fs
1. fs.writeFile
2. fs.writeFileSync
3. fs.readFile
4. fs.readFileSync
5. fs.createReadStream
6. fs.createWriteStream
```js
const ws = require('fs').createWriteStream('./readme.md')
const rs = require('fs').createReadStream('./readme.md')

rs.on('data', (chunk) => {
    // 流式写入
    ws.write(chunk)
})
rs.on('end', () => {
    // 读取结束
})
// 管道写入
rs.pipe(ws)
```
7. fs.rm 可以删除文件和目录（14.4引入）
```js
const fs = require('fs')
// 递归删除dir_a下的所有
fs.rm('./dir_a', { recursive: true }, (err) => {
    if (err) throw err
})
{
    // 递归删除目录及其内容
    recursive: true,
    // 是否忽略不存在的文件、目录
    force: true,
    // 重试次数
    maxRetries:5,
    // 重试延迟时间
    retryDelay:100,
}
``` 
8. fs.rmSync
9. fs.unlink 只能删除文件，没有额外选项
10. fs.appendFile 追加写入
11. fs.appendFileSync
12. fs.rename 修改名称，如果修改了目录，会移动文件
13. fs.renameSync
14. fs.mkdir()
```js
{
    // 是否递归创建目录
    recusive:true,
    // 目录权限
    mode: 0o777
}
```
15. fs.rmdir() 删除目录,已废弃
16. fs.readdir() 读取目录下的文件
17. fs.stat 文件状态，包括了size、birthtime 创建时间、atime 访问时间、mtime 修改时间、ctime 修改文件状态时间，data.isFile() 是否是文件，data.isDirectory() 是否是目录


- 其他
> 文件路径问题：
nodejs中相对路径的参照物是命令行的工作目录，而不是文件所在的目录 
> __dirname 当前文件的所在目录的绝对路径



### path
1. path.resolve() 绝对路径,组合绝对路径，从右向左组合，遇到绝对路径则停止组合，完全组合完成还是相对路径，则会添加上工作目录
```js
假设当前工作目录是 /home/user：
// 例子1：没有绝对路径的情况
path.resolve('a', 'b', 'c')
// 从右到左处理：'c' -> 'b/c' -> 'a/b/c'
// 不是绝对路径，所以加上当前目录
// 最终结果：'/home/user/a/b/c'

// 例子2：中间遇到绝对路径
path.resolve('a', '/b', 'c')
// 从右到左处理：
// 'c' 
// 遇到 '/b'（绝对路径），抛弃之前的，从 '/b/c' 重新开始
// 'a' 被忽略，因为已经得到绝对路径
// 最终结果：'/b/c'

// 例子3：最右边是绝对路径
path.resolve('a', 'b', '/c')
// 从右到左处理：
// 遇到 '/c'（绝对路径），直接使用它
// 'a' 和 'b' 都被忽略，因为已经得到绝对路径
// 最终结果：'/c'
```

2. path.sep 当前系统的路径分隔符
3. path.parse 返回对象，包含路径信息
```js
    // Windows 系统路径
    path.parse('C:\\path\\to\\file.txt');
    /* 输出:
    {
        root: 'C:\\',
        dir: 'C:\\path\\to',
        base: 'file.txt',
        ext: '.txt',
        name: 'file'
    }
*/
```
4. path.basename（） 获取文件名
5. path.diranme() 获取文件的目录
6. path.extname() 获取文件的扩展名


>__filename 当前文件的绝对路径

### http
1. http.createServer((req,res)=>{}) 创建服务器
    - req.on('data', (chunk)->{}) 获取请求体buffer
    - req.on('end', ()->{}) 请求体发送结束
    - const res = url.parse(req.url, true) 解析请求URL,已弃用
    - res.pathname 获取请求路径
    - res.query 获取请求参数
    - const url = new URL(req.url, http://example.com/) 或者解析URL
    - res.setHeader('Content-Type', 'text/html;charset=utf-8') 设置响应头,返回类型和字符集
    - res.end('hello world') 发送响应
2. server.listen(3000,()=>{启动成功}) 监听端口，启动服务器


### process
1. process.memoryUsage() 内存使用情况