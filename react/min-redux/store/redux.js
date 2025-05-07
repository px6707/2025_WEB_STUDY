export const createStore = function(reducer, initState) {
    let state = initState;
    let listeners = [];

    function subscribe(handler) {
        // 我们希望，订阅了我这个 data 数据的函数 handler， 在我数据改变时，handler 给我执行一下。
        listeners.push(handler);
    }

    function dispatch(action) {
        // 我们所谓的 redux 是 immutable ， mobx/vue --> mutable why???
        // 我的state，从来没有被修改过，没有都是给的一个新的值。
        const currentState = reducer(state, action);
        state = currentState;
        listeners.forEach(fn => fn());
    }

    function getState() {
        return state;
    }

    return {
        subscribe, dispatch, getState
    }
}

export const combineReducer = function(reducers) {
    const keys = Object.keys(reducers); // 先拿到了 ['counter', 'info']
    // 返回的也是一个reducer 
    return function(state = {}, action) {
        const nextState = {};

        keys.forEach((key) => {
            const reducer = reducers[key]; // counterReducer, / infoReducer
            const prev = state[key]; // counter: { count: 0, }, /  info: { name: "luyi", age: 36, }
            // 假设我 dispatch 是一个 ADD_COUNT 的 action , 那我这里循环执行完了， next 分别是啥
            // counter: { count: 1, } / info: { name: "luyi", age: 36, }
            const next = reducer(prev, action);
            nextState[key] = next;
        })

        return nextState;
    }
}