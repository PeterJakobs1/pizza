import React from 'react'
import logo from '../img/logo.jpg'
import bergen from '../img/bergen.png'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            
            <nav className="nav">
                <div className="logo">
                 <img src ={logo} alt="" />
                 
            </div>
                <ul className="nav-items">
                    <h5 className="nav-item">
                        <NavLink to="/home" exact activeClassName="active">
                            Home
                        </NavLink>
                    </h5>
                    <h5 className="nav-item">
                        <NavLink to="/products" exact activeClassName="active">
                            Products
                        </NavLink>
                    </h5>
                    <h5 className="nav-item">
                        <NavLink to="/cart" exact activeClassName="active">
                            Cart
                        </NavLink>
                    </h5>
                </ul>

                <footer className="footer">
                   
                </footer>
            </nav>
          
        </div>
    )
}

export default NavBar
 