import React from 'react'

function CheckoutForm() {
    return (
        <div>

        <div class="card-checkout">
        <div class="heading">
            <h3>payment details</h3>
            <label>credit card information</label>
            <i class="icon ion-card"></i>
        </div>
        <div class="content">
            <label>name on the card</label>
            <div class="input-group">
            <input class="form-control" type="text"></input>
            </div>
            <label>card number</label>
            <div class="input-group">
            <input class="form-control" type="text"></input>
            </div>
            <label>expiration date</label>
            <div class="input-group">
            <input class="form-control" type="text"></input>
            </div>
            <label>ccv/cvv</label>
            <div class="input-group">
            <input class="form-control" type="text"></input>
            </div>
            <br/>
            <input class="button -primary" type="submit" value="Place Your Order"></input>
        </div>
        </div>

            
        </div>
    )
}

export default CheckoutForm
