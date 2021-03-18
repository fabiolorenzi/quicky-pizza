import React from "react";

function SingleProduct({image, name, ingredients}) {
    return(
        <div className="singleProduct">
            <span className="singleProduct_image">
                <img src={image} alt="product" />
            </span>
            <span className="singleProduct_info">
                <div className="singleProduct_infoTitle">
                    <h1 className="singleProduct_name">NAME</h1>
                    <p className="singleProduct_nameValue">{name}</p>
                </div>
                <div className="singleProduct_ingr">
                    <h1>INGREDIENTS:</h1>
                    <div className="ingredientsList">{ingredients.map((ingr) => <p className="sigleIng">{ingr}</p>)}</div>
                </div>
            </span>
        </div>
    );
};

export default SingleProduct;