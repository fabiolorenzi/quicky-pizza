import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store.js";

import App from "./App.js";
import "./normalize.css";
import "./style.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);