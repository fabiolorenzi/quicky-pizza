const loginManReducer = (state = false, action) => {
    switch(action.type) {
        case "LOGIN-MAN":
            return !state
        default:
            return state
    }
};

export default loginManReducer;