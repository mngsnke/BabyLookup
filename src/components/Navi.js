import React from 'react'
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from "shards-react"
import { Link } from "react-router-dom"
import "./css/style.css"

function Navi() {
    return (
        <div>
            <Navbar expand="md" className="navbar-bg">                
                <NavbarBrand className="text-white">Baby Lookup</NavbarBrand>
                <Nav navbar className="ms-auto">
                    <NavItem>
                        <NavLink active> 
                            <Link to='/' className="text-white">Login</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>  
                            <Link to='/register' className="text-white">Register</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
                
            </Navbar>
        </div>
    )
}

export default Navi
