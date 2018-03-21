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
          this.determineIfSet()
        }
      })
    }
  }

  determineIfSet(){
    //so within this function we can begin to check if match or !match
    const cardOne = this.state.selectedCards[0]
    const cardTwo = this.state.selectedCards[1]
    const cardThree = this.state.selectedCards[2]

    //you gotta see if the colors are equal AND fire a modal
    if(cardOne.color === cardTwo.color){
      //if different do one thing
      
    }else{

    }

    this.setState((prevState) => ({
      sets: prevState.sets.concat({
        cardOne: cardOne,
        cardTwo: cardTwo,
        cardThree: cardThree
      }),
      selectedCards: []
    }))
  }



  render(){
    return (
      <div className="columns">
        <div className="column">
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
        </div>
        <div className="column">
          <div className="sets">
            <Sets sets={this.state.sets} setNum={this.state.sets.length}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards
