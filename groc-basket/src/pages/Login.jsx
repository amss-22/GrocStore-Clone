import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate,useLocation} from "react-router-dom";
import { Button,InputGroup,InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import './login.css';
import { loginSuccess } from '../redux/AuthReducer/action';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Auth = useSelector ((item) => item.AuthReducer.isAuth);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user1 = useSelector(store => store.AuthReducer.userData);
  const admin = useSelector(store => store.AuthReducer.adminData);
 

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(email === ""){
      alert("Enter email")
      return false;

    }else if(password === ''){
      alert("Enter password");
      return false;

    }else if(email !== user1.email || password !== user1.password) {
      alert('Email or Password is wrong please check once' )
      return false;

    }  
    else{
      if(email === user1.email && password === user1.password) {
        alert('Successfully loged in' )
        dispatch(loginSuccess());
        navigate('/Cart');
  
      }else if(email === admin.email && password === admin.password) {
        alert('Welcome Admin' );
        dispatch(loginSuccess());
        navigate('/Admin');
  
      }
    }


   
  };
  return (
    <div className='login_main' >
      
    <h1 className='login_h1'>
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
             <Button type="submit" colorScheme='teal' variant='outline' size='lg'>
             LOGIN
             </Button>
         </div>
         
      </form>
    </div>
  )
}

export default Login