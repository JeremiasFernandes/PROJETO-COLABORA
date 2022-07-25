
import { useContext, useEffect } from 'react';
import LoginContext from '../../context/LoginContext';
import React from 'react';
import { Slider_temporal } from '../../components/SliderTemporal/sliderTemporal';
import { Mapa } from '../../components/Mapa/mapa';
import './colabora.css'



export function Colabora() {
    const context = useContext(LoginContext);
  
    return (
        <>
            <div className='homepage-container'>
            
               <Mapa></Mapa>
                
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