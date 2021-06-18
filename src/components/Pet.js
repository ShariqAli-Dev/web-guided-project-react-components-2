import React from 'react'

export default function Pet(props) {
  // const { pet } = props;
  console.log('pet', props);

  return (
    <div className='pet-friends container'>
      <p>{props.pet.name} ({props.pet.type})</p>
    </div>
  )
}
