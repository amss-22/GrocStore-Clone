import axios from 'axios';

import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"


const getProduct = () => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST })
    axios.get(`http://localhost:8080/FruitsAndVegetables`)
        .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data })).catch(() => {
            dispatch({ type: GET_DATA_FAILURE })
        })

}

export { getProduct }