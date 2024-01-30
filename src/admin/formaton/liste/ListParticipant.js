import React, { useState } from 'react'
import Entreprise from '../../entrepris/Entreprise'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import User from '../../user/User'

export default function ListParticipant() {
    const {idFormation} = useParams()
    const [load,setLoad] = useState(false)
    const [formation,setFormation] = useState(null);

      React.useEffect(() => {
    handleLoad()
  }, [idFormation,load])

  const handleSetload = ()=>{
    setLoad(!load)
    console.log(" loaded ...:",load)
  }
  const handleLoad = ()=>{

    axios.get(`/formations/${idFormation}`)
    .then((res)=>{
       
      setFormation(res.data)
      console.log('fixed ',res.data.utilisateurs.length)

    }) 
  }

  /* si on ne fait pas formation != null , il va essayer d'acceder a length qui est undefined : voir CYCLE DE VIE
   D'UN COMPOSANT  */
  return (
    <div>
        {(formation != null && formation.entreprises.length > 0) && <User value ={{formation,handleSetload}}/>}
    </div>
  )
}
