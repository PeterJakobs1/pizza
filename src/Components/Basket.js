import React from "react"

export default function Basket(props){
    const {cartItems, onAddItem, onRemoveItem, onCheckout}= props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
    <aside className="cartContainer">
        <h2>Cart</h2>
        <div >
            {cartItems.length === 0 && <div>Cart is empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="cartProductContent">
                {/* NAME */}
                <div>{item.name}</div>
                {/* BUTTONS */}
                <div className="buttonContainer">
                    <button onClick={() => onRemoveItem(item)} className="remove">-</button>
                    <button onClick={() => onAddItem(item)} className="add">+</button>
                </div>
                {/* QUANTITY */}
                <div>
{item.quantity} x {item.price}
                </div>

            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="sum">
            <div>item price</div>
            <div>{itemsPrice}</div>
            </div>
            <hr></hr>
            <div>
                
            <button className="itemCardButton smallScreenButton" onClick={() => onCheckout()}>
                    Checkout
                </button>
            </div>
            </>
        )}
    </aside>
    );
}