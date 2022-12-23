import * as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:'',
    isLoading:false,
    isErroe:false,
    userData:{},
    adminData:{id: 1668267255159, name: 'amit', email: 'amitbhutani95@gmail.com', password: 'Kailash123'}

}

export const reducer = (oldState = initialState, action) => {
    const {type , payload}=action
    switch(type) {

        case types.USER_LOGIN_SUCCESS :
            return {
                ...oldState,
                
                isAuth: true,
            }
           
            case "REGISTER":
                
                return{
                    ...oldState,
                    userData: payload,
                    
                }
        
        default :
        return oldState
    }

}

