import { ADD_PRODUCT_TO_CART } from "./actionTypes"
import { RESET_CART } from "./actionTypes"

export const add_product_to_cart = (data) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: data
    }
}

export const resetList = () => {
    return { type: RESET_CART };
}

