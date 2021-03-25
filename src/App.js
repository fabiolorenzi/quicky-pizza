import React from "react";
import {Switch, Route} from "react-router-dom"

import MainContainer from "./components/MainContainer.jsx";

function App() {
    return(
        <div className="appContainer">
            <Switch>
                <Route path="/quicky-pizza/" exact component={MainContainer} />
            </Switch>
        </div>
    );
};

export default App;