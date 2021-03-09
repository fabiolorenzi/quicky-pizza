export const loginMan = () => {
    return {
        type: "LOGIN-MAN"
    }
};

export const productSubmitter = (arrayData) => {
    return {
        type: "SUBMIT-PRODUCT",
        payload: {arrayData}
    }
};