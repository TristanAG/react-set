import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
  constructor(props){
    super(props)
    this.renderSelectedCards = this.renderSelectedCards.bind(this)
    this.state = {
      cards: this.shuffleCards()
    }
  }

  shuffleCards(){
    const cards = this.props.cards
    cards.length = 16
    return cards
  }

  renderSelectedCards(props){
    this.setState((prevState) => ({
      activeCards: prevState.activeCards.concat({...props})
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="columns">
          <div className="column">
            <div className="info">
              set-game
            </div>
            <div className="content">
              <p><a href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf" target="none">how to play</a></p>
            </div>
          </div>
        </div>
        <Board
          cards={this.props.cards}
          renderSelectedCards={this.renderSelectedCards}
        />
      </div>
    );
  }
}

export default App;
