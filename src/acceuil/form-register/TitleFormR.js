import React from 'react'

export default function TitleFormR(props) {
  return (
     <div className='my-5 text-center'>
        <h1 className='font-black my-3 text-xl text-blue-500'>Créer votre compte en tant que <span className='uppercase text-black'>{props.name} !</span> </h1>
        <p> Créer votre compte pour rester à jour des divers formations.</p>
    </div>
  )
}
