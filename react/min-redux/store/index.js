import { combineReducer, createStore } from "./redux";

let initState = {
    counter: {
        count: 0,
    },
    info: {
        name: "luyi",
        age: 36,
    }
};

const counterReducer = (state, action) => {
    switch(action.type) {
        case "ADD_COUNT": 
            return { count: state.count + 1 }
        case "MINUS_COUNT": 
            return { count: state.count - 1 }
        case "RESET_COUNT": 
            return { count: 0 }
        default:
            return state;
    }
}

const infoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_AGE": 
            return { ...state, age: state.age + 1 }
        case "MINUS_AGE": 
            return { ...state, age: state.age - 1 }
        case "SET_NAME": 
            return { ...state, name: action.payload }
        default:
            return state;
    }
}


// 我把多个reducer 合并起来
const reducer = combineReducer({
    counter: counterReducer,
    info: infoReducer
});

export const store = createStore(reducer, initState);