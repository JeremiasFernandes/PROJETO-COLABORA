// https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia

import React, { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
//types com TS

// interface AuthContextData {
//     signed: boolean;
//     Login(): Promise<void>;
// }

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

    const [userId,setUserId] = useState(null);
    const [userName,setUserName] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
   

    let navigate = useNavigate();
    
 
    

    function Login(data) {
        api.get(`/users/${data.username}/${data.password}`)
        .then((response)=>{
          setIsLogged(true);
          setUserId(response.data.user_id);
          setUserName(response.data.username);
          navigate("/colabora", { replace: true }) 
        })
        .catch((error)=>{
          alert(error.response.data.detail);
        })
    }

    function Logout(){
      setIsLogged(false);
      setUserId(null);
      setUserName(null);
      navigate("/", { replace: true }) 
    }
    
    return (
      <LoginContext.Provider value={{ isLogged: false, Login,userId,setUserId,isLogged,setIsLogged,Logout,userName,setUserName}}>
        {children}
      </LoginContext.Provider>
    );
};

export default LoginContext;