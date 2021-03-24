import React from "react";

import Header from "./Header.jsx";
import AboutUs from "./AboutUs.jsx";
import Products from "./Products.jsx";
import Shop from "./Shop.jsx";

function MainContainer() {
    return(
        <div className="mainContainer">
            <Header />
            <AboutUs />
            <Products />
            <Shop />
        </div>
    );
};

export default MainContainer;