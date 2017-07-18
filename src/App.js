import React, { Component } from 'react';
import osos from './Imagenes/oso.png';
import './App.css';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Appbar from 'muicss/lib/react/appbar';

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Appbar >        
            <ul>
                <li><img src={osos} className="App-logo" alt="logo" /></li>
                <li><a href="#inicio">Inicio|</a></li>
                <li><a href="#quienes">Quiénes Somos|</a></li>
                <li><a href="#hacemos">Qué hacemos|</a></li>
                <li><a href="#equipo">El equipo|</a></li>
                <li><a href="#idea">Tienes una idea|</a></li>
                <li><a href="#contacto">Contactanos|</a></li>
                <li><a href="#redes">Redes</a></li>
            </ul>
        </Appbar>
        </div>
    );
  }
}

export default App;
