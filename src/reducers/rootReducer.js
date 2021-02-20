import {combineReducers} from "redux";

import loginManReducer from "./loginManReducer.js";

const rootReducer = combineReducers({
    isLogged: loginManReducer
});

export default rootReducer;