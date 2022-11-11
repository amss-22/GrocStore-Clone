import React, {useState} from 'react';
import {useDispatch} from "react-redux";


const Signup = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit =() =>{
        dispatch({
            type: "REGISTER",
            payload : {
                id : (new Date).getTime(),
                name, username, password
            }
        })
    }

    return (
        <div>

            <h1 
            style={{
                fontSize: "3  00%;",
                fontWeight: "bolder",
                color: "green",
                paddingBottom: "5px",
                }}>
                Sign Up to create an account
            </h1>


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
            <label>Name</label>
            <input type= "text" placeholder= "Name" value={name}  onChange = {e => setName(e.target.value)}/>
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
            <label>User Name</label>
            <input type= "text" placeholder= "Username" value={username}  onChange = {e => setUsername(e.target.value)} />
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
            <input type= "password" placeholder= "Password" value={password}  onChange = {e => setpassword(e.target.value)} />
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
            <label>confirm Password</label>
            <input type= "password" placeholder= "confirm Password" value={confirmPassword}  onChange = {e => setconfirmPassword(e.target.value)} />
            </div>
            
            <input 
            style={{
                fontSize: "100%",
                width: "150px",
                background: "rgb(10, 255, 100)",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "20px",
                fontWeight: "bolder"
            }}
             type= "button" value= "Sign Up" onClick = {handleSubmit} />
           
            
        </div>
    )
}

export default Signup
