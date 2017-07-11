import React, { Component } from 'react';
import logo from './logo.svg';
import osos from './oso.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={osos} className="App-logo" alt="logo" />
            <h2>Bienvenido a la Fabrica de Software</h2>
                <ul className="">
                <li><a href="">Proyecto|</a></li>
                <li><a href="">Estudiantes|</a></li>
                <li><a href="">Voluntarios</a></li>
                </ul>
        </div>
        <p className="App-intro">La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</p>
        </div>        
    );
  }
}

export default App;
