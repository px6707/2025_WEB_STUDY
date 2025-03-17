const createStore = function(reducer, initState) {

    let state = initState;
    let listeners = [];
    
    function dispatch(action){
        const newState = reducer(state, action)
        state = newState
        listeners.forEach(fn => fn())
    }
    function getState(){
        return state
    }
    function subscribe(handler){
        listeners.push(handler)
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}
function reducer1(state, action){
    switch(action.type){
        case 'ADD_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'MINUS_COUNT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }

}
function reducer2(state, action){
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'MINUS_AGE':
            return {
                ...state,
                age: state.age - 1
            }
        default:
            return state
    }
}

function combineReducer(reducers){
    const combineState = {}
    const keys = Object.keys(reducers)
    return function(state, action){
        keys.forEach(key=>{
            const thisState = reducers[key](state, action)
            combineState[key] = thisState
        })
        return combineState
    }
}

// 整合reducer
const rootReducer = combineReducer({
    reducer1,
    reducer2
})

const store = createStore(rootReducer, {
    reducer1: {
        count: 0
    },
    reducer2: {
        age: 36
    }
})

import { createContext } from "react";

const Provide = createContext({});

function connect(mapStateToProps, mapDispatchToProps){
    const _store = useContext(ReduxContext);
    const [_, forceUpdate] = useReducer(c=>c+1, 0)
    useEffect(()=>{
        _store.subscribe(() => {
            forceUpdate()
        })
    },[])
    return function(MyComponent){
        return function(props){
            return <MyComponent
                {...props}
                {...mapStateToProps(_store.getState())}
                {...mapDispatchToProps(_store.dispatch)}
            ></MyComponent>
        }
    }
}
function mapStateToProps(state){
    return {
        count: state.reducer1.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        handleAdd: () => {
            dispatch({type: "ADD_COUNT"})
        }
    }
}

// 一个React Compoennt
function ConnectTest({ count, handleAdd }) {
    return (
        <div>
            {count}
            <button onClick={() => handleAdd()}>+</button>
        </div>
    )
}
connect(mapStateToProps, mapDispatchToProps)(ConnectTest)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provide value={store}>
        <ConnectTest />
    </Provide>
);
