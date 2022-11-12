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
                isAuth: true
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...oldState,
                isAuth: true
            }
        default:
            return oldState
    }
}

