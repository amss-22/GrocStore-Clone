import * as types from "./actionTypes"


const initialState = {
    token: "",
    isAuth: false,
    isError: false,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    // switch(type) {

    return state;


    //}

}
export { reducer }