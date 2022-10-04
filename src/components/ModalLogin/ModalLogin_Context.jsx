import React, { createContext } from 'react';
import { useState } from 'react';

const Modal_LoginContext = createContext({});

export const LoginModal = ({ children }) => {

    const [isOpen,setIsOpen] = useState(false);
    
    return (
      <Modal_LoginContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </Modal_LoginContext.Provider>
    );
};

export default Modal_LoginContext;