### redux
## 1. 项目设置

首先安装必要的依赖：

```bash
npm install redux react-redux
```

## 2. 项目结构

```
src/
  ├── store/
  │   ├── actions/
  │   │   ├── counterActions.js
  │   │   └── todoActions.js
  │   ├── reducers/
  │   │   ├── counterReducer.js
  │   │   ├── todoReducer.js
  │   │   └── index.js
  │   ├── sagas/
  │   │   ├── counterSaga.js
  │   │   ├── todoSaga.js
  │   │   └── index.js
  │   └── store.js
  ├── components/
  │   ├── Counter.js
  │   └── TodoList.js
  └── App.js
```

## 3. 实现代码

### actions/counterActions.js
```javascript
// 定义 action 类型
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

// action creators
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC
});

export const decrementAsync = () => ({
  type: DECREMENT_ASYNC
});
```

### actions/todoActions.js
```javascript
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const fetchTodos = () => ({
  type: FETCH_TODOS
});

export const addTodoAsync = (text) => ({
  type: ADD_TODO_ASYNC,
  payload: text
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

export const fetchTodosError = (error) => ({
  type: FETCH_TODOS_ERROR,
  error
});
```
###  sagas/counterSaga.js
```javascript
// sagas/counterSaga.js
import { put, takeEvery, delay } from 'redux-saga/effects';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from '../actions/counterActions';


// 异步增加
function* incrementAsyncSaga() {
  yield delay(1000); // 延迟1秒
  yield put({ type: INCREMENT });
}

// 异步减少
function* decrementAsyncSaga() {
  yield delay(1000);
  yield put({ type: DECREMENT });
}

export function* watchCounterSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

```

### sagas/todoSaga.js
```javascript
// sagas/todoSaga.js
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { 
  FETCH_TODOS, 
  FETCH_TODOS_SUCCESS, 
  FETCH_TODOS_ERROR,
  ADD_TODO_ASYNC,
  ADD_TODO
} from '../actions/todoActions';

// 模拟 API 调用
const fetchTodosApi = () => 
  new Promise(resolve => 
    setTimeout(() => resolve([
      { id: 1, text: '学习 Redux', completed: false },
      { id: 2, text: '学习 Redux-Saga', completed: false }
    ]), 1000)
  );

function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put({ type: FETCH_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: FETCH_TODOS_ERROR, error });
  }
}

function* addTodoAsyncSaga(action) {
  yield delay(500); // 延迟500ms
  yield put({
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text: action.payload,
      completed: false
    }
  });
}

export function* watchTodoSaga() {
    // takeLatest 只会执行最后一个匹配的 action 的 saga，如果有正在执行的 saga，会先取消它。快速多次请求只会，执行最后一次，相当于防抖
  yield takeLatest(FETCH_TODOS, fetchTodosSaga);
//   `takeEvery` 会监听每一个匹配的 action，并为每个 action 都执行对应的 saga。
  yield takeEvery(ADD_TODO_ASYNC, addTodoAsyncSaga);
}
```
### sagas/index.js
```javascript
// sagas/index.js
import { all } from 'redux-saga/effects';
import { watchCounterSaga } from './counterSaga';
import { watchTodoSaga } from './todoSaga';

export default function* rootSaga() {
  yield all([
    watchCounterSaga(),
    watchTodoSaga()
  ]);
}
```


### reducers/counterReducer.js
```javascript
import { INCREMENT, DECREMENT } from '../actions/counterActions';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

### reducers/todoReducer.js
```javascript
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case FETCH_TODOS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null
      };
     case FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default todoReducer;
```

### reducers/index.js
```javascript
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer
});

export default rootReducer;
```

### store/store.js
```javascript
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

// 异步处理中间件
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
```

### components/Counter.js
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync } from '../store/actions/counterActions';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>计数器</h2>
      <p>当前计数: {count}</p>
      <button onClick={() => dispatch(increment())}>立即增加</button>
      <button onClick={() => dispatch(decrement())}>立即减少</button>
      <button onClick={() => dispatch(incrementAsync())}>异步增加</button>
      <button onClick={() => dispatch(decrementAsync())}>异步减少</button>
    </div>
  );
};

export default Counter;
```

### components/TodoList.js
```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAsync, fetchTodos, toggleTodo, deleteTodo } from '../store/actions/todoActions';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
     dispatch(addTodoAsync(input));
    setInput('');
  };

  return (
    <div>
      <h2>待办事项</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加新待办..."
        />
        <button type="submit">添加</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

### App.js
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux 示例</h1>
        <Counter />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
```

## 4. 使用说明

1. 这个示例包含两个主要功能：
   - 计数器：可以增加和减少数字
   - 待办事项列表：可以添加、切换完成状态和删除待办事项

2. Redux 状态结构：
```javascript
{
  counter: number,
  todos: [
    {
      id: number,
      text: string,
      completed: boolean
    }
  ]
}
```

3. 主要特点：
   - 使用 `useSelector` 和 `useDispatch` hooks 代替 `connect` HOC
   - 实现了多个 reducer 的组合
   - 包含了 Redux DevTools 的配置
   - 展示了不同类型的状态管理（简单的计数器和复杂的列表操作）

4. 运行项目：
   - 确保已安装所有依赖
   - 使用 `npm start` 启动项目
   - 可以在浏览器中打开 Redux DevTools 查看状态变化



### saga的执行流程
1. 触发初始 Action
   ```js
   dispatch(fetchTodos())  // 派发 { type: 'FETCH_TODOS' }
   ```
2. Action 同时被 Reducer 和 Saga 接收
    - Reducer 立即处理这个 action，更新 loading 状态
    - Saga 也监听到这个 action，开始执行异步操作
3. Saga 执行异步操作
```js
const todos = yield call(api.fetchTodos);
```
4. Saga 完成后派发新的 Action：
```js
yield put(fetchTodosSuccess(todos));  // 派发 { type: 'FETCH_TODOS_SUCCESS', payload: todos }
```
5. Reducer 处理这个新的 Action
    - 接收到 FETCH_TODOS_SUCCESS action
    - 更新状态，存储获取到的数据



### 中间件注册顺序问题
1. 基本原则：
    - 中间件按照从左到右的顺序执行
    - 顺序会影响功能和调试体验
2. 推荐顺序
    ```js
    applyMiddleware(
        thunk,           // 异步处理中间件放前面
        sagaMiddleware,  // saga 中间件
        logger          // 日志中间件永远放最后
    )
    ```
2. 原因解释：
    - 异步中间件（thunk/saga）放前面是为了先处理异步操作
    - logger 放最后可以记录到所有中间件处理后的最终状态
    - 这样在调试时可以看到完整的状态变化过程