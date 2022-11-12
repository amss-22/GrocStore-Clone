import * as types from "./actionTypes"

const initialState = {
    isAuth: false,
    token: '',
    isLoading: false,
    isErroe: false,
    userData: {}

}

export const reducer = (oldState = initialState, action) => {

    switch (action.type) {

        case "REGISTER":
            return {
                ...oldState,
                userData: action.payload,
            }
        default:
            return oldState
    }
}

