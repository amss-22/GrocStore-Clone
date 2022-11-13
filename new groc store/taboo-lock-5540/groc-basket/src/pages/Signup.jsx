import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { store} from "../redux/store";
import { Button,InputGroup,InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Signup = () => {

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show)


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const dispatch = useDispatch();

    const user1 = useSelector(store => store.AuthReducer.userData);
    const user = store.getState()
    
    // console.log('user:', user1 );


    const handleSubmit = () => {
        dispatch({
            type: "REGISTER",
            payload : {
                id : (new Date).getTime(),
                name, email, password
            }
        })
    }

    return (
        <div style={{width:"30%",margin:"auto",padding:"7px", boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",marginTop:"50px"}}>

            <h1 
            style={{
                fontSize: "130%",
                fontWeight: "bolder",
                color: "green",
                paddingBottom: "5px",
                textAlign:"center"
                }}>
                Sign up to create an account
            </h1>


            <label>Name</label>
            <Input placeholder='Enter Name' value={name}  onChange = {e => setName(e.target.value)} />

            <h1 style={{marginTop:"15px"}}>Email</h1>
            <Input placeholder='Enter Email' value={email}  onChange = {e => setEmail(e.target.value)} />


            <h1 style={{marginTop:"15px"}}>Password</h1>
            <div>
                <InputGroup size='md'>
                <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                />
               
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
                </InputRightElement>
            </InputGroup>

        </div>
            
            <h1 style={{marginTop:"15px"}}>Confirm paswword</h1>
            <div>
                <InputGroup size='md'>
                <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter Confirmpassword'
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                />
               
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
                </InputRightElement>
            </InputGroup>

        </div>
            
            <div style={{textAlign:"center",marginTop:"32px"}}>
            

            <Link to="/login" >
                <Button value= "Sign Up" onClick = {handleSubmit} colorScheme='teal' variant='outline' size='lg'>
               SIGN UP
             </Button></Link>
            </div>      
        </div>
    )
}

export default Signup
