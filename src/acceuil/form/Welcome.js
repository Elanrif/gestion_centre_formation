import React from 'react'

function Welcome() {
  return (
    <div  className='bg-orange-600 xl:block hidden text-white h-full w-full'>
      <div className='h-[100vh] flex items-center justify-center'>
        <div className='max-w-[35rem] text-center mx-auto'>
          <h1 className='font-black text-3xl my-3'> Connexion au compte</h1>
          <p className='max-w-[40rem]'>Bienvenue sur notre plateforme de formation en ligne ! Notre mission est de fournir une expérience éducative enrichissante, accessible depuis n'importe où dans le monde. Découvrez notre catalogue de formation, choisissez celui qui correspond le mieux à vos objectifs, et commencez votre voyage vers l'acquisition de nouvelles compétences et connaissances. Rejoignez-nous dès aujourd'hui et explorez les opportunités infinies qu'offre notre plateforme de formation en ligne !
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome