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
            <button onClick={login}>
                <div className="loginImage">
                    <img src={iconBlocked} alt="user icon" />
                </div>
                <div className="loginUsername">
                    <h1>Login</h1>
                </div>
            </button>
        </div>
    );
};

export default NotLoggedBar;