import React from "react";

import Menu from "./Menu.jsx";
import LoginBar from "./LoginBar.jsx";

function Header() {
    return(
        <div className="header">
            <Menu />
            <LoginBar />
        </div>
    );
};

export default Header;