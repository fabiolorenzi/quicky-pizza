import React from "react";
import {useSelector} from "react-redux";

import IsLoggedBar from "./IsLoggedBar.jsx";
import NotLoggedBar from "./NotLoggedBar.jsx";

function LoginBar() {
    const status = useSelector(state => state.isLogged);

    return(
        <div className="loginBar">
            {status.value ? <IsLoggedBar /> : <NotLoggedBar />}
        </div>
    );
};

export default LoginBar;