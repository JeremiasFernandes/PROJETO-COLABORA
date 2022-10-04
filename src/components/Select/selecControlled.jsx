import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@mui/material/FormControl';



export const ControlledSelect = ({ name, value, onFocus, onChange, onBlur }) => {
    const [localValue, setLocalValue] = useState(value ?? '');  // we want to keep value locally
    useEffect(() => setLocalValue(value ?? ''), [value]);       // we want to update local value on prop value change
    


    const handleChange = (e) => {
        const value = e.target.value;
        setLocalValue(value);
        if (onChange) {
            onChange(value);
        }
    };
    

    const Estados = [
        {label:'Rondônia',value: 11},
        {label:'Acre', value: 12},
        {label:'Amazonas', value: 13},
        {label:'Roraima',value: 14},
        {label:'Pará',value: 15},
        {label:'Amapá',value: 16},
        {label:'Tocantins',value: 17},
        {label:"Maranhão",value: 21},
        {label: 'Piauí',value: 22},
        {label:'Ceará',value: 23},
        {label:'Rio Grande do Norte',value: 24},
        {label: 'Paraíba',value: 25},
        {label: 'Pernambuco',value: 26},
        {label:'Alagoas',value: 27},
        {label:'Sergipe',value: 28},
        {label:'Bahia',value: 29},
        {label: 'Minas Gerais',value: 31},
        {label:'Espírito Santo',value: 32},
        {label: 'Rio de Janeiro',value: 33},
        {label:'São Paulo',value: 35},
        {label:'Paraná',value: 41},
        {label:'Santa Catarina',value: 42},
        {label:'Rio Grande do Sul',value: 43},
        {label:'Mato Grosso do Sul',value: 50},
        {label:'Mato Grosso',value: 51},
        {label:'Goiás',value: 52},
        {label:'Distrito Federal',value: 53}
        ]
    
    return (
       
        <FormControl fullWidth>        
        <Select
          name={name}
          value={localValue}      // we want to work in controlled mode
          onChange={handleChange} // we want to work in controlled mode

        >
          {Estados.map(option => {
            
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              );
          })}
        </Select>
        </FormControl>
    
    );
};

export default ControlledSelect;