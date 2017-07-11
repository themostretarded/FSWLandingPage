import React, { Component } from 'react';
import logo from './logo.svg';
import osos from './oso.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" id="inicio">
            <img src={osos} className="App-logo" alt="logo" />
            <h2>Bienvenido a la Fabrica de Software</h2>
                <ul className="">
                <li><a href="#inicio">Inicio|</a></li>
                <li><a href="#quienes">Quiénes Somos|</a></li>
                <li><a href="#hacemos">Qué hacemos|</a></li>
                <li><a href="#equipo">El equipo|</a></li>
                <li><a href="#idea">Tienes una idea|</a></li>
                <li><a href="#contacto">Contactanos|</a></li>
                <li><a href="#redes">Redes</a></li>
                </ul>
        </div>
        <p className="App-intro">La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</p>
        
        <span id="quienes"></span>
            <div className="App-Cuerpo">Somos un grupo de estudiantes de fime comprometidos con el desarrollo de nuestras habilidades como ingenieros en software</div>
        <span id="hacemos"></span>
            <div className="App-Cuerpo">Tratamos de inovar nuestra facultad con proyectos utiles</div>
        <span id="equipo"></span>
            <div className="App-Cuerpo">Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</div>
        <span id="idea"></span>
            <div className="App-Cuerpo">Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</div>
        <span id="contacto"></span>
            <div className="App-Cuerpo">Tel:666-666-66-6</div>
        <span id="redes"></span>
            <div className="App-Cuerpo">facebook? pagina web? algo?</div>
        </div>        
    );
  }
}

export default App;
