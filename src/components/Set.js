import React from 'react'

const Set = (props) => (
  <div className="set">
    <img src={props.cardOne.image} alt={props.cardOne.name}/>
    <img src={props.cardTwo.image} alt={props.cardTwo.name}/>
    <img src={props.cardThree.image} alt={props.cardThree.name}/>
  </div>
)

export default Set
