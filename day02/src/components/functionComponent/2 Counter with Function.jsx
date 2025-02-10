import React, { useState } from 'react'
import Login from './Login';
// React hooks -- function component
export function Counter() {
    // render
    const [ show, setShow ] = useState( false )
    const [ title, setTitle ] = useState( "counter Component" )
    const [ count, setCount ] = useState( 0 ); // []
    let increase = () => {

        setCount( count + 1 )

    }
    let decrease = () => {

        setCount( count - 1 )

    }
    let changeTitle = () => {

        setTitle( "new Title" )
    }
    let toggle = () => {
        setShow( !show )

    }
    return (
        <div className='bg-light p-4'>
            {console.log( "Render" )}
            <h1>{title}</h1>
            <hr />
            <p className='lead fs-3'>Count :{count}</p>
            <button onClick={increase} className='btn btn-success mx-3'>increase</button>
            <button onClick={decrease} className='btn btn-danger mx-3'>decrease</button>
            <button onClick={changeTitle} className='btn btn-dark mx-3'>change title</button>
            <button onClick={toggle} className='btn btn-warning m-3'>Login</button>
            {show && <Login />}
        </div>
    )
}



