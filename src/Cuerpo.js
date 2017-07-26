import React, { Component } from 'react';
import './Cuerpo.css';
import Panel from 'muicss/lib/react/panel';
import equipo from './Imagenes/est.jpg';

class Cuerpo extends Component {
  render() {
    return (
        <div className="App-Cuerpo">
            <br></br>
            <Panel className="mui--z4">
                <h2>Bienvenido a la Fabrica de Software</h2>
                <h3>La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</h3>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="hacemos" ></span>
                <h2>Que hacemos</h2>
                <h3>Tratamos de inovar nuestra facultad con proyectos utiles</h3>
            </Panel>
            
            <Panel className="mui--z4">
                <span id="equipo"></span>
                        <h2>Nuestro Equipo</h2>
                        <h3>Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</h3>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="idea"></span>
                <h2>Tienes una idea</h2>
                <h3>Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</h3>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="redes"></span>
                <h2>Nuestros medios</h2>
                <h3>facebook? pagina web? algo?</h3>
                <h3>Si te interesa formar parte del equipo no dudes en contactarnos</h3>
            </Panel>
        </div>
    );
  }
}

export default Cuerpo;
