import React from 'react'
import GreenDiamondOneEmpty from '../images/green-diamond-one-empty.png'
// import PurpleDiamondOneFilled from '../images/purple-diamond-one-filled.png'

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
    this.props.addCardToHand(this.props)
  }

  render(){
    return (
      <div className="card" onClick={this.handleCardClick}>
        {/*image needs to be a prop*/}
        <img src={this.props.image} className="card"/>
        {/* <p>{this.props.name}</p>
        <p>{this.props.color}</p>
        <p>{this.props.shape}</p>
        <p>{this.props.amount}</p> */}
        <p><small><i>{this.state.isActive ? 'active' : 'not active'}</i></small></p>
      </div>
    )
  }
}

export default Card
