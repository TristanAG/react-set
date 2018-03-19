import React from 'react'
import Set from './Set'

const Sets = (props) => (
  <div>
    {props.sets.map((set) => (
      <Set {...set} key={Math.random()}/>
    ))}
  </div>
)

export default Sets
