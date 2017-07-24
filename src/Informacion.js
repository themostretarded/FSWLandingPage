import Appbar from 'muicss/lib/react/appbar';
import React, { Component } from 'react';
import './App.css';

class Informacion extends Component {
  render() {
    return (
        <Appbar>
        <h3>Mapa del sitio</h3>
        <a href="http://www.freepik.com/free-photos-vectors/background">Background image created by Kjpargeter - Freepik.com</a>
        </Appbar>
    );
  }
}

export default Informacion;