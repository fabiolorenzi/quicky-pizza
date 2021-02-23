import React, {useState} from "react";
import {AiFillCaretLeft} from "react-icons/ai";

function Menu() {
    const [open, setOpen] = useState(false);

    const openClose = e => {
        e.preventDefault();
        setOpen(!open);
    };

    let openCloseRes = open ? "burgerOpen" : "";

    let hiddenMenuOpener = open ? "hidden_menu_open" : "hidden_menu_closed";

    return(
        <div className="menu">
            <div className="big_menu">
                <a href="#aboutus"><p>About us</p></a>
                <a href="#shop"><p>Shop</p></a>
                <a href="#checkout"><p>Checkout</p></a>
                <a href="#contacts"><p>Contacts</p></a>
            </div>
            <div className="burger_menu">
                <button className={openCloseRes} onClick={openClose}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <div className="hidden_menu_bar" id={hiddenMenuOpener}>
                <div className="hidden_menu">
                    <a href="#aboutus"><p>About us</p></a>
                    <a href="#shop"><p>Shop</p></a>
                    <a href="#checkout"><p>Checkout</p></a>
                    <a href="#contacts"><p>Contacts</p></a>
                </div>
                <div className="hidden_button">
                    <button onClick={openClose}>
                        <AiFillCaretLeft id="arrow_icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;