import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker';

import GreenDiamondOneEmpty from './images/green-diamond-one-empty.png'
import PurpleDiamondOneFilled from './images/purple-diamond-one-filled.png'
import PurpleDiamondOneEmpty from './images/purple-diamond-one-empty.png'
import GreenDiamondOneStriped from './images/green-diamond-one-striped.png'
import RedDiamondThreeEmpty from './images/red-diamond-three-empty.png'
import PurpleOvalThreeStriped from './images/purple-oval-three-striped.png'
import GreenDiamondOneFilled from './images/green-diamond-one-filled.png'

const cards = [
  {
    name: 'Card1',
    color: 'green',
    shape: 'diamond',
    amount: 1,
    fill: 'empty',
    isActive: false,
    image: GreenDiamondOneEmpty
  },
  {
    name: 'Card2',
    color: 'purple',
    shape: 'diamond',
    amount: 1,
    fill: 'filled',
    isActive: false,
    image: PurpleDiamondOneFilled
  },
  {
    name: 'Card3',
    color: 'purple',
    shape: 'diamond',
    amount: 1,
    fill: 'empty',
    isActive: false,
    image: PurpleDiamondOneEmpty
  },
  {
    name: 'Card4',
    color: 'green',
    shape: 'diamond',
    amount: 1,
    fill: 'striped',
    isActive: false,
    image: GreenDiamondOneStriped
  },
  {
    name: 'Card5',
    color: 'red',
    shape: 'diamond',
    amount: 3,
    fill: 'empty',
    isActive: false,
    image: RedDiamondThreeEmpty
  },
  {
    name: 'Card6',
    color: 'purple',
    shape: 'oval',
    amount: 3,
    fill: 'striped',
    isActive: false,
    image: PurpleOvalThreeStriped
  },
  {
    name: 'Card7',
    color: 'green',
    shape: 'diamond',
    amount: 1,
    fill: 'filled',
    isActive: false,
    image: GreenDiamondOneFilled
  }

]

ReactDOM.render(<App cards={cards}/>, document.getElementById('root'));
registerServiceWorker();
