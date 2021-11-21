import React from "react"
import ItemCard from '../Components/ItemCard'
import $ from 'jquery'

export default function ProductPage(props){
    //get products and onAddItem from props
    const {products, onAddItem} = props;

const hidePizza = () => {
    $("#pizzaFilter1").css("display", "none");
    $("#pizzaFilter2").css("display", "none");
    $("#pizzaFilter3").css("display", "none");
    $("#pastaFilter1").css("display", "flex");
    $("#pastaFilter2").css("display", "flex");
    $("#pastaFilter3").css("display", "flex");
}

const hidePasta = () => {
    $("#pastaFilter1").css("display", "none");
    $("#pastaFilter2").css("display", "none");
    $("#pastaFilter3").css("display", "none");
    $("#pizzaFilter1").css("display", "flex");
    $("#pizzaFilter2").css("display", "flex");
    $("#pizzaFilter3").css("display", "flex");
}

const showAll = () => {
    $("#pizzaFilter1").css("display", "flex");
    $("#pizzaFilter2").css("display", "flex");
    $("#pizzaFilter3").css("display", "flex");
    $("#pastaFilter1").css("display", "flex");
    $("#pastaFilter2").css("display", "flex");
    $("#pastaFilter3").css("display", "flex");
}


    return <main className="mainClassContainer">
        <button className="filterButton" onClick={() => hidePasta()}>Pizza</button>
        <button className="filterButton" onClick={() => hidePizza()}>Pasta</button>
        <button className="filterButton showAll" onClick={() => showAll()}>Show all</button>
        <div className="productContainer">
            {products.map((product) => (
                <ItemCard key={product.id} product={product} onAddItem={onAddItem}></ItemCard>
            ))}
        </div>
    </main>
}