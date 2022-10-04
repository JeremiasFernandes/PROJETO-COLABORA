import React, { useEffect, useState } from 'react';

import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import FormControl from '@mui/material/FormControl';






export const ControlledSelect_cidades = ({ name, value, options, onFocus, onChange, onBlur }) => {
    const [localValue, setLocalValue] = useState(value ?? '');  // we want to keep value locally
   

    useEffect(() => setLocalValue(value ?? ''), [value]);       // we want to update local value on prop value change
    
  
    
    const handleChange = (e) => {
        const value = e.target.value;
        setLocalValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    
    return (
       
        <FormControl fullWidth>        
        <Select
          name={name}
          value={localValue}      // we want to work in controlled mode
          onChange={handleChange} // we want to work in controlled mode
        >
          {options.map(option => {
              return (
                <MenuItem value={option.label}>
                  {option.label}
                </MenuItem>
              );
          })}
        </Select>
        </FormControl>
    
    );
};

export default ControlledSelect_cidades;