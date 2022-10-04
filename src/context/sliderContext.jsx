
import React, { createContext } from 'react';
import { useState } from 'react';

import api from '../services/api';



const sliderContext = createContext({});

export const SliderProvider = ({ children }) =>{
    const [markers, setMarkers] = useState([])
    const [olderMark, setOlderMark] = useState(null)
    const [value, setValue] = useState([2010,2022]);
    // let [filtredList, setFiltredList] = useState([]);
    
    let aux = new Date().getFullYear();
    
    function GetMarcadores(){
        api.get('/marcadores/')
        .then((response)=>{
            setMarkers([...response.data]);
            for (let i=0; i <  response.data.length; i++){
                if (response.data[i].ano < aux){
                    aux = response.data[i].ano;
                };
            setOlderMark(aux)
            };
         })
        .catch((error)=>{
            alert('Erro com api');
        })
   }
   

   
   
   function filterMarkers(value, markers){
      let aux_list = []
     
       for (let i = 0; i < markers.length; i++){
            if (markers[i].ano >= value[0] && markers[i].ano <= value[1]){
                aux_list.push(markers[i]);
            }
        }
        return (aux_list);
   }
   

   return (
       <sliderContext.Provider value={{markers, olderMark, filterMarkers,value, setValue, GetMarcadores}}>
           {children}
       </sliderContext.Provider>
   )
};

export default sliderContext;