import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { store} from "../redux/store";
import { Button,InputGroup,InputRightElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {useNavigate,useLocation} from "react-router-dom";
import './login.css';



const Signup = () => {

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const dispatch = useDispatch();
    const user1 = useSelector (store => store.AuthReducer.userData);
    const user = store.getState();
    const navigate = useNavigate();


    const handleSubmit = () => {

        const minLengthRegExp = /.{4,}/;
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const digitsRegExp = /(?=.*?[0-9])/;

        const passwordLength = password.length;
        const minLengthPassword = minLengthRegExp.test(password);
        const uppercasePassword = uppercaseRegExp.test(password);
        const digitsPassword = digitsRegExp.test(password);

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

         
        if(name === ""){
            alert("Please type your Name");
            return false;

        }else if(email === ""){
            alert("Please type your Email");
            return false;

        }else if (!email.match(validRegex)) {
            alert("Not Valid email address!");
            return false;

        }else if(passwordLength === 0){
            alert("Password is empty");
            return false;

        }else if(confirmPassword === " "){
            alert("Confirm Password is empty");
            return false;    

        }else if(!minLengthPassword){
            alert("Password At least minumum 4 characters");
            return false;
            
        }else if(!uppercasePassword){
            alert("Please type At least one Uppercase in Password");
            return false;
            
        }else if(!digitsPassword){
            alert("Please type At least one digit in Password");
            return false;

        }else if(password !== confirmPassword ){
            alert("Your Password and Confirm Password  didn't match");
            return false;

        }    
            
        dispatch({

            type: "REGISTER",
            payload : {
                id : (new Date).getTime(),
                name, email, password
            }
        })
        navigate('/login');
    }


    return (
        <div className='signup_main' style={{}}>

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
            <Input placeholder='Enter Email' type={email} value={email}  onChange = {e => setEmail(e.target.value)} />


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
            

            
                <Button value= "Sign Up" onClick = {handleSubmit} colorScheme='teal' variant='outline' size='lg'>
               SIGN UP
             </Button>
             
            </div>      
        </div>
    )
}

export default Signup