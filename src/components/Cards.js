import React from 'react'
import Card from './Card'
import Sets from './Sets'


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
    // console.log(selectedCard)
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
    // alert(this.state.selectedCards[0].name)
    this.setState((prevState) => ({
      sets: prevState.sets.concat({
        card1: this.state.selectedCards[0],
        card2: this.state.selectedCards[1],
        card3: this.state.selectedCards[2]
      }),
      selectedCards: []
    }))
  }



  render(){
    return (
      <div>
        <div className="cardInHand">
          <h3>{this.state.selectedCards.length}</h3>
        </div>
        <div className="dealtCards">
          {this.state.selectedCards.length < 3 &&
            this.props.cards.map(card => (
              <Card
                {...card}
                key={card.name}
                addCardToHand={this.addCardToHand}
              />
            ))}
        </div>

        <Sets sets={this.state.sets} setNum={this.state.sets.length}/>
      </div>
    )
  }
}

export default Cards
