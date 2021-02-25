import React from "react";

import Header from "./Header.jsx";
import AboutUs from "./AboutUs.jsx";
import Products from "./Products.jsx";

function MainContainer() {
    return(
        <div className="mainContainer">
            <Header />
            <AboutUs />
            <Products />
        </div>
    );
};

export default MainContainer;