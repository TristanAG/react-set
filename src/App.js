import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards'


class App extends Component {
  constructor(props){
    super(props)
    this.renderSelectedCards = this.renderSelectedCards.bind(this)
    this.state = {
      cards: this.props.cards
    }
  }

  renderSelectedCards(props){
    this.setState((prevState) => ({
      activeCards: prevState.activeCards.concat({
        ...props
      })
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="info">
          set-game
        </div>
        <Cards
          cards={this.props.cards}
          renderSelectedCards={this.renderSelectedCards}
        />
      
      </div>
    );
  }
}

export default App;
