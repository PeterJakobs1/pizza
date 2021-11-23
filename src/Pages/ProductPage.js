import React, { useState } from 'react';
import Products from '../Components/Products';
import Basket from '../Components/Basket';
import data from '../data';

export default function ProductPage(props){
    //get products from data
    const {products} = data;
    let [cartItems, setCartItems] = useState([]);
    const onAddItem = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            //First time entry for a item
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    const onRemoveItem = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist.quantity === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id ));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    const onCheckout = () => {
        cartItems = [];
        alert("Food incoming!")
    };

    return (
        <div className="productPage">
            <Products onAddItem={onAddItem} products={products}></Products>
            <Basket onCheckout={onCheckout} onAddItem={onAddItem} onRemoveItem={onRemoveItem} cartItems={cartItems}></Basket>
        </div>
    )
}