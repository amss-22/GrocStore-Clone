import axios from "axios";

import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

const getProduct = (queryParam) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`http://localhost:8080/FruitsAndVegetables`, queryParam)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      // console.log("API NAME:- ", res)
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};

export { getProduct };
