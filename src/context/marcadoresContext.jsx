
import React, { createContext } from 'react';
import { useState } from 'react';


const marcadoresContext = createContext({});

export const MarcadoresProvider = ({ children }) => {

    const [Lat,setLat] = useState(null);
    const [Long,setLong] = useState(null);
    const [open, setOpen] = useState(false);
  
    return (
      <marcadoresContext.Provider value={{Lat, setLat, Long, setLong, open, setOpen}}>
        {children}
      </marcadoresContext.Provider>
    );
};

export default marcadoresContext;