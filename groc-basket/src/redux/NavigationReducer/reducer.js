import * as types from "./actiontypes"

const  initialState={
    products:[],
    isError:false,
    isloading:false,
    
}

const reducer=(state=initialState,action)=>{
const {type , payload}= action

switch(type){

    case types.GET_DATA_REQUEST:
        return {
            ...state,
            isloading:true
        }
        case types.GET_DATA_SUCCESS:
        return {
            ...state,
            isloading:false,
            products:payload
        }
        case types.GET_DATA_FAILURE:
        return {
            ...state,
            isloading:false,
            products:[],
            isError:true
        }
        default:
            return state
}
}
export {reducer}