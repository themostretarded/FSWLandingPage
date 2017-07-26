import Appbar from 'muicss/lib/react/appbar';
import React, { Component } from 'react';
import './App.css';

class Informacion extends Component {
  render() {
    return (
        <Appbar>
        <h3>Mapa del sitio</h3>
        <h4>Posiblemente las licencias en caso de usarse software bajo licencia</h4>
        <h4>Agregar logotipos de certificaciones a nivel institucional</h4>
        </Appbar>
    );
  }
}

export default Informacion;