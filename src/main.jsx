import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifApp } from './Components/GifApp';
import 'bootstrap/dist/css/bootstrap.min.css';

// BXVGJ32gKZxqeeWz6TlGWt4MhK3yCQKT


ReactDOM.createRoot(document.getElementById('root')).render(
  /// EL STRICT MODE SE COMENTA PARA QUE NO SE GENERE DOBLE PETICION AL BUSCAR LOS GIFS
  // <React.StrictMode> 
    <GifApp />
  // </React.StrictMode>
)