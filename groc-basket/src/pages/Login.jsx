import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate,useLocation} from "react-router-dom";
import { Button,InputGroup,InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";

import { loginSuccess } from '../redux/AuthReducer/action';


const Login = () => {
  const Auth=useSelector((item)=> item.AuthReducer.isAuth)
console.log(Auth)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)



  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");


  const user1 = useSelector(store => store.AuthReducer.userData);
  const admin = useSelector(store => store.AuthReducer.adminData);
  console.log("admin", admin)

  
  // console.log(user1.email);
 


  const handleSubmit = (e)=>{

    if(email === user1.email && password === user1.password) {
      alert('Successfully loged in' )
      dispatch(loginSuccess())
      navigate('/product')

    }else if(email === admin.email && password === admin.password) {
      alert('Welcome Admin' )
      dispatch(loginSuccess())
      navigate('/admin')

    }
    else if(email === user1.email && password === ""){
      alert('Please type your password')
      
    }else if(email === "" && password === user1.password){
      alert('Please type your email')

    }else if (email === "" && password === ""){
      alert('Please type your email and Password')

    }else{
      alert('Wrong email or password')
      
    }
   
  };
  return (
    <div style={{width:"30%",margin:"auto",padding:"7px", boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",marginTop:"50px"}}>
      
    <h1 style={{
    fontSize: "130%",
    fontWeight: "bolder",
    color: "green",
    paddingBottom: "5px",
    textAlign:"center"
   
}}>
  Login to Groc Store
  </h1>
  <div style={{color:"red", fontSize:"18px", textAlign:"center", marginTop:"10px"}}><Link to="/Signup" >Create an account.</Link></div>
  <form onSubmit={handleSubmit}>

    <div>
            <h1 style={{marginTop:"15px"}}>Email</h1>
            <Input placeholder='Enter Email' value={email}  onChange = {e => setEmail(e.target.value)} />
    </div>
        

        
        <h1 style={{marginTop:"15px"}}>Password</h1>
        <div>

          <InputGroup size='md'>
              <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
              </Button>
              </InputRightElement>
          </InputGroup>
        </div>
         
         <div style={{textAlign:"center",marginTop:"32px"}}>
             <Button onClick={handleSubmit} colorScheme='teal' variant='outline' size='lg'>
             LOGIN
             </Button>
         </div>
         

      </form>
    </div>
  )
}

export default Login


