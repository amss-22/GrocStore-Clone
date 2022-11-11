import * as types from "./actionTypes";


const initialState = {
    products: [],
    isError: false,
    isLoading: false
}

export const Product_reducer = (state = initialState, action) => {
    
    const { type, payload } = action
    // console.log("payload",payload )
    switch (type) {
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError:false
            }

        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError:false
            }
        case types.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isError:true
            }

        default:
            return state;
    }

}


// export { Product_reducer }