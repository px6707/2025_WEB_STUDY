### ul
无需列表

### u
未阐明的注释（下划线）元素

### var
表示变量的元素
表示数学表达式或编程上下文中的变量名称。它通常使用当前字体的斜体版本来显示

### video
播放器元素

- autoplay 尽快自动开始播放，不会停下来等待数据全部加载完成
- controls 显示播放控制器
- controlslist 显示哪些面板
    - nodownload
    - nofullscreen
    - noremoteplayback
- crossorigin 是否通过CORS加载视频
    - anonymous 不携带安全认证，如果资源服务器没有设置跨域则被限制使用
    - use-credentials 发送跨域请求时携带认证信息，如果服务器不给予信任，则被限制使用
- disablepictureinpicture 禁止画中画
- disableremoteplackback 禁止远程播放，用户将网页上的媒体内容投射到其他设备上播放，例如投射到电视、airplay等设备
- loop bool是否循环播放
- muted bool是否静音
- playsinline bool 在 iOS 设备（iPhone）上，默认情况下视频会自动全屏播放，没有 playsinline 属性时，视频必须在全屏模式下播放。为true后视频可以直接在网页内播放，不会强制全屏
- poster 海报帧图片url，视频处于下载中的状态时，显示。未指定，则在视频第一帧可用之前不会显示任何内容，然后将视频第一帧作为海报帧显示
- replaod 
    - none 不预先加载视频
    - metadata 仅预先获取元数据
    - auto 可以向下载整个视频
- src 视频URL

可以在嵌套的 <source> 元素中提供多个媒体源，浏览器会使用它能识别的第一个源。


### wbr
换行机会元素

表示一个单词换行机会——文本中的一个位置，浏览器可以选择在此处换行，即使其换行规则不会在此处换行。

### xmp
已弃用