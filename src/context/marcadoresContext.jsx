// https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia

import React, { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';

const marcadoresContext = createContext({});

export const MarcadoresProvider = ({ children }) => {

    const [Lat,setLat] = useState(null);
    const [Long,setLong] = useState(null);
    const [open, setOpen] = useState(false);
   

    let navigate = useNavigate();
    
 
    

    // function Login(data) {
    //     api.get(`/users/${data.username}/${data.password}`)
    //     .then((response)=>{
    //       setIsLogged(true);
    //       setUserId(response.data.user_id);
    //       setUserName(response.data.username);
    //       navigate("/colabora", { replace: true }) 
    //     })
    //     .catch((error)=>{
    //       alert(error.response.data.detail);
    //     })
    // }

    // function Logout(){
    //   setIsLogged(false);
    //   setUserId(null);
    //   setUserName(null);
    //   navigate("/", { replace: true }) 
    // }
    
    return (
      <marcadoresContext.Provider value={{Lat, setLat, Long, setLong, open, setOpen}}>
        {children}
      </marcadoresContext.Provider>
    );
};

export default marcadoresContext;