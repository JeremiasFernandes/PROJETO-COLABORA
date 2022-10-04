import {useState, createContext} from 'react';



const Modal_CadastroContext = createContext({});


export const CadastroProvider = ({ children }) => {

    const [isOpen,setIsOpen] = useState(false);
    
    return (
      <Modal_CadastroContext.Provider value={{isOpen,setIsOpen}}>
        {children}
      </Modal_CadastroContext.Provider>
    );
};

export default Modal_CadastroContext;