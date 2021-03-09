const productSubmitterReducer = (state = [], action) => {
    switch(action.type) {
        case "SUBMIT-PRODUCT":
            return [...state, action.payload]
        default:
            return state
    }
};

export default productSubmitterReducer;