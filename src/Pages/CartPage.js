import React from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import Footer from '../Components/Footer'
import sauce1 from '../img/SomeThingExtra/sauce-1.png'
import sauce2 from '../img/SomeThingExtra/sauce-2.png'
import sauce3 from '../img/SomeThingExtra/sauce-3.png'
import sauce4 from '../img/SomeThingExtra/sauce-4.png'
import sauce5 from '../img/SomeThingExtra/sauce-5.png'
import sauce6 from '../img/SomeThingExtra/sauce-6.png'
import pizza1 from '../img/pizza/pizzaHawaii.png'
import pizza2 from '../img/pizza/pizzaKebab.png'
import pizza3 from '../img/pizza/pizzaVegan.png'
import triangle from '../img/SomeThingExtra/black triangle.png'
import triangletop from '../img/SomeThingExtra/blacktriangle.png'





function CartPage() {

    return(
        
        <div className="CartPageTitle">
            <h1 id="CartPageTitle">Cart</h1>
        <div className="paymentInfo">
        <div className="Credit card"> Credit Card</div>
        <div className="Paypal"> Paypal</div>
        </div>


            <div id="headerLine">
            </div>


            <div className="pizzaContainer">
                <div>
                <img src={pizza1} alt="pizzaImage" className="pizzaImage" height="60x" width="60px"/>
                <h2 className="PizzaTitle">Pizza Hawaii</h2>
                    <div className="box">
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                        <div>199kr</div>
                    </div>
                </div>

                <div>
                <img src={pizza2} alt="pizzaImage"className="pizzaImage" height="50px" width="60px"/>
                <h2 className="PizzaTitle">Pizza Hawaii</h2>
                    <div className="box">
                    <div>-</div>
                        <div>2</div>
                        <div>+</div>
                        <div>200kr</div>
                    </div>
                </div>

                <div>
                <img src={pizza3} alt="pizzaImage" className="pizzaImage" height="50px" width="60px"/>
                <h2 className="PizzaTitle">Pizza Hawaii</h2>
                    <div className="box">
                    <div>-</div>
                        <div>3</div>
                        <div>+</div>
                        <div>150kr</div>
                    </div>
                </div>
            </div>

            <div id="headerLine2">
            </div>

            <div id="headerLine3">
            </div>

            <div className="extraContainer">
                <h1 id="someThingExtraTitle">something Extra?</h1>
                 <div id="somethingExtra-container">

                    <div className="center-image">
                        <h5>Sauce</h5>
                        <img src={sauce1} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                    <div>
                        <h5>Sauce</h5>
                        <img src={sauce2} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                    <div>
                        <h5>Sauce</h5>
                        <img src={sauce3} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                    <div>
                        <h5>Sauce</h5>
                        <img src={sauce4} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                    <div>
                        <h5>Sauce</h5>
                        <img src={sauce5} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                    <div>
                        <h5>Sauce</h5>
                        <img src={sauce6} alt="Sauce" className="sauceImg" height="50px" width="50px"/>
                    </div>

                </div>
            </div>


            <div className="checkoutForm">
                <CheckoutForm/>
            </div>

        <div className="content-wrap">
            <div className="line">  
        </div>
            <Footer/>
        </div>

        </div>



    );


}

export default CartPage

