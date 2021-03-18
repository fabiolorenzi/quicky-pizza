import React from "react";
import {useSelector} from "react-redux";

import NewProductForm from "./NewProductForm.jsx";
import ProductsList from "./ProductsList.jsx";

function Products() {
    const logged = useSelector(state => state.isLogged);

    return(
        <div className="products-container">
            {logged ? <NewProductForm /> : ""}
            <ProductsList />
        </div>
    );
};

export default Products;