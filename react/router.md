## react 路由

### 基础用法
```js
function App(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
}

// 嵌套路由
function APp(){
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
function Dashboard(){
    return <div>
        <h1>Dashboard</h1>
        {/* 子路由渲染位置 */}
        <Outlet />
    </div>
}

// 配置式路由
const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]
const Routing = ()=>useRoute(routes)
function App2(){
    return <BrowserRouter>
        <Routing></Routing>
    </BrowserRouter>
}
```

### 路由跳转
```js
// Link
<Link to="/about">About</Link>
// NavLink
<NavLink to="/about" class={({avtive})=>active?'active':'inactive'}/> 选中的颜色
// useNavigate
const navigate = useNavigate()
navigate('/about')
```
### 路由钩子
```js
// useLocation
const location = useLocation()
// useNavigate
const navigate = useNavigate()
 // useParams
const params = useParams()
```
