import Foundation from 'react-foundation';
import React, { Component } from 'react';
import { Appbar, Button, Container } from 'muicss/react';
import './App.css';

class Cuerpo extends Component {
  render() {
    return (
        <div className="App-Cuerpo">
        
        <h2>Bienvenido a la Fabrica de Software</h2>
            
            <p className="App-intro">La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</p>
            
        <span id="quienes"></span>
        <section className="block">
            <div className="App-Cuerpo">Somos un grupo de estudiantes de fime comprometidos con el desarrollo de nuestras habilidades como ingenieros en software</div>
        </section>
        
        
        <span id="hacemos"></span>
        <section className="block">
            <div className="App-Cuerpo">Tratamos de inovar nuestra facultad con proyectos utiles</div>
        </section>
        
        
        
        <span id="equipo"></span>
            <section className="block">
            <div className="App-Cuerpo">Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</div>
            </section>
        
        
        
        <span id="idea"></span>
            <section className="block">
            <div className="App-Cuerpo">Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</div>
            </section>
        
        
        
        <span id="contacto"></span>
            <section className="block">
            <div className="App-Cuerpo">Tel:666-666-66-6</div>
            </section>
        
        
        
        <span id="redes"></span>
            <section className="block">
            <div className="App-Cuerpo">facebook? pagina web? algo?</div>
            </section>        
            
        </div>
    );
  }
}

export default Cuerpo;
