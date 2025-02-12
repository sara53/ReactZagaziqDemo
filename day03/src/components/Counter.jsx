import React, { useEffect, useState } from 'react'
import { DropdownToggle } from 'react-bootstrap';

export function Counter() {


    const [ count, setCount ] = useState( 0 )
    const [ title, setTitle ] = useState( 'Counter Component' )

    // componentDidMount & ComponentDidUpdate & ComponentDidUnmount
    useEffect( () => {
        console.log( "connection with api" )
    }, [] );
    useEffect( () => {
        console.log( "componentDIdMount & componentDidUpdate" )
    } );
    return (
        <div className='bg-light p-5'>

            {console.log( "Render" )}
            <div className="container">
                <h1 className='mb-5'>{title}</h1>
                <p className='lead fs-1 mb-5'>Count :{count}</p>
                <button onClick={() => setCount( count + 1 )} className='btn btn-success mx-3'>+</button>
                <button onClick={() => setCount( count - 1 )} className='btn btn-danger mx-3'>-</button>
                <button onClick={() => setTitle( "New Title" )} className='btn btn-dark mx-3'>Change Title</button>
            </div>
        </div>
    )
}
