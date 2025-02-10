function App() {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/hot" element={<Hot />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
const routes=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }
]
function App2(){
    return useRoutes(routes)
}


const NavigationConstext=createContext({})
const LocationContext=createContext({})

function BrowserRouter({children}){
    let historyRef = useRef()
    if(historyRef.current=null){
     historyRef.current=createBrowserHistory()
    }
    let history=historyRef.current
    let [state,setState] = useState({
     action: history.action,
     location: history.location
    })
    useLayoutEffect(() => history.listen(setState), [history])
    return <Router 
     children={children} 
     location={state.location}
     navigationType={state.action}
     navigator={state.history}
    ></Router>
 }

function HashRouter({children}){
   let historyRef = useRef()
   if(historyRef.current=null){
    historyRef.current=createHashHistory()
   }
   let history=historyRef.current
   let [state,setState] = useState({
    action: history.action,
    location: history.location
   })
   useLayoutEffect(() => history.listen(setState), [history])
   return <Router 
    children={children} 
    location={state.location}
    navigationType={state.action}
    navigator={state.history}
   ></Router>
}

function Router({children,location,navigationType,navigator}){
    const navigationValue = useMemo(() => ({navigator}),[navigator])
    const locationValue = useMemo(() => ({location}),[location])
    return <NavigationConstext.Provider value={navigationValue}>
        <LocationContext.Provider value={locationValue}
            children={children}
        >
        </LocationContext.Provider>
    </NavigationConstext.Provider>
}
const createRoutesFromChildren = (children) => {
    const routes = []
    React.Children.forEach(children, (child) => {
        let route = {
            path:child.props.path,
            element:child.props.element
          }
        if (child.props.children){
            route.children=createRoutesFromChildren(child.props.children)
        }
        routes.push(route)
    })
    return routes
}
function useLocation() {
    return useContext(LocationContext).location
}
function useNavigate() {
    return useContext(NavigationConstext).navigator
}
const useRoutes = (routes) => {
    const location = useLocation()
    let element = null
    routes.forEach((route) => {
        if (route.path === location.pathname) {
            element = route.element
        }
    })
    return element
}
export const Routes = (children)=>{
    return useRoutes(createRoutesFromChildren(children))
}
export const Route = ()=>{}