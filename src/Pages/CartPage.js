import React from 'react';
import Footer from '../Components/Footer'


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

            <div id="headerLine2">
            </div>
            <div id="headerLine3">
            </div>

            <div className="extraContainer">
            <h1 id="someThingExtraTitle">something Extra?</h1>
                <div id="somethingExtra-container">
                    <div>ekstra 1</div>
                    <div>ekstra 2</div>
                    <div>ekstra 3</div>
                    <div>ekstra 4</div>
                    <div>ekstra 5</div>
                    <div>ekstra 6</div>
                </div>

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

