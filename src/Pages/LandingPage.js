import React from 'react';
import {Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="LandingPage">
            <header className="LandingText">
                <h1 className="landing-text">
                    <h3>Delicious</h3>
                    <h3>Authentic</h3>
                    <h3>Italian food</h3>
                </h1>
                <div className ="Buttons">
                <Link to="/ProductPage" className="product-button"> Order now </Link> 
                <Link to="/CartPage" className="cart-button"> Cart </Link> 
                </div>

            </header>
        </div>
    )
};

export default LandingPage;
