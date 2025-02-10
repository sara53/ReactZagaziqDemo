import React from 'react'
import ProductCard from './ProductCard'

export function Products() {
    let products = [
        {
            id: 1,
            name: "book",
            category: "school",
            price: 200
        },
        {
            id: 2,
            name: "pen",
            category: "school",
            price: 200
        },
        {
            id: 3,
            name: "mouse",
            category: "school",
            price: 200
        },
        {
            id: 4,
            name: "watch",
            category: "school",
            price: 500
        },
    ]
    return (
        <div className='bg-dark p-5 text-light'>
            <div className="container">
                <div className="row g-3">
                    {products.map( ( product =>
                        <ProductCard key={product.id} product={product} />
                    ) )}

                </div>
            </div>
        </div>
    )
}
