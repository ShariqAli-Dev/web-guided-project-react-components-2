import React from 'react'
// 👉 1- We need the Pet component
import Pet from './Pet';

export default function PetsList(props) {
  // const { pets } = props
  console.log(props.pets1);
  
  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go */}
      {/* What props does the Pet component expect? */}
      {
        props.pets1.map((pet) => {
          return <Pet key={pet.id} pet={pet} />
        })
      }
    </div>
  )
}
