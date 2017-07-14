import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cuerpo from './Cuerpo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Cuerpo />, document.getElementById('cuerpo'));
registerServiceWorker();