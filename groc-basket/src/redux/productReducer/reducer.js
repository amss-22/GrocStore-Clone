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
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError:false
            }

        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError:false
            }
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isError:true
            }

        default:
            return state;
    }

}


// export { Product_reducer }