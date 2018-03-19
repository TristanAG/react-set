import React from 'react'
import Set from './Set'

const Sets = (props) => (
  <div>
    {console.log(props)}
    {props.sets.map((set) => (
      <Set {...set} key={Math.random()}/>
    ))}
  </div>
)

export default Sets
