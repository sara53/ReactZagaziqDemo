import React from 'react'

export default function ProductCard( props ) {
    let { product } = props
    return (
        <div className="col-sm-4 g-2 border rounded">
            <div className='p-3'>
                <h2>{product.name}</h2>
                <p>{product.price}$</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}
