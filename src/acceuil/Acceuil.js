import React from 'react'
import Footer from './Footer'
import Formations from './Formation/Formations'
import SpeechPrincipal from './SpeechPrincipal'
import Aside from './aside/Aside'

function Acceuil() {
  return (
    <div> 
      <Aside/>
      <Formations/>
      <SpeechPrincipal/>
      <Footer/>
    </div>
  )
}

export default Acceuil