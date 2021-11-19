
//import React, { Component } from 'react';
import React from 'react';
import ItemCard from './../Components/ItemCard';
import { ProductPageItems } from './ProductPageItems';

class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.getItems();
    }

    state = {
        name: "",
        price: "",
        filter: "",
        image: "",
        itemList: []
    }

    getItems = () => {
        for (var i = 0; i < ProductPageItems.length; i++){
            this.state.itemList.push(ProductPageItems[i]);
        } 
    }

    createItemCard = () => {
        let list;
        if (this.state.itemList.length > 0 ){
            list =
            <div>
                {this.state.itemList.map(itemList =>
                    <ItemCard name={itemList.name} price={itemList.price}></ItemCard>
                    )}
                
            </div>
        }

        return list
    }

    render = () => {
        return (
            <div className="ProductPage">
                {this.createItemCard()}
            </div>
        )

    }
}

export default ProductPage

