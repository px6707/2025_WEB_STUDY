import React, { useEffect, useState } from 'react'
import { store } from './index';

export default function ReduxTest() {

    const [ count , setCount ] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
            // 如果data发生改变的时候，我这里就执行了
            let curData = store.getState();
            // 闭包陷阱
            setCount(curData.counter.count);
        })
    }, [])

  return (
    <div>
        <h5>count is {count}</h5>
        <button onClick={() => store.dispatch({ type: "ADD_COUNT" })}>ADD</button>
        <button onClick={() => store.dispatch({ type: "MINUS_COUNT" })}>MINUS</button>
        <button onClick={() => store.dispatch({ type: "RESET_COUNT" })}>RESET</button>
    </div>
  )
}
