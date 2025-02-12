import React from 'react'

export default function UserProfile( props ) {

    let { getData } = props
    let user = "Ahmed"
    getData( user );
    return (
        <div className='bg-info p-5 rounded m-4'>

            <h1>Username : {user} </h1>
        </div>
    )
}
