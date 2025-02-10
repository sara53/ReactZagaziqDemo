import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Product from './product'

export function Products() {
    return (
        <div className='bg-light p-5 text-center'>

            <h1>Our Products</h1>
            <div className="container">
                <div className="row">
                    <Product />
                    <Product />
                    <Product />

                </div>
            </div>
        </div>
    )
}
