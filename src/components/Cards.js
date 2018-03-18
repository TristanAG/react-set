import React from 'react'
import Card from './Card'

class Cards extends React.Component {
  constructor(props){
    super(props)
    this.addCardToHand = this.addCardToHand.bind(this)
    this.state = {
      isActive: false,
      selectedCards: [],
      cards: this.props.cards,
      sets: []
    }
  }

  addCardToHand(selectedCard){
    console.log(selectedCard)
    if(this.state.selectedCards.includes(selectedCard)){
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.filter((card) => {
          return selectedCard.name !== card.name
        })
      }))
    } else {
      this.setState((prevState) => ({
        selectedCards: prevState.selectedCards.concat(selectedCard)
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

  render(){
    return (
      <div>
        <div className="dealtCards">
          {
            this.state.selectedCards.length < 3 &&
              this.props.cards.map(card => (
                <Card
                  {...card}
                  key={card.name}
                  addCardToHand={this.addCardToHand}
                />
              ))
          }
        </div>
        <div className="cardInHand">
          <h3>{console.log(this.state.selectedCards.length)}</h3>
        </div>
      </div>
    )
  }
}

export default Cards
