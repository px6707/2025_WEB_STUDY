import React from 'react'
import { connect } from './connect'

function ConnectTest({ counter, handleAdd }) {
  return (
    <div>
        {counter.count}
        <button onClick={() => handleAdd()}>+</button>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: () => {
            dispatch({type: "ADD_COUNT"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectTest)
