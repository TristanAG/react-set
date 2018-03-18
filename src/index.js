import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import GreenDiamondOneEmpty from './images/green-diamond-one-empty.png'
import PurpleDiamondOneFilled from './images/purple-diamond-one-filled.png'
import PurpleDiamondOneEmpty from './images/purple-diamond-one-empty.png'

const cards = [
  {
    name: 'Card1',
    color: 'red',
    shape: 'diamond',
    amount: 1,
    isActive: false,
    image: GreenDiamondOneEmpty
  },
  {
    name: 'Card2',
    color: 'red',
    shape: 'diamond',
    amount: 2,
    isActive: false,
    image: PurpleDiamondOneFilled
  },
  {
    name: 'Card3',
    color: 'red',
    shape: 'diamond',
    amount: 3,
    isActive: false,
    image: PurpleDiamondOneEmpty
  }
]

ReactDOM.render(<App cards={cards}/>, document.getElementById('root'));
registerServiceWorker();
