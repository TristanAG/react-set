import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
  constructor(props){
    super(props)
    this.renderSelectedCards = this.renderSelectedCards.bind(this)

    this.state = {
      cards: this.shuffleCards(),
      test: '<< tristanag'
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
              react-set
            </div>
            <div className="content">
              by <a class="has-text-primary" href="http://www.tristangruener.com"> {this.state.test}</a> <br/>
               <a href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf" target="none" class="has-text-grey" style={{textDecoration: "underline"}}>how to play</a>
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
