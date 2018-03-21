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


    //i only need to figure this algorithm out one time
    let colorStatus = ''
    let shapeStatus = ''
    let amountStatus = ''
    let fillStatus = ''

    //COLOR
    if(cardOne.color === cardTwo.color){
      let color = cardOne.color
      if(color === cardThree.color){
        colorStatus = 'pass'
      }else{
        colorStatus = 'fail'
      }
    }else if(cardOne.color !== cardTwo.color){
      let cardOneColor = cardOne.color
      let cardTwoColor = cardTwo.color
      if(cardOneColor !== cardThree.color && cardTwoColor !== cardThree.color){
        colorStatus = 'pass'
      }else{
        colorStatus = 'fail'
      }
    }


    //SHAPE
    if(cardOne.shape === cardTwo.shape){
      let shape = cardOne.shape
      if(shape === cardThree.shape){
        shapeStatus = 'pass'
      }else{
        shapeStatus = 'fail'
      }
    }else if(cardOne.shape !== cardTwo.shape){
      let cardOneShape = cardOne.shape
      let cardTwoShape = cardTwo.shape
      if(cardOneShape !== cardThree.shap && cardTwoShape !== cardThree.shape){
        shapeStatus = 'pass'
      }else{
        shapeStatus = 'fail'
      }
    }


    //AMOUNT
    if(cardOne.amount === cardTwo.amount){
      let amount = cardOne.amount
      if(amount === cardThree.amount){
        amountStatus = 'pass'
      }else{
        amountStatus = 'fail'
      }
    }else if(cardOne.amount !== cardTwo.amount){
      let cardOneAmount = cardOne.amount
      let cardTwoAmount = cardTwo.amount
      if(cardOneAmount !== cardThree.amount && cardTwoAmount !== cardThree.amount){
        amountStatus = 'pass'
      }else{
        amountStatus = 'fail'
      }
    }


    //FILL
    if(cardOne.fill === cardTwo.fill){
      let fill = cardOne.fill
      if(fill === cardThree.fill){
        fillStatus = 'pass'
      }else{
        fillStatus = 'fail'
      }
    }else if(cardOne.fill !== cardTwo.fill){
      let cardOneFill = cardOne.fill
      let cardTwoFill = cardTwo.fill
      if(cardOneFill !== cardThree.fill && cardTwoFill !== cardThree.fill){
        fillStatus = 'pass'
      }else{
        fillStatus = 'fail'
      }
    }

    if(colorStatus === 'pass' && shapeStatus === 'pass' && amountStatus === 'pass' && fillStatus === 'pass'){
      alert('SET!')
      this.setState((prevState) => ({
        sets: prevState.sets.concat({
          cardOne: cardOne,
          cardTwo: cardTwo,
          cardThree: cardThree
        }),
        selectedCards: []
      }))
    }else{
      alert('not a set tho...')
      this.setState((prevState) => ({
        selectedCards: []
      }))
    }
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
          {/* <div className={this.state.sets.length ? "modal" : "modal is-active"}>
            <div className="modal-background"></div>
            <div className="modal-content">
              hi
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
          </div> */}
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
