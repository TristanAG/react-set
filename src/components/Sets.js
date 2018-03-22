import React from 'react'
import Set from './Set'

export default (props) => (
  <div>
    {props.sets.map((set) => (
      <Set {...set} key={Math.random()}/>
    ))}
  </div>
)
