import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProducts } from '../api/productapi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, getAllProductsAction } from '../store/productSlice';

export function Products() {

    const { products, isLoading, errors } = useSelector( store => store.productSlice )
    // 
    const dispatch = useDispatch();
    useEffect( () => {
        // database --- 
        dispatch( getAllProductsAction() )
    }, [] )

    const deleteHandler = async ( productId ) => {
        dispatch( deleteProductAction( productId ) )
    }
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-muted'>Our Products</h2>
            <div className='mt-5 d-flex justify-content-between'>
                <Link to="0/edit" className='btn btn-outline-primary'>
                    Add New Product
                </Link>
                <input type="text" className='w-25 form-control' placeholder='Search ....' />
            </div>
            {isLoading && !errors && <div className='mt-5 alert alert-dark'><h1>Loading ...... </h1></div>}
            {errors && <div className='mt-5 alert alert-danger'>{errors.message}</div>}
            {!isLoading && !errors &&
                <Table className='mt-4' striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map( ( product ) => ( <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>
                                <Link to={`${product.id}/edit`}>
                                    <FaEdit className='text-info mx-2 fs-3' />
                                </Link>
                                <Link to={`${product.id}`}>
                                    <IoEye className='text-warning mx-2 fs-3' />
                                </Link>
                                <MdDelete className='text-danger mx-2 fs-3' onClick={() => deleteHandler( product.id )} />
                            </td>
                        </tr> ) )}

                    </tbody>
                </Table>
            }
        </div>
    )
}
