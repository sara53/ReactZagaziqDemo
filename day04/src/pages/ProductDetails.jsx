import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import productImg from '../assets/1.jpg'
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/productapi';
import { useSelector } from 'react-redux';
export function ProductDetails() {

    const { id } = useParams()

    const [ product, setProduct ] = useState( {} );
    const { products } = useSelector( store => store.productSlice )
    useEffect( () => {
        // 
        setProduct( products.find( product => product.id == id ) )
    }, [] )
    return (
        <div className='bg-dark p-5 container m-5 rounded text-light'>
            <div className="row">
                <div className="col-sm-4">
                    <img src={productImg} alt="" />
                </div>
                <div className="col-sm-8">

                    <h1 className='text-warning mb-3'>Product Details</h1>
                    <p className='lead fs-5'>Product Name :{product?.name}</p>
                    <p className='lead fs-5'>Product Price : {product?.price}$</p>
                    <p className='lead fs-5'>Product Quantity : {product?.quantity} items</p>
                    <div>
                        < FaStar className='text-warning fs-1 mx-1' />
                        < FaStar className='text-warning fs-1 mx-1' />
                        < FaStar className='text-warning fs-1 mx-1' />
                        < FaStar className='text-warning fs-1 mx-1' />
                        < FaStar className='text-warning fs-1 mx-1' />
                    </div>
                    <Link to="/products" className='btn btn-info mt-4'>Back To Products</Link>
                </div>
            </div>
        </div>
    )
}
