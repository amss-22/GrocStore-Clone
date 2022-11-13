import { ADD_PRODUCT_TO_CART } from "./actionTypes";
import { RESET_CART } from "./actionTypes";



const cartReducer = (state = { cart: [] }, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,

                cart: [...state.cart, payload]

            }
        case RESET_CART:
            return {
                cart: [...state.cart, []],
            };
        default:
            return state
    }
}


export { cartReducer }