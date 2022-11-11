import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {login} from "../redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from '../redux/AuthReducer/actionTypes';
import {useNavigate,useLocation} from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");
  const location=useLocation();
  const comingFrom = location.state?.from?.pathname || "/";


  const handleSubmit = (e)=>{
     e.preventDefault();
     if(email && password) {
      dispatch(login({email,password}))
      .then((r) => {
        if(r.type === USER_LOGIN_SUCCESS) {
          navigate(comingFrom, {replace:true});

        }
      });
     }
  };
  return (
    <div>
    <h1 style={{
    fontSize: "300%;",
    fontWeight: "bolder",
    color: "green",
    paddingBottom: "5px",
}}>
  LOGIN to Groc Store
  </h1>
  <form onSubmit={handleSubmit}>
    <div
    style={{
      padding: "10px",
      fontSize: "100%",
      background: "#dedede",
      outline: "none",
      width: "230px",
      border: "none"
        }}
        >
          <label>User Email</label>
          <input
          type="email"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        

        <div
        style={{
          padding: "10px",
          fontSize: "100%",
          background: "#dedede",
          outline: "none",
          width: "230px",
          border: "none"
        }}
        >
          <label>User Password</label>
          <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        
        <button
        style={{
          fontSize: "100%",
          width: "150px",
          background: "rgb(10, 255, 100)",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "20px",
          fontWeight: "bolder"
      }}
         onClick={handleSubmit}>LOGIN</button>
      </form>
    </div>
  )
}

export default Login