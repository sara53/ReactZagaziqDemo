import React, { useState } from 'react'
// React hooks -- function component
export function Counter() {

    let [ state, setState ] = useState( {
        count: 0,
        title: "Counter Title",
        gender: "male"
    } )
    let increase = () => {
        setState( {
            ...state,
            count: state.count + 1
        } )


    }
    let decrease = () => {
        setState( {
            ...state,
            count: state.count - 1
        } )


    }
    let changeTitle = () => {
        setState( {
            ...state,
            title: "New Title"
        } )


    }
    return (
        <div className='bg-light p-4'>

            <h1>{state.title}</h1>
            <hr />
            <p className='lead fs-3'>Count : {state.count}</p>
            {( state.count < 0 ) && <p className='alert alert-danger'>Count Value is less than 0</p>}
            <button onClick={increase} className='btn btn-success mx-3'>increase</button>
            <button onClick={decrease} className='btn btn-danger mx-3'>decrease</button>
            <button onClick={changeTitle} className='btn btn-dark mx-3'>change title</button>
        </div>
    )
}




