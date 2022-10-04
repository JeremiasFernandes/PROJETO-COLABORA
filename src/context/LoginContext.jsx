
import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ModalLoginContext from '../components/ModalLogin/ModalLogin_Context';
import api from '../services/api';


const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

    const [userId,setUserId] = useState(null);
    const [userName,setUserName] = useState(null);
    const [isLogged, setIsLogged] = useState('0');
    
    const modal_login_context = useContext(ModalLoginContext)
   

    let navigate = useNavigate();
    
 
    useEffect(()=>{
      setIsLogged(localStorage.getItem('isLogged'))
    }, [])

    function Login(data) {
        
        api.get(`/users/${data.username}/${data.password}`)
        .then((response)=>{
          setIsLogged('1');
          localStorage.setItem('isLogged', '1')
          setUserId(response.data.username);
          setUserName(response.data.username);
          modal_login_context.setIsOpen(false);
          navigate("/", { replace: true }) 
        })
        .catch((error)=>{
          alert(error.response.data.detail);
        })
    }

    function Logout(){
      setIsLogged('0');
      localStorage.setItem('isLogged', '0')
      setUserId(null);
      setUserName(null);
      navigate("/", { replace: true }) 
    }
    
    return (
      <LoginContext.Provider value={{Login,userId,setUserId,isLogged,setIsLogged,Logout,userName,setUserName}}>
        {children}
      </LoginContext.Provider>
    );
};

export default LoginContext;