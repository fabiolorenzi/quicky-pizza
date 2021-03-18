import React from "react";
import {useSelector} from "react-redux";

import SingleProduct from "./SingleProduct.jsx";

import Margherita from "../img/margherita.jpg";
import FourCheese from "../img/four_cheese.jpg";
import FourSeasons from "../img/four_seasons.jpg";
import HamMushroom from "../img/ham_mushroom.jpg";
import Ham from "../img/ham.jpg"

function ProductsList() {
    const products = useSelector(state => state.products);

    return(
        <div className="productsList_container" id="products">
            <h1>PRODUCTS</h1>
            {products ? products.map((prod) =>
                <div className="singleProduct">
                    <span className="singleProduct_image">
                        <img src={prod.image} alt="product" />
                    </span>
                    <span className="singleProduct_info">
                        <h1>NAME: {prod.name}</h1>
                        <div className="singleProduct_ingr">
                            <h1>INGREDIENTS:</h1>
                            {prod.ingredients.map((ingr) => <p>{ingr}</p>)}
                        </div>
                    </span>
                </div>
            ) : ""}
            <SingleProduct
                image={Margherita}
                name="Margherita"
                ingredients={["Dough", "Tomato", "Mozzarella", "Oil", "Basil"]}
            />
            <br />
            <SingleProduct
                image={FourCheese}
                name="Four Cheeses"
                ingredients={["Dough", "Mozzarella", "Blue Cheese", "Parmesan", "Fontina Cheese", "Oil", "Rosemary"]}
            />
            <br />
            <SingleProduct
                image={FourSeasons}
                name="Four Seasons"
                ingredients={["Dough", "Tomato", "Mozzarella", "Grilled Vegetables", "Ham", "Oil", "Basil"]}
            />
            <br />
            <SingleProduct
                image={Ham}
                name="Ham"
                ingredients={["Dough", "Tomato", "Mozzarella", "Ham", "Oil"]}
            />
            <br />
            <SingleProduct
                image={HamMushroom}
                name="Ham and Mushrooms"
                ingredients={["Dough", "Tomato", "Mozzarella", "Ham", "Mushrooms", "Oil"]}
            />
        </div>
    );
};

export default ProductsList;