import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//types com TS

// interface AuthContextData {
//     signed: boolean;
//     Login(): Promise<void>;
// }

const ModalLoginContext = createContext({});

export const LoginModal = ({ children }) => {

    const [isOpen,setIsOpen] = useState(false);
    
    return (
      <ModalLoginContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </ModalLoginContext.Provider>
    );
};

export default ModalLoginContext;