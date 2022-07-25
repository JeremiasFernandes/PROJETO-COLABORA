import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import LoginContext, { LoginProvider } from './context/LoginContext';
import { SliderProvider } from './context/sliderContext';
import { MarcadoresProvider } from './context/marcadoresContext';

ReactDOM.render(
  
    <BrowserRouter>
        <LoginProvider>
        <SliderProvider>
          <MarcadoresProvider>
            <AppRoutes>
            </AppRoutes>
          </MarcadoresProvider>
        </SliderProvider>
        </LoginProvider>
    </BrowserRouter>
  
  ,
  document.getElementById('root')
);

