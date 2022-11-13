import * as types from "./actiontypes"
import axios from "axios"

const getDataRequest=()=>{
    return {
        type: types.GET_DATA_REQUEST
    }
}
const getDataFailure=(payload)=>{
    return {
        type: types.GET_DATA_FAILURE,
        payload
    }
}
const getDataSuccess=(payload)=>{
    return {
        type: types.GET_DATA_SUCCESS,
        payload
    }
}


const getProductsData=(params)=> (dispatch)=>{
    dispatch(getDataRequest())
    return (
        axios.get(`http://localhost:8080/Navbar`,params).then((r)=>{
        //    console.log(r.data)
           dispatch(getDataSuccess(r.data)) 
        })
        .catch((e)=>{
            dispatch(getDataFailure(e))
        })

    )
}

export {getProductsData}