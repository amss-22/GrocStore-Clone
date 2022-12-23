import * as types from "./actionTypes";
import { USER_LOGIN_SUCCESS } from "./actionTypes";

const loginSuccess=()=>{
    return{
        type: types.USER_LOGIN_SUCCESS 
    }
}
export {loginSuccess}

