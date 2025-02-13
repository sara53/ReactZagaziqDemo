import React from 'react'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { ProductForm } from '../pages/ProductForm'
import { ProductDetails } from '../pages/ProductDetails'
import { NotFound } from '../pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SharedLayout } from '../SharedLayout/SharedLayout'
import { Counter } from '../pages/CounterWithToolKit'

export function MainLayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />} >
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='products/:id' element={<ProductDetails />} />
                    <Route path='products/:id/edit' element={<ProductForm />} />
                    <Route path='counter' element={<Counter />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
