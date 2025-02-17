## a 锚元素

### 属性
- download 视为下载资源，值为文件名
- href url
    - tel: 链接到电话
    - mailto: 链接到邮件
    - #xxx 页面锚点
    - /xxx 相对url
    - https://xxx.com 绝对url
- target 
    - _blank 新窗口
    - _self 当前窗口
    - _parent 父窗口
    - _top 顶层窗口
- rel 指定当前文档与链接文档的关系
    - nofollow 告诉搜索引擎不要跟踪此链接
    - noopener 防止新页面通过window.opener API访问原页面，在target:_blank时添加，增强安全性
    - noreferrer 不发送referrer信息，提供额外的隐私保护
    - external 外部链接
- hreflang 指定链接的语言
- type 指定MIME类型 text/html text/plain applicaiton/pdf image/jpeg image/png auto/mpeg video/mp4 application/json application/zip 等，帮助浏览器正确处理文件



## abbr
缩写元素
属性
- title 包含该缩写的完整可读描述或扩展描述，会有悬停提示


### address
联系人地址元素
由 <address> 元素内容提供的联系信息应根据上下文采用适当的格式，并可能包含所需的各种类型的联系方式，如实体地址、URL、电子邮件地址、电话号码、社交媒体账号、地理位置等。


### area
在图片上定义一个热点区域，可以关联一个超链接。<area>元素仅在<map>元素内部使用。

属性：
- alt
- coords 画出区域，然后结合其他属性定义这个区域的点击链接。对于矩形或长方形，这个 coords 值为两个 X,Y 对：左上、右下。对于圆形，这个值是 x,y,r，这里的 x,y 是一对确定圆的中心的坐标而 r 则表示的是半径值。对于多边和多边形，这个值是用 x,y 对表示的多边形的每一个点：x1,y1,x2,y2,x3,y3 
- download
- href
- hreflang
- media 指明链接资源的媒体类型，例：print and screen
- rel
- shape 相关联的热点的形状。poly rect circle 等
- target
- type

···html
<!-- 定义一个图像映射 -->
<map name="infographic">
<!-- 分成多个区域，每个区域有不同的链接 -->
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    target="_blank"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
</map>
<!-- 指定使用的map -->
<img usemap="#infographic" src="/media/examples/mdn-info2.png" alt="MDN infographic" />
···


### article
独立的内容项目


### aside
侧边栏


### audio
音频资源

属性：
- autoplay 自动播放，不会等待音频下载完成，大多数现代浏览器会阻止自动播放
- controls 是否显示播放控制面板
- crossorigin 是否通过CORS加载
    - anonymous 不携带安全认证，如果资源服务器没有设置跨域则被限制使用
    - use-credentials 发送跨域请求时携带认证信息，如果服务器不给予信任，则被限制使用
- currentTime 只读属性，当前的播放位置s
- disableRemotePlayback 禁止远程播放如airPlay
- duration 只读属性，音频总时长s
- loop 是否循环播放
- muted 是否静音
- preload 预加载
    - none 不缓存
    - metadata 只加载元数据
    - auto 预加载整个文件
- src

事件：
- loadstart 开始加载
- progress 加载过程中周期性触发
- audioprocess 当音频播放进度发生变化时触发
- canplay 可以播放，但可能不流畅
- canplaythrough 可以流畅播放到结束，无需额外缓冲
- complete 离线音频上下文渲染终止时，专门处理离线场景
- durationchange duration属性发生变化，开始时浏览器不知道长度时为NaN，加载过程中变成实际值，切换源之后也会变化
- emptied 媒体置空，当一个媒体已经加载的情况下调用load()方法，就会触发
- ended 播放结束
- loadeddata 媒体的第一帧加载完成
- loadedmetadata 元数据加载完成
- pause 暂停
- play 开始播放
- playing 正在播放
- ratechange 音频播放速率发生变化
- seeked 跳转完成
- seeking 正在跳转
- stalled 无法获取数据
- suspend 数据加载暂停
- timeupdate 播放位置更新，250ms一次
- volumechange 音量变化
- waiting 缓冲中