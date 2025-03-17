## react

行为驱动型，调用函数this.setState、dispatch,enqueueSetState,shceduleUpdateOnFiber 



### othern
#### npm run eject
执行后会将所有配置文件暴露出来，这是一个不可逆的操作，一旦执行就无法回退。
- 暴露项目的所有配置文件（webpack、Babel、ESLint等）
- 将这些配置从 react-scripts 中分离出来
- 将依赖添加到项目的 package.json 中
- 创建配置文件到项目的 config/ 目录
- 生成构建脚本到项目的 scripts/ 目录
1. 何时使用
    - 需要自定义 webpack 配置时
    - 需要添加特殊的 Babel 插件时
    - 需要修改底层构建工具时
    - 需要完全控制项目配置时



### useEffect
回调函数不能使用async await
返回一个函数，用于销毁
执行时机是，依赖变化后，先执行清理函数，再执行useEffect的callback
对于模拟挂载生命周期，其清理函数的执行时机是组件销毁时

在浏览器绘制之后执行，不会阻塞浏览器绘制

### useLayoutEffect
dom更新之后，浏览器绘制之前执行，如果要修改DOM，用useLayoutEffect，否则使用useEffect
因为在绘制之前执行可以防止闪烁
同步执行，会阻塞浏览器绘制


### useInsertionEffect
dom更新之前执行，对于css-in-js的场景下，解决性能问题
因为需要在dom更新之前执行，所以插入js可以避免重排


### useEffect 是如何模拟生命周期的
#### 初始化阶段
constructor
getDerivedStateFromProps 合并state，当有新的props、state的时候执行
UNSAFE_componentWillMount  
Render
componentDidMount

#### 更新阶段
UNSAFE_componentWillReceiveProps 如果已经有了getDerivedStateFromProps,这个生命周期不执行。可以使用this
getDerivedStateFromProps 合并state，当有新的props、state的时候执行
shouldComponentUpdate 返回bool，决定组件是否更新
UNSAFE_componnetWillUpdate
render
getSnapshotBeforeUpdate 获取更新之前的一些信息（比如 preState prePRops）return的值会作为第三个参数传给componentDidUpdate。比如获取之前滚动条位置，在页面更新后维持滚动条位置
componentDidUpdate 不要代用setState，会死循环

#### 销毁阶段
componentWillUnmount

##### 生命周期模拟
```React
useEffect(()=>{
    console.log('componentDidMount')
    <!-- 数据请求 -->
    return ()=>{
        <!-- 销毁事件监听 -->
        console.log('componentWillUnmount')
    }
},[])

useEffect(()=>{
    console.log('componentDidUpdate')
})

useEffect(()=>{
    console.log('componentWillReceiveProps')
},[props])
```


### Ref
拿到元素节点
```React
import React, {createRef, Component} from 'react'
export default class ClassRef extends Component{
    constructor(){
        <!-- 用来拿到DOM节点 -->
        this.eleRef = createRef()
    }
    render(){
        return <div ref={this.eleRef}></div>
    }
}
```


```React
import React, { useRef } from 'react'
export default function FunctionRef(){
    const eleRef = useRef()
    return <div ref={eleRef}></div>   
}
```

#### ref获取子组件的方法
1. 使用forwordRef包裹子组件，配合useImperativeHandle使用,在ref上挂载子组件的方法
```js
import React, { useRef, Component, useImperativeHandle} from 'react'

<!-- 父组件 -->
function Parent(){
    const eleRef = useRef()
    return <Child ref={eleRef}/>
}
export default function FunctionRef(props, ref){
    const [state, setState] = useState()
    useImperativeHandle(ref,()=>{
        setState
    })
    return <div>
    </div>   
}

const Child = forwordRef(FunctionRef)
```
2. 使用props透传，直接挂载到子组件的某个节点上，父组件就能拿到这个节点
```js
function Parent(){
    const eleRef = useRef()
    return <Child ref={eleRef}/>
}
export default function FunctionRef(props, ref){
    return <input ref={ref} />  
}

const Child = forwordRef(FunctionRef)
```


### context
上下文之间传递更多逻辑 
```js
import React, { createContext } from 'react'
export const ThemeContext = createContext()
export default function App(){
    return (
        <ThemeContext.Provider value={{color:'red'}}>
            <Child>
        </ThemeContext.Provider>
    )
}

function Child(){
    
    return (
        <ThemeContext.Consumer>
            {
                value => <div style={{color:value.color}}></div>
            }
        </ThemeContext.Consumer>
    )
} 

function Child2(){
    const context = useContext(ThemeContext)
    return <div style={{color:context.color}}></div>
}
// 仅类组件
class Child3 extends React.Component {
  static contextType = ThemeContext;
  
  render() {
    const { theme } = this.context;
    return <header className={`header-${theme}`} />;
  }
}
```
### useCallback


