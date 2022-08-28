import { useEffect, useState, createContext} from 'react';
import { useNavigate } from 'react-router-dom';





const Modal_CadastroContext = createContext({});


export const CadastroProvider = ({ children }) => {

    const [isOpen,setIsOpen] = useState(false);


    let navigate = useNavigate();
    
    
    
    return (
      <Modal_CadastroContext.Provider value={{isOpen,setIsOpen}}>
        {children}
      </Modal_CadastroContext.Provider>
    );
};

export default Modal_CadastroContext;