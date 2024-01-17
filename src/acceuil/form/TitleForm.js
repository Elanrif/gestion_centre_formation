import React from 'react'

function TitleForm(props) {
  return (
    <div className='my-5 text-center'>
        <h1 className='font-black my-3 text-xl text-orange-600'>Se connecter en tant que <span className='uppercase text-black'>{props.name} !</span> </h1>
        <p className='max-w-[24rem]'> Veuillez entrer vos informations ci-dessous pour vous connecter à votre compte.
        .</p>
    </div>
  )
}

export default TitleForm