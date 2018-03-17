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
    console.log(this.props)
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }))
    this.props.sendCardInfoToGameManager(this.props)
  }

  render(){
    return (
      <div className="card" onClick={this.handleCardClick}>
        <p>{this.props.name}</p>
        <p>{this.props.color}</p>
        <p>{this.props.shape}</p>
        <p>{this.props.amount}</p>
        <p><i>{this.state.isActive ? 'active' : 'not active'}</i></p>
      </div>
    )
  }
}

export default Card
