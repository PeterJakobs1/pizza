//TODO IMPORTERE PIZZA BILDER
import pizzaPepperoni from '../src/img/pizzaPepperoni.png'
import pizzaHawaii from '../src/img/pizzaHawaii.png'
import pizzaMargarita from '../src/img/pizzaMargarita.png'
import bolognese from '../src/img/bolognese.png'
import carbonara from '../src/img/carbonara.png'
import diPesce from '../src/img/diPesce.png'
const data = {
    products: [
        {
                    id: "1",
                    name: "Pepperoni",
                    price: 199,
                    filter: "pizzaFilter1",
                    category: "pizza",
                    image: pizzaPepperoni
                },
                {
                    id: "2",
                    name: "Margaritha",
                    price: 199,
                    filter: "pizzaFilter2",
                    category: "pizza",
                    image: pizzaHawaii
                },
                {
                    id: "3",
                    name: "Hawaii",
                    price: 249,
                    filter: "pizzaFilter3",
                    category: "pizza",
                    image: pizzaMargarita
                },
                {
                    id: "4",
                    name: "Bolognese",
                    price: 109,
                    filter: "pastaFilter1",
                    category: "pasta",
                    image: bolognese
                }
                ,
                {
                    id: "5",
                    name: "Carbonara",
                    price: 101,
                    filter: "pastaFilter2",
                    category: "pasta",
                    image: carbonara
                },
                {
                    id: "6",
                    name: "di Pesce",
                    price: 100,
                    filter: "pastaFilter3",
                    category: "pasta",
                    image: diPesce
                }
    ]
};

export default data;
