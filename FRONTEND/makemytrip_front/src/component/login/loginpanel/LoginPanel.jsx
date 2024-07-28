
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";
import Auth from "../../../auth";
import styled from 'styled-components'
const Style = styled.div`
.loginMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
  }
  .login-wrap {
    top: 50%;
    left: 50%;
    bottom: auto; /* Adjusted to auto for better centering */
    right: auto; /* Adjusted to auto for better centering */
    width: 480px;
    height: auto;
    min-height: 500px;
    padding: 40px 50px; /* Adjusted padding */
    min-width: 450px;
    border-radius: 12px; /* Slightly increased border-radius */
    position: fixed;
    z-index: 2;
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Gradient background */
    color: white; /* Changed text color to white for better contrast */
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Larger and darker box-shadow */
    display: flex;
    flex-direction: column;
    gap: 20px; /* Increased gap for more spacing */
  }

  .close {
    font-size: 20px;
    text-align: right;
  }
  .close > span {
    cursor: pointer;
  }
  
`;
export const LoginPanel = ({ handleClick, handleUser }) => {

  const [otpSend, setOtpSend] = useState(false);
  const [findUser, setFindUser] = useState({});
  const [isUserExist, setIsUserExist] = useState(); //initial existence of user

  const checkIsUserExist=(mob)=>{

    setIsUserExist(false)
  
  }

  const [state,setState] = useState({
    phone:"",
    hash:"",
    otp:""
  });

  const {phone,hash,otp} = state;
  const value = {phone,hash,otp}

  const handleOtpSend = () => {
    setOtpSend(true);
  };

// handling with user login inputs
    const handleChange = (input)=>(e)=>{

      setState({...state,[input]:e.target.value});
    }
  
    //handling has status
    const hashHandleChange = (hash)=>{
      setState({...state, hash:hash});
    }
    const handleNewUser = (newuser)=>{
    
      handleUser(newuser)
    }

  return (
  <Style>
      <div className="loginMain">
      <div className="login-wrap">
        {
          (Auth.isAuthenticated()&& isUserExist ) ?handleNewUser(findUser):
        
       otpSend ? (
          <ConfirmOtp
                handleNewUser = {checkIsUserExist}
                handleChange={handleChange}           // handling with user login inputs          
                value = {value}
          />
        ) :(
          <LoginForm 
          handleOtpStatus={handleOtpSend} 
          handleChange={handleChange}           // handling with user login inputs
          hashHandleChange={hashHandleChange}   //handling has status
          value = {value}
          
          />
        )}
      </div>
    </div>
  </Style>
  );
};
