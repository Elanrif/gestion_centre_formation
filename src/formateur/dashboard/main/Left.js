import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function Left() {

  return (
    <div className='h-full text-white'>
        <Link to="#"  className='bg-green-500 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-[25vh]'> 
            <PersonPinIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Mon Compte</h1>
                <div>
                </div>
            
            </div>
         </Link>

          <Link to="#" className='bg-green-500 w-[23rem] flex items-center justify-center space-x-3 mt-5 rounded-lg h-[25vh]'> 
            <CameraAltIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'>Ajouter une image</h1>
                <div>
                </div>
            </div>
         </Link>

    </div>
  )
}
