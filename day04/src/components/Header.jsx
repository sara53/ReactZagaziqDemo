import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/products">Products</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? "text-danger nav-link" : "nav-link"} to="/login">Login</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
