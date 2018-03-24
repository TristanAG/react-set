import React from 'react'
import Card from './Card'
import Sets from './Sets'
import SetModal from './SetModal'
import FailModal from './FailModal'

class Cards extends React.Component {
  constructor(props){
    super(props)
    this.addCardToHand = this.addCardToHand.bind(this)
    this.clearModal = this.clearModal.bind(this)
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

  clearModal(){
    this.setState(() => ({
      isOpen: false,
      failIsOpen: false
    }))
  }

  determineIfSet(){
    const cardOne = this.state.selectedCards[0]
    const cardTwo = this.state.selectedCards[1]
    const cardThree = this.state.selectedCards[2]

    let colorStatus = ''
    let colorFlag = ''
    let shapeStatus = ''
    let shapeFlag = ''
    let amountStatus = ''
    let amountFlag = ''
    let fillStatus = ''
    let fillFlag = ''

    //COLOR
    if(cardOne.color === cardTwo.color){
      let color = cardOne.color
      if(color === cardThree.color){
        colorStatus = 'pass'
        colorFlag = color
      }else{
        colorStatus = 'fail'
      }
    }else if(cardOne.color !== cardTwo.color){
      let cardOneColor = cardOne.color
      let cardTwoColor = cardTwo.color
      if(cardOneColor !== cardThree.color && cardTwoColor !== cardThree.color){
        colorStatus = 'pass'
        colorFlag = 'mixed'
      }else{
        colorStatus = 'fail'
      }
    }

    //SHAPE
    if(cardOne.shape === cardTwo.shape){
      let shape = cardOne.shape
      if(shape === cardThree.shape){
        shapeStatus = 'pass'
        shapeFlag = shape
      }else{
        shapeStatus = 'fail'
      }
    }else if(cardOne.shape !== cardTwo.shape){
      let cardOneShape = cardOne.shape
      let cardTwoShape = cardTwo.shape
      if(cardOneShape !== cardThree.shap && cardTwoShape !== cardThree.shape){
        shapeStatus = 'pass'
        shapeFlag = 'mixed'
      }else{
        shapeStatus = 'fail'
      }
    }

    //AMOUNT
    if(cardOne.amount === cardTwo.amount){
      let amount = cardOne.amount
      if(amount === cardThree.amount){
        amountStatus = 'pass'
        amountFlag = amount
      }else{
        amountStatus = 'fail'
      }
    }else if(cardOne.amount !== cardTwo.amount){
      let cardOneAmount = cardOne.amount
      let cardTwoAmount = cardTwo.amount
      if(cardOneAmount !== cardThree.amount && cardTwoAmount !== cardThree.amount){
        amountStatus = 'pass'
        amountFlag = 'mixed'
      }else{
        amountStatus = 'fail'
      }
    }

    //FILL
    if(cardOne.fill === cardTwo.fill){
      let fill = cardOne.fill
      if(fill === cardThree.fill){
        fillStatus = 'pass'
        fillFlag = fill
      }else{
        fillStatus = 'fail'
      }
    }else if(cardOne.fill !== cardTwo.fill){
      let cardOneFill = cardOne.fill
      let cardTwoFill = cardTwo.fill
      if(cardOneFill !== cardThree.fill && cardTwoFill !== cardThree.fill){
        fillStatus = 'pass'
        fillFlag = 'mixed'
      }else{
        fillStatus = 'fail'
      }
    }

    if(
      colorStatus === 'pass' &&
      shapeStatus === 'pass' &&
      amountStatus === 'pass' &&
      fillStatus === 'pass'
    ){

      //TODO
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!
      //HERE IS WHERE YOU USE THE FLAG TO CHECK IF THE SET HAS ALREADY BEEN SELECTED!!


      const flag = colorFlag + shapeFlag + amountFlag + fillFlag

      this.setState((prevState) => ({
        isOpen: true,
        status: [colorStatus, shapeStatus, amountStatus, fillStatus],
        sets: prevState.sets.concat({
          cardOne: cardOne,
          cardTwo: cardTwo,
          cardThree: cardThree
        }),
        selectedCards: []
      }))
    }else{
      this.setState((prevState) => ({
        // isOpen: true,
        status: [colorStatus, shapeStatus, amountStatus, fillStatus],
        badSet: {
          cardOne,
          cardTwo,
          cardThree,
        },
        failIsOpen: true,
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
        </div>
        <div className="column">
          <div className="sets">
            <SetModal
              isOpen={this.state.isOpen}
              clearModal={this.clearModal}
              set={this.state.sets[this.state.sets.length - 1]}
              status={this.state.status}
            />
            <FailModal
              isOpen={this.state.failIsOpen}
              clearModal={this.clearModal}
              set={this.state.badSet}
              status={this.state.status}
            />
            <Sets
              sets={this.state.sets}
              setNum={this.state.sets.length}
              setCards={this.state.sets[this.state.sets.length - 1]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Cards
