import React from 'react'

export default (props) => (
  <div className="set">
    <img src={props.card1.image} alt={props.card1.name}/>
    <img src={props.card2.image} alt={props.card1.name}/>
    <img src={props.card3.image} alt={props.card1.name}/>
  </div>
)

// export default Set
