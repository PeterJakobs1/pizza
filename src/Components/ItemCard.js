import React from 'react';

export default function ItemCard(props) {
    //get product and onAddItem function from props
    const { product, onAddItem } = props;
    return (
        
            <div id={product.filter} className="itemCardContent">
                {/* PICTURE legge til src*/}
                <img className="itemCardImage" src={product.image} alt="itemCardImage"></img>
                {/* HEADER */}
                <div className="itemCardName">{product.name}</div>
                {/* PRICE */}
                <div className="itemCardPrice">{product.price}</div>
                <button className="itemCardButton" onClick={() => onAddItem(product)}>Add {product.category}</button>
            </div>
    )
}
