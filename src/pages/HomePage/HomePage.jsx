import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import LoginContext from '../../context/LoginContext';
import Logo from '../../assets/images/Logo.png'
import './HomePage.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import { Slider_temporal } from '../../components/SliderTemporal/sliderTemporal';
import sliderContext from '../../context/sliderContext';
import { Mapa } from '../../components/Mapa/mapa';
import AlertDialogSlide from '../../components/MuiDialog/MuiDialog';


//// token de acesso ao mapbox////
const access_token = 'pk.eyJ1IjoiamVyZW1pYXNmZXJuYW5kZXMiLCJhIjoiY2wzcmxqNHVzMGtoeDNrbnkxd2lvZGpzbiJ9.V4PyKX2TWNhFgFAEaRL8Wg'
//// -----------


export function HomePage() {
    const context = useContext(LoginContext);
  
    return (
        <>
            <div className='homepage-container'>
            
               <Mapa>
               </Mapa>
               <AlertDialogSlide>
                </AlertDialogSlide>
                
            </div>
            
            
            <Slider_temporal>
            </Slider_temporal>
        

            {/* {context.isLogged && context.userId != null ? <h1>UserID {context.userId}</h1> : null}
            <h1>Homepage</h1>

            <Link to='Login'>
                Login
            </Link>

            <Link to='Cadastro'>
                Cadastro
            </Link> */}
        </>
    );
}