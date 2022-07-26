import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import {icon, divIcon} from 'leaflet'
import sliderContext from '../../context/sliderContext';
import { useContext, useEffect } from 'react';
import './mapa.css'
import marcadoresContext from '../../context/marcadoresContext';
import LoginContext from '../../context/LoginContext';
import { ImOffice } from "react-icons/im";
import { requirePropFactory } from '@material-ui/core';



export function Mapa(){
    const context = useContext(sliderContext)
    const marcadores_context = useContext(marcadoresContext)
    const loginContext = useContext(LoginContext)
    const icon1 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-2'></div><i class='material-icons'></i>",
        iconSize: [32, 38],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    

    const icon2 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-1'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [-10,-40]
    });
    
    
    const icon3 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-3'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    const icon4 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-4'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    
    const icon5 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-5'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    
    const icon6 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-6'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    const icon7 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-7'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    const icon8 = divIcon({
        className: 'custom-div-icon',
        html: "<div class='marker-pin-8'></div><i class='material-icons'></i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-20]
    });
    
    
    const getMarcadores = async () =>{
        context.GetMarcadores();
    };
    useEffect(()=>{
        getMarcadores();
    }, []);


    
    const MapEvents = () => {
        useMapEvents({
          click(e) {
            if (loginContext.isLogged === '1'){
                marcadores_context.setLat(e.latlng.lat)
                marcadores_context.setLong(e.latlng.lng)
                marcadores_context.setOpen(true)
            }
        },
        });
        return false;
    }
    
    

    let listFiltred = context.filterMarkers(context.value, context.markers)
    console.log(listFiltred)
    return ( <>
    
    <div className='leaflet-container'>
    <MapContainer 
        center={[-19.924067341646456, -43.94388588807173]} 
        zoom={13} 
        scrollWheelZoom={true}
    >
    <TileLayer
        url="https://api.mapbox.com/styles/v1/jeremiasfernandes/cl3rm9bz200al15l7w0dey8et/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVyZW1pYXNmZXJuYW5kZXMiLCJhIjoiY2wzcmxqNHVzMGtoeDNrbnkxd2lvZGpzbiJ9.V4PyKX2TWNhFgFAEaRL8Wg"
        attribution="<a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
    />
        {listFiltred.map((marker, idx)=>(
            marker.Tipo === "Prédio Verticalizado" ?
                    <div className='marker'>
                        <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon1}>
                            <Popup>
                                {marker.Tipo}
                            </Popup>
                        </Marker>
                    </div>
                    : 
                    marker.Tipo === "Terreno" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon2}>
                    <Popup>
                        {marker.Tipo}
                    </Popup> 
                    </Marker>
                    : 
                     marker.Tipo === "Antigos Casarões" ?
                        <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon3}>
                            <Popup>
                        {marker.Tipo}
                            </Popup>
                        </Marker>
                    :
                    marker.Tipo === "Favela" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon4}>
                        <Popup>
                    {marker.Tipo}
                        </Popup>
                    </Marker>
                    :
                    marker.Tipo === "Instalação fabril/galpão" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon5}>
                        <Popup>
                    {marker.Tipo}
                        </Popup>
                    </Marker>
                    :
                    marker.Tipo === "Conjunto de casas" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon6}>
                        <Popup>
                    {marker.Tipo}
                        </Popup>
                    </Marker>
                    :
                    marker.Tipo === "Edifício Institucional/Equipamento público" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon7}>
                        <Popup>
                    {marker.Tipo}
                        </Popup>
                    </Marker>
                    :
                    marker.Tipo === "Outro" ?
                    <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx} icon={icon8}>
                        <Popup>
                    {marker.Tipo}
                        </Popup>
                    </Marker>
                    :
                        null
                    

            ))}
          
                
         
        <MapEvents />
    </MapContainer>

    </div>
    </>
    )
};