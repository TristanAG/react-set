import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker';
import SetDeck from './SetDeck'
import Mess from 'mess'

ReactDOM.render(
  <App cards={Mess(SetDeck)}/>,
document.getElementById('root'));
registerServiceWorker();
