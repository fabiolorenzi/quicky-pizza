import React from "react";
import {useSelector} from "react-redux";

import NewProductForm from "./NewProductForm.jsx";

function Products() {
    const logged = useSelector(state => state.isLogged);

    return(
        <div className="products-container">
            {logged ? <NewProductForm /> : ""}
        </div>
    );
};

export default Products;