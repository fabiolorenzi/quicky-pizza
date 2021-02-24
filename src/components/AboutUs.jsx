import React from "react";

import Logo from "../img/pizza-logo.png";

function AboutUs() {
    return(
        <div className="aboutus" id="aboutus">
            <h1 id="title_aboutus">ABOUT US</h1>
            <div className="main_aboutus">
                <div className="image_aboutus">
                    <img src={Logo} alt="quicky pizza logo" />
                </div>
                <div className="text_aboutus">
                    <p>
                        Quicky Pizza was fonded in 2021 in Brighton, when a friend suggested to open 
                        an e-shop dedicated to pizza commerce.<br /> After a long series of burocratic challenges,
                        the team could buy the first local, where they cooked pizza all day just using 
                        local ingredients and managing all the delivery routes.<br />
                        Nowadays, having several kitchens all around the world, Quicky Pizza is one of
                        the most affirmed mark in the pizza delivery business.<br />
                        Quicky Pizza supports local suppliers, because for us the quality is the 90% of our success.
                    </p>
                </div>
            </div>
            <h1 id="slogan_aboutus">IF YOU WANT TO EAT QUICKLY AND WELL, EAT QUICKLY PIZZA!!!</h1>
        </div>
    );
};

export default AboutUs;