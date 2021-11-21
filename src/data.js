//TODO IMPORTERE PIZZA BILDER
import pepperoniPizza from '../src/img/pizza.png'

const data = {
    products: [
        {
                    id: "1",
                    name: "Pepperoni",
                    price: 199,
                    filter: "pizzaFilter1",
                    category: "pizza",
                    image: pepperoniPizza
                },
                {
                    id: "2",
                    name: "Margaritha",
                    price: 199,
                    filter: "pizzaFilter2",
                    category: "pizza",
                    image: pepperoniPizza
                },
                {
                    id: "3",
                    name: "Hawaii",
                    price: 249,
                    filter: "pizzaFilter3",
                    category: "pizza",
                    image: pepperoniPizza
                },
                {
                    id: "4",
                    name: "Bolognese",
                    price: 109,
                    filter: "pastaFilter1",
                    category: "pasta",
                    image: ""
                }
                ,
                {
                    id: "5",
                    name: "Carbonara",
                    price: 101,
                    filter: "pastaFilter2",
                    category: "pasta",
                    image: ""
                },
                {
                    id: "6",
                    name: "di Pesce",
                    price: 100,
                    filter: "pastaFilter3",
                    category: "pasta",
                    image: ""
                }
    ]
};

export default data;
