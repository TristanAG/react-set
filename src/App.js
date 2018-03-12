import React, { Component } from 'react';
import './App.css';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick(){
    this.props.sendCardInfoToGameManager(this.props.name)
  }

  render(){
    return (
      <div className="card" onClick={this.handleCardClick}>
        <p>{this.props.name}</p>
        <p>{this.props.isActive ? 'active' : 'not active'}</p>
      </div>
    )
  }
}

class DealtCards extends React.Component {
  constructor(props){
    super(props)
    this.sendCardInfoToGameManager = this.sendCardInfoToGameManager.bind(this)
  }

  sendCardInfoToGameManager(name){
    console.log(name)
    this.props.renderSelectedCard(name)
  }

  render(){
    return (
      <div className="dealtCards">
        {this.props.cards.map(card => (
          <Card {...card} key={card.name} sendCardInfoToGameManager={this.sendCardInfoToGameManager}/>
        ))}

      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.renderSelectedCard = this.renderSelectedCard.bind(this)
    console.log(props.cards)
  }

  renderSelectedCard(name){
    console.log(name)
  }

  render() {
    return (
      <div className="app">
        <div className="gameManager">
          <b>gameManager:</b>
        </div>
        <div className="info">
          info: ///
        </div>
        <DealtCards cards={this.props.cards} renderSelectedCard={this.renderSelectedCard}/>
      </div>
    );
  }
}

export default App;
