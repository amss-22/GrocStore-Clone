import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((store) => store.AuthReducer.isAuth)
    console.log("Auth", isAuth)
    if (!isAuth) {
       
        return <Navigate to="/login" />
    } else {
        console.log("Auth", isAuth)
        return children
    }

}

export default PrivateRoute
