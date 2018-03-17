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
    console.log(this.props)
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
    this.populateCards = this.populateCards.bind(this)
    this.state = {
      isActive: false,
      selectedCards: [],
      cards: this.props.cards
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
    //you need to put it into a component
    this.setState(() => ({
      isActive: false,
      cards: false
    }))

  }

  populateCards(){

  }

  render(){
    return (
      <div>
        <div className="dealtCards">

          <b>{this.state.selectedCards.length === 3 && 'let us rerender now'}</b>

          {this.props.cards.map(card => (
            <Card
              {...card}
              isActive={false}
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
