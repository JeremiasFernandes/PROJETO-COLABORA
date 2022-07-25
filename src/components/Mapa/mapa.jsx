import { MapContainer, TileLayer, Marker, Popup, useMapEvents, MapEvents} from 'react-leaflet'
import sliderContext from '../../context/sliderContext';
import { useContext, useEffect } from 'react';
import './mapa.css'
import marcadoresContext from '../../context/marcadoresContext';
import AlertDialogSlide from '../MuiDialog/MuiDialog';



export function Mapa(){
    const context = useContext(sliderContext)
    const marcadores_context = useContext(marcadoresContext)
    
    
    
    const getMarcadores = async () =>{
        context.GetMarcadores();
    };
    useEffect(()=>{
        getMarcadores();
    }, []);


    
    const MapEvents = () => {
        useMapEvents({
          click(e) {
            marcadores_context.setLat(e.latlng.lat)
            marcadores_context.setLong(e.latlng.lng)
            marcadores_context.setOpen(true)
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
        <Marker position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} key={idx}>
            
        <Popup>
            {marker.Tipo}
        </Popup>
        </Marker>))}
        <MapEvents />
    </MapContainer>

    </div>
    </>
    )
};