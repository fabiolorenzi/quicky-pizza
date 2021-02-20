import React from "react";
import {useDispatch} from "react-redux";
import {loginMan} from "../actions.js";

import userIcon from "../img/user_icon.png";

function IsLoggedBar() {
    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();
        dispatch(loginMan());
    };

    return(
        <div className="loginStateBar">
            <img src={userIcon} alt="user icon" />
            <h1>Logged</h1>
            <button onClick={login}>Logout</button>
        </div>
    );
};

export default IsLoggedBar;