

import './HomePage.css'

import React from 'react';
import { Slider_temporal } from '../../components/SliderTemporal/sliderTemporal';

import { Mapa } from '../../components/Mapa/mapa';
import AlertDialogSlide from '../../components/MuiDialog/MuiDialog';
import ModalCadastro from '../../components/ModalCadastro/ModalCadastro';

import { ModalLogin } from '../../components/ModalLogin/ModalLogin';





export function HomePage() {
 
  
    return (
        <>
            <div className='homepage-container'>
            
               <Mapa>
               </Mapa>
               <AlertDialogSlide>
                </AlertDialogSlide>   
                <ModalCadastro>
                </ModalCadastro>   
                <ModalLogin>
                </ModalLogin>       
                
            </div>
            
            
            <Slider_temporal>
            </Slider_temporal>
        

        </>
    );
}