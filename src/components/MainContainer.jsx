import React from "react";

import Header from "./Header.jsx";
import AboutUs from "./AboutUs.jsx";
import Products from "./Products.jsx";
import Shop from "./Shop.jsx";
import Contacts from "./Contacts.jsx";
import Footer from "./Footer.jsx";

function MainContainer() {
    return(
        <div className="mainContainer">
            <Header />
            <AboutUs />
            <Products />
            <Shop />
            <Contacts />
            <Footer />
        </div>
    );
};

export default MainContainer;