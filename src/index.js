import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cards = [
  {
    name: 'Card1',
    color: 'red',
    shape: 'diamond',
    amount: 1,
    isActive: false
  },
  {
    name: 'Card2',
    color: 'red',
    shape: 'diamond',
    amount: 2,
    isActive: false
  },
  {
    name: 'Card3',
    color: 'red',
    shape: 'diamond',
    amount: 3,
    isActive: false
  }
]

ReactDOM.render(<App cards={cards}/>, document.getElementById('root'));
registerServiceWorker();
