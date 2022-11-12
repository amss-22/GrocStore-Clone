import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children})=>{ 
       const isAuth = useSelector(stre=> stre.AuthReducer.isAuth);
console.log(isAuth)
if(!isAuth){  
      return <Navigate to="/Login"/>;
    }
    return children;
}
    export default PrivateRouter;