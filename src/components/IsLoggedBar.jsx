import React from "react";
import {useDispatch} from "react-redux";
import {loginMan} from "../actions.js";

import userIcon from "../img/user_icon.jpg";

function IsLoggedBar() {
    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();
        dispatch(loginMan());
    };

    return(
        <div className="loginStateBar">
            <button onClick={login}>
                <div className="loginImage">
                    <img src={userIcon} alt="user icon" />
                </div>
                <div className="loginUsername">
                    <h1>Logged</h1>
                </div>
            </button>
        </div>
    );
};

export default IsLoggedBar;