import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAction, increaseAction } from '../redux/actions/allAction';

export function Counter() {
    const dispatch = useDispatch();
    const { count } = useSelector( ( store ) => store.counterSlice )



    const increaseHandler = () => {
        dispatch( increaseAction( 5 ) )
    }
    const decreaseHandler = () => {
        dispatch( decreaseAction( 3 ) )
    }
    return (
        <div className='container m-5 p-5'>

            <h1 className='text-muted text-center mb-3'>Counter Page</h1>
            <p className='lead fs-1 mb-5'>Count : {count}</p>
            <button className='mx-3 btn btn-success' onClick={increaseHandler}>increase</button>
            <button className='mx-3 btn btn-danger' onClick={decreaseHandler}>decrease</button>
        </div>
    )
}