### useMemo
```js
// 避免每次都重新计算
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### React.memo()
是一个高阶组件（HOC），用于包装组件，防止不必要的重渲染。
```js
const MemoizedComponent = React.memo(Component, [compareFunction]);
```


### useId
useId 主要用于生成稳定的、唯一的标识符，特别适合在需要关联 HTML 元素的场景中使用，比如表单标签和输入框的关联、ARIA 属性的关联等。它解决了服务端渲染中的 ID 不匹配问题，是一个非常实用的 Hook。


### useTransition
useTransition 是 React 18 引入的一个强大的 Hook，用于标记非紧急更新，让应用在大量状态更新时保持响应性。让我详细介绍：
```js
function App() {
  const [isPending, startTransition] = useTransition();
  // isPending: 布尔值，表示过渡是否在进行中
// startTransition: 用于包装非紧急更新的函数
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(e) {
    // 立即更新输入框
    setSearchQuery(e.target.value);
    
    // 将耗时的搜索操作标记为非紧急更新
    startTransition(() => {
      // 大量数据的过滤或计算
      setCount(c => expensiveCalculation(c, e.target.value));
    });
  }

  return (
    <div>
      <input value={searchQuery} onChange={handleChange} />
      {/* 显示加载状态 */}
      {isPending ? <Spinner /> : <SearchResults count={count} />}
    </div>
  );
}
```
### useDeferredValue
另一个用于性能优化的 Hook，它允许我们延迟更新某些不那么重要的部分。
参数多次变化，只有最好一次变化能够应用的子组件上，当参数频繁变化时，useDeferredValue 会跳过中间状态，只应用最新的值
```js
function SearchResults() {
  const [query, setQuery] = useState('');
  // 创建一个延迟值
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      {/* 立即响应用户输入 */}
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      
      {/* 使用延迟值进行复杂渲染 */}
      <SlowList query={deferredQuery} />
    </div>
  );
}
```
- 使用 useTransition 的场景：
当你能够直接控制状态更新的代码
想要把多个更新标记为非紧急
```js
startTransition(() => {
  setCount(count + 1);
  setFlag(true);
  setList([...list, newItem]);
});
```
- 使用 useDeferredValue 的场景：
当你拿到的是一个值，而不是更新函数
使用第三方库或无法修改源码的组件
```js
// 比如使用第三方的图表库
function Chart({ data }) {
  const deferredData = useDeferredValue(data);
  return <ExpensiveChart data={deferredData} />;
}
```
useTransition 是主动的："这些代码可以慢一点执行"
useDeferredValue 是被动的："给我一个可以延迟的值"



### use
可以在组件内部直接使用 Promise、Context 和其他可订阅的值。
如果use处理了异步，则use必须在Suspense边界下使用，如果use处理的异步结果没有返回，则会渲染suspense的fallback
可以用在条件语句内
```js
function MessageComponent() {
  const message = use(fetchMessage()); // 直接使用 Promise
  return <p>{message}</p>;
}
function Button() {
  const theme = use(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```
不适合用户交互触发的异步操作
不适合需要手动控制的数据刷新


### startTransition
startTransition 是 React 18 提供的一个独立函数，用于标记非紧急的状态更新。让我详细解释：

startTransition vs useTransition
1. startTransition - 独立函数，可以用在条件语句内，没有 pending 状态
2. useTransition - hook，不能用在条件语句内，有pending状态
```js
import { startTransition } from 'react';

function handleClick() {
  // 直接使用，但没有 isPending 状态
  startTransition(() => {
    setCount(count + 1);
  });
}
const [isPending, startTransition] = useTransition();
// 可以通过 isPending 显示加载状态
```


### 并发根，concurrent root
```js
// 1. 引入创建根的方法
import { createRoot } from 'react-dom/client';

// 2. 获取容器元素
const container = document.getElementById('root');

// 3. 创建根
const root = createRoot(container);

// 4. 渲染应用
root.render(<App />);

// 5. 卸载应用（如果需要）
root.unmount();
```
1. 并发渲染支持
可以中断和恢复渲染过程
支持优先级渲染，紧急更新可以打断非紧急更新
```js
const [isPending, startTransition] = useTransition();

// 非紧急更新
startTransition(() => {
  setCount(count + 1);
});

// 紧急更新
setValue(newValue);
```
2. 自动批处理
```js
// 在一个事件处理函数中的多个状态更新会被自动批处理
function handleClick() {
  setCount(c => c + 1);    // 不会立即重渲染
  setFlag(f => !f);        // 不会立即重渲染
  setText('updated');      // 这三个更新会被批处理成一次重渲染
}
```

> 在 React 18 中，即使不使用 createRoot，你也可以使用 startTransition
但是，如果使用旧的 ReactDOM.render，startTransition 将不会启用并发特性
也就是说，代码还是会执行，但不会获得并发渲染的优势（中断和恢复渲染的能力）.


### suspense
用于处理异步组件或者use加载场景
```js
import { lazy } from 'react';
// 懒加载组件
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}

// use 数据加载场景
function UserProfile({ id }) {
  const user = use(fetchUser(id));
  return <div>{user.name}</div>;
}

function App() {
  return (
    <Suspense 
      fallback={<div>加载用户信息...</div>}
    >
      <UserProfile id="123" />
    </Suspense>
  );
}
```