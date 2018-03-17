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

  handleCardClick(e){
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }))
    this.props.sendCardInfoToGameManager(this.props)
  }

  render(){
    return (
      <div className="card" onClick={this.handleCardClick}>
        <p>{this.props.name}</p>
        <p>{this.props.color}</p>
        <p>{this.props.shape}</p>
        <p>{this.props.amount}</p>
        <p><i>{this.state.isActive ? 'active' : 'not active'}</i></p>
      </div>
    )
  }
}

class Cards extends React.Component {
  constructor(props){
    super(props)
    this.sendCardInfoToGameManager = this.sendCardInfoToGameManager.bind(this)
    this.resetDeck = this.resetDeck.bind(this)
    this.state = {
      isActive: false,
      selectedCards: [],
      cards: this.props.cards,
      sets: []
    }
  }

  sendCardInfoToGameManager(selectedCard){
    if(this.state.selectedCards.includes(selectedCard.name)){
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.filter((card) => {
          return selectedCard.name !== card
        })
      }))
    } else {
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.concat(selectedCard.name)
      }),() => {
        if(this.state.selectedCards.length === 3){
          this.determineIfMatch()
        }
      })
    }
  }

  determineIfMatch(){
    //so within this function we can begin to check if match or !match



    console.log(this.state.selectedCards)

    this.setState((prevState) => ({
      sets: prevState.sets.concat(this.state.selectedCards),
      selectedCards: []
    }))

  }

  resetDeck(){
    console.log('hello world')
    this.setState(() => ({
      selectedCards: 'hi'
    }))
  }

  render(){
    return (
      <div>
        <div className="dealtCards">

          {this.state.selectedCards.length < 3 &&
            this.props.cards.map(card => (
              <Card
                {...card}
                key={card.name}
                sendCardInfoToGameManager={this.sendCardInfoToGameManager}
              />
            ))
          }
        </div>
        <div className="sets">
          {this.state.sets}
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
      activeCards: [],
      cards: this.props.cards
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
