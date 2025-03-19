### gulp
流式工程化
配置文件时gulpfile.js

### gulp
gulp 流式工程化

1. 读取文件
```js
// gulp.src(glob,[options])
// gulp 读取的并非原本的文件流，而是虚拟对象流，减少对实体文件的IO

// 1. globs 文件匹配模式，可以使用数组匹配多种文件
gulp.src(['./**/*.js'])

2. options 配置项
// options.buffer - boolean 默认true，是否返回buffer，开启时文件都存储到内存中，适合处理小文件。不开启时使用的是流模式，不会一次性加载整个文件到内存中，适合处理大文件，内存占用低。
// options.read - boolean 是否读取文件的实际内容，在只需要复制、移动、重命名的场景中，就不需要读取文件内容
// options.base - string 基础路径，用于计算文件路径
gulp.src('*.js', {base:'src'}) // 读取的就是src下的js文件

```

2. 流
pipe 管道，文件通过pipi的方法导入到gulp的插件中
有序地，有方向的，都是在上一次执行的基础上再次处理
```js
gulp.src('src/**/*.js')
    .pipe(gulp.minify()) // 压缩
    .pipe(gulp.dest('dist')) // 输出
```
 
 3. 产出
 ```js
//  gulp.dest(path, options) // 输出

// path 产出路径
options.mode 设置文件夹的权限
 ```

4. 监听
```js
gulp.task('build', () => {
  gulp.src('src/**/*.js')
    .pipe(gulp.minify())
    .pipe(gulp.dest('dist'))
})
// 按照顺序执行任务
gulp.watch('src/**/*.js', gulp.series('clean','build'))
// 同时执行多个任务
gulp.watch('src/**/*.js', gulp.parallel('build'))

// 组合多个任务
gulp.task('compose', ()=>{
    gulp.parallel('task1', 'task2', 'task3')
})
// 灵活组合多个任务
gulp.task('build', gulp.series(
    'clean',  // 1. 首先清理目录
    gulp.parallel(
        'styles',   // 2. 然后同时处理CSS
        'scripts',  //    同时处理JS
        'images'    //    同时处理图片
    ),
    'rev'     // 3. 最后生成版本号
));
// 异步操作
gulp.task('async', (done)=>{
    setTimeout(()=>{
        done()
    },1000)
})
```
