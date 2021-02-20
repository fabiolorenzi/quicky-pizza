import React from "react";
import {useDispatch} from "react-redux";
import {loginMan} from "../actions.js";

import iconBlocked from "../img/user_blocked_icon.png";

function NotLoggedBar() {
    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();
        dispatch(loginMan());
    };

    return(
        <div className="loginStateBar">
            <img src={iconBlocked} alt="user icon" />
            <h1>Not Logged</h1>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default NotLoggedBar;