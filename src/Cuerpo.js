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
                <div className="mui--text-display3" id="inicio">Bienvenido a la Fabrica de Software</div>
                <div className="App-intro">La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</div>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="hacemos" ></span>
                <div className="mui--text-headline">Que hacemos</div>
                <div className="mui--text-body2">Tratamos de inovar nuestra facultad con proyectos utiles</div>
            </Panel>
            
            <Panel className="mui--z4">
                <span id="equipo"></span>
                <table>
                    <tr>
                        <td>
                        <img src={equipo} className="inchesImagenes"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="mui--text-headline">Nuestro Equipo</div>
                        <div className="mui--text-body2">Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</div>
                        </td>
                    </tr>
                </table>                
            </Panel>
        
            <Panel className="mui--z4">
                <span id="idea"></span>
                <div className="mui--text-headline">Tienes una idea</div>
                <div className="mui--text-body2">Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</div>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="contacto"></span>
                <div className="mui--text-headline">Contactanos</div>
                <div className="mui--text-body2">Tel:666-666-66-6</div>
            </Panel>
        
            <Panel className="mui--z4">
                <span id="redes"></span>
                <div className="mui--text-headline">Nuestras Redes</div>
                <div className="mui--text-body2">facebook? pagina web? algo?</div>
                <div className="mui--text-body2">Si te interesa formar parte del equipo no dudes en contactarnos</div>
            </Panel>
        </div>
    );
  }
}

export default Cuerpo;
