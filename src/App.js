import React, { Component } from 'react';
import './App.css';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.state = {
      isActive: false
    }
  }

  //what if you sent up all the fucking card data, and then when you render the cards from the Cards you render the correct data?!?
  handleCardClick(){
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }))
    this.props.sendCardInfoToGameManager(this.state.isActive)

  }

  render(){
    return (
      <div className="card" onClick={this.handleCardClick}>
        <p>{this.props.name}</p>
        <p>{this.state.isActive ? 'active' : 'not active'}</p>
      </div>
    )
  }
}

class Cards extends React.Component {
  constructor(props){
    super(props)
    this.sendCardInfoToGameManager = this.sendCardInfoToGameManager.bind(this)
  }

  sendCardInfoToGameManager(e){
    console.log(e)
    // this.props.renderSelectedCards(props)
  }

  render(){
    return (
      <div>
        <div className="dealtCards">
          {this.props.cards.map(card => (
            <Card
              {...card}
              // isActive={true}
              key={card.name}
              sendCardInfoToGameManager={this.sendCardInfoToGameManager}
            />
          ))}
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.renderSelectedCards = this.renderSelectedCards.bind(this)
    this.state = {
      activeCards: []
    }
  }



  renderSelectedCards(props){
    // console.log(props.isActive)

    this.setState((prevState) => ({
      activeCards: prevState.activeCards.concat({
        ...props
      })
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="gameManager">
          <b>gameManager: {this.state.activeCards.length}</b>
        </div>
        <div className="info">
          info: ///
        </div>
        <Cards cards={this.props.cards} renderSelectedCards={this.renderSelectedCards}/>
      </div>
    );
  }
}

export default App;
