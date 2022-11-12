import { ADD_PRODUCT_TO_CART } from "./actionTypes";


const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart,payload]
            }
        default:
            return state
    }
}


export { cartReducer }