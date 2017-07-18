import React, { Component } from 'react';
import './Cuerpo.css';
import Panel from 'muicss/lib/react/panel';

class Cuerpo extends Component {
  render() {
    return (
        <div className="App-Cuerpo">
            <br></br>
            <Panel>        
                <div className="mui--text-display3" id="inicio">Bienvenido a la Fabrica de Software</div>
                <div className="App-intro">La fabrica de software es un apartado de la fime para el desarrollo de diferentes proyectos para la universidad pero principal mente para la fime</div>
                <br></br>
            </Panel>
            
            <Panel>     
                <span id="quienes"></span>
                <div className="mui--text-headline" >Quienes Somos</div>
                <div className="mui--text-body2">Somos un grupo de estudiantes de fime comprometidos con el desarrollo de nuestras habilidades como ingenieros en software</div>        
            </Panel>
        
            <Panel>
                <span id="hacemos"></span>
                <div className="mui--text-headline">Que hacemos</div>
                <div className="mui--text-body2">Tratamos de inovar nuestra facultad con proyectos utiles</div>
            </Panel>        
            <Panel>
                <span id="equipo"></span>
                <div className="mui--text-headline">Nuestro Equipo</div>
                <div className="mui--text-body2">Grupo de estudiantes"Posibles tarjetas con redes sociales y puesto"</div>
            </Panel>
        
            <Panel>
                <span id="idea"></span>
                <div className="mui--text-headline">Tienes una idea</div>
                <div className="mui--text-body2">Usted persona o empresa tiene alguna idea para su negocio, No dude en contactarnos nosotros nos encargamos</div>
            </Panel>
        
            <Panel>
                <span id="contacto"></span>
                <div className="mui--text-headline">Contactanos</div>
                <div className="mui--text-body2">Tel:666-666-66-6</div>
            </Panel>
        
            <Panel>
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
