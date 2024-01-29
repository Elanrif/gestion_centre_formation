import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailFormateur from './DetailFormateur'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Tooltip from '@mui/material/Tooltip';
import ProgrammeDetaille from './ProgrammeDetaille';
import Head from './Head';


export default function DetailFormation() {

    const {detailformID} = useParams()

    const [formation, setFormation] = useState({})

    useEffect(() => {
      handleLoad()
    }, [detailformID])

    const handleLoad = ()=>{
        axios.get(`/formations/${detailformID}`)
        .then((res)=>{
            setFormation(res.data)
            console.log("res ",res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    }


  return (
   <div>
    <Head formation={formation}/>
     <div className='max-w-6xl px-5 mx-auto  my-5 md:mx-56'>
    <div className='py-3'>
        <h1 className='text-xl text-slate-600 font-black capitalize py-1'>Objectif</h1>
        <p className='max-w-4xl'>
          {formation.objectif}
        </p>
    </div>

      <div className='py-3'>
        <h1 className='text-xl text-pink-600 flex items-center space-x-3 font-black capitalize py-1'>
        <p>Programme detaillé</p>
        <Link className='group hover:text-blue-700 text-blue-500'> 
         <Tooltip title="télécharger le pdf" arrow>
            <PictureAsPdfIcon />
         </Tooltip>
        </Link>
        </h1>
        <div className='max-w-4xl'>
            <ProgrammeDetaille/>
        </div>
    </div>

    {formation.formateur && <DetailFormateur formation={formation}/>}
    </div>
   </div>
  )
}
