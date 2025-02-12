import React, { useEffect, useState } from 'react'

export function Login( props ) {
    let { logout } = props

    // search
    let [ x, setX ] = useState();

    let user = "ali"
    useEffect( () => {
        console.log( "didMount at Login Component" )

        // clean up function
        return () => {
            console.log( "Executed on login removed" )
        }
    }, [ x ] )
    return (
        <div className='alert alert-info'>
            {console.log( "render at login component" )}
            <h1>Hello Ali</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati culpa eligendi maxime ipsum, facilis doloremque distinctio quaerat quo velit repellendus ipsam animi, sint quod eaque asperiores, voluptatibus labore! Provident?</p>
            <button onClick={logout} className='btn btn-danger mt-5'>Logout</button>
        </div>
    )
}
