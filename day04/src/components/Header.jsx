import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function Header() {

    const { count } = useSelector( store => store.counterSlice )
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/products">Products</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/counter">Counter ({count})</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
