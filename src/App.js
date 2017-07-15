import React, { Component } from 'react';
import osos from './oso.png'
import './App.css';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar id="inicio">
            <img src={osos} className="App-logo" alt="logo" />
            <ul>
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
