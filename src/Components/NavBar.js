import React from 'react'
import logo from '../img/logo.jpg'
import bergen from '../img/bergen.png'
import oslo from '../img/oslo.png'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">

            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="" />

                </div>
                <ul className="nav-items">
                    <h5 className="nav-item">
                        <NavLink to="/LandingPage" exact activeClassName="active">
                            Home
                        </NavLink>
                    </h5>
                    <h5 className="nav-item">
                        <NavLink to="/ProductPage" exact activeClassName="active">
                            Products
                        </NavLink>
                    </h5>
                    <h5 className="nav-item">
                        <NavLink to="/CartPage" exact activeClassName="active">
                            Cart
                        </NavLink>
                    </h5>
                </ul>

                <footer className="footer">
                    <div className="location-img-container">
                        <img src={bergen} alt="bergen" />
                        <h7>Bergen</h7>
                    </div>
                    <div className="location-img-container">
                        <img src={oslo} alt="oslo" />
                        <h7>Oslo</h7>
                    </div>
                </footer>
            </nav>

        </div>
    )
}
export default NavBar