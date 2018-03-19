import React from 'react'

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
      <div className="setCard" onClick={this.handleCardClick}>
        <img
          src={this.props.image}
          alt={this.props.name}
          className="setCard"
        />
        <p><small><i>
          {this.state.isActive ? 'active' : 'not active'}
        </i></small></p>
      </div>
    )
  }
}

export default Card
