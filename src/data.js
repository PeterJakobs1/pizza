//TODO IMPORTERE PIZZA BILDER
import pizzaPepperoni from '../src/img/pizza/pizzaPepperoni.png'
import pizzaHawaii from '../src/img/pizza/pizzaHawaii.png'
import pizzaMargarita from '../src/img/pizza/pizzaMargarita.png'
import pizzaKebab from '../src/img/pizza/pizzaKebab.png'
import pizzaVegan from '../src/img/pizza/pizzaVegan.png'
import bolognese from '../src/img/pasta/bolognese.png'
import carbonara from '../src/img/pasta/carbonara.png'
import diPesce from '../src/img/pasta/diPesce.png'
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
                    name: "Kebab",
                    price: 299,
                    filter: "pizzaFilter4",
                    category: "pizza",
                    image: pizzaKebab
                },
                {
                    id: "5",
                    name: "Vegan",
                    price: 150,
                    filter: "pizzaFilter5",
                    category: "pizza",
                    image: pizzaVegan
                }, 
                {
                    id: "6",
                    name: "Bolognese",
                    price: 109,
                    filter: "pastaFilter1",
                    category: "pasta",
                    image: bolognese
                }
                ,
                {
                    id: "7",
                    name: "Carbonara",
                    price: 101,
                    filter: "pastaFilter2",
                    category: "pasta",
                    image: carbonara
                },
                {
                    id: "8",
                    name: "di Pesce",
                    price: 100,
                    filter: "pastaFilter3",
                    category: "pasta",
                    image: diPesce
                },
    ]
};

export default data;
