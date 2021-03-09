import {combineReducers} from "redux";

import loginManReducer from "./loginManReducer.js";
import productSubmitterReducer from "./productSubmitterReducer.js";

const rootReducer = combineReducers({
    isLogged: loginManReducer,
    products: productSubmitterReducer
});

export default rootReducer;