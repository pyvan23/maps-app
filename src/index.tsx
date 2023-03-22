import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoicHl2YW4iLCJhIjoiY2xhM3ZwZGZoMHB6ODNvcnBnNDF1ODB6diJ9.XQSkbnw6uQSd9LSANMQKLQ';

if (!navigator.geolocation) {
  alert('Tu navergador no tiene a opcion de acceder a la geoocalizacion')
  throw new Error("No se puede acceer a la Geolocalizacion");

}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

