import { GET_SINGLE_DATA } from "./actiontypes";

const setSingleData=(payload)=>{
    console.log(payload)
    return{
        type: GET_SINGLE_DATA,
        payload
    }
}
export {setSingleData}