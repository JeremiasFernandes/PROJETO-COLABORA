import './sliderTemporal.css'
import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import api from '../../services/api';
import LoginContext from '../../context/LoginContext';
import { useContext } from 'react';

import { createContext } from 'react';
import sliderContext from '../../context/sliderContext';




const sliderStyles= makeStyles({
  slider: {
    '& .MuiSlider-markLabel' : {fontFamily: 'Vazir' , fontSize: "12px"}
  }
})


const theme = createTheme({
    palette:{
        primary:{
         main: '#fdda6f'
        },
        secondary: {
          main: '#0971f1'
        },
      }
  });



export function Slider_temporal(){
    
    const context = useContext(sliderContext);

    const handleChange = (event, newValue) => {
        context.setValue(newValue);
        context.filterMarkers(newValue, context.markers);
    };
    
    
    return( <>
            <div className='slider_container'>
                <div className='slider_temporal'>
                    <Box sx={{ width: 200 }}>
                        <ThemeProvider theme={theme}>
                        <Slider
                            value={context.value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            color='primary'
                            min={context.olderMark}
                            max={2022}
                            />
                        </ThemeProvider>
                    </Box>
                </div>
            </div>
            </>
            );

}