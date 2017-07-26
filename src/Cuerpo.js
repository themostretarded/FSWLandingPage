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
                <h1>Bienvenido a la Fabrica de Software</h1>
                <h2>La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</h2>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="hacemos" ></span>
                <h1>Que hacemos</h1>
                <h2>Tratamos de inovar nuestra facultad con proyectos utiles</h2>
            </Panel>
            
            <Panel className="mui--z4">
                <span id="equipo"></span>
                        <h1>Nuestro Equipo</h1>
                        <h2>Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</h2>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="idea"></span>
                <h1>Tienes una idea</h1>
                <h2>Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</h2>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="redes"></span>
                <h1>Nuestros medios</h1>
                <h3>facebook? pagina web? algo?</h3>
                <div className="mui--text-body2">Si te interesa formar parte del equipo no dudes en contactarnos</div>
            </Panel>
        </div>
    );
  }
}

export default Cuerpo;
