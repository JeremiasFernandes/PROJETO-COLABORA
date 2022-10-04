import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from './context/LoginContext';
import { SliderProvider } from './context/sliderContext';
import { MarcadoresProvider } from './context/marcadoresContext';
import { CadastroProvider } from './components/ModalCadastro/ModalCadastroContext';
import { LoginModal } from './components/ModalLogin/ModalLogin_Context';

ReactDOM.render(
  
    <BrowserRouter>
        <LoginProvider>
        <SliderProvider>
        <LoginModal>
          <CadastroProvider>
          <MarcadoresProvider>
            <AppRoutes>
            </AppRoutes>
          </MarcadoresProvider>
          </CadastroProvider>
          </LoginModal>
        </SliderProvider>
        </LoginProvider>
    </BrowserRouter>
  
  ,
  document.getElementById('root')
);

