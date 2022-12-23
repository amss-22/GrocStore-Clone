import { ADD_PRODUCT_TO_CART } from "./actionTypes";
import { RESET_CART } from "./actionTypes";



const cartReducer = (state = { cart: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            payload.qty = 1;
            payload['subtotal'] = parseInt(payload.price);
            return {
                ...state,

                cart: [...state.cart, payload]

            }
        case RESET_CART:
           
        return {
            ...state,
                cart: [],
            };
        default:
            return state
    }
}


export { cartReducer }