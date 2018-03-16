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
    this.props.sendCardInfoToGameManager(this.props.name)
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


    this.state = {
      isActive: false,
      selectedCards: []
    }


  }

  sendCardInfoToGameManager(selectedCard){

    if(this.state.selectedCards.includes(selectedCard)){
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.filter((card) => {
          return selectedCard !== card
        })
      }))
    } else {
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.concat(selectedCard)
      }),() => {
        //this is the callback that executes after react actually sets the state

        if(this.state.selectedCards.length === 3){
          console.log('hey')
        }
      })
    }
  }

  render(){
    return (
      <div>
        <div className="dealtCards">
          <p>
            {

            }
          </p>
          <b>{this.state.selectedCards}</b>

          {this.props.cards.map(card => (
            <Card
              {...card}
              isActive={this.state.isActive}
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
