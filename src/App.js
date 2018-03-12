import React, { Component } from 'react';



class Card extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return (
      <div className="card">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class DealtCards extends React.Component {

  // constructor(props){
  //   super(props)
  //
  // }

  render(){
    return (
      <div className="dealtCards">
        {this.props.cards.map(card => (
          <Card {...card} key={card.name}/>
        ))}

      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    console.log(props.cards)
  }

  render() {
    return (
      <div>
        <div className="gameManager">
          <b>gameManager:</b>
        </div>
        <div className="info">
          info: ///
        </div>
        <DealtCards cards={this.props.cards}/>
      </div>
    );
  }
}

export default App;
