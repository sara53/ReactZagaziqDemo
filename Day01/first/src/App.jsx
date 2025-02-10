import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import Slider from './components/Slider'
import { Products } from './components/Products'



export function App() {
    return (
        <>
            <Header />
            <Slider />

            <Products />
            <Footer />

        </>
    )
}


