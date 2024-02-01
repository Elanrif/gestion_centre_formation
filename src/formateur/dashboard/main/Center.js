import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

export default function Center({data}) {
  return (
     <div className='py-3 text-white'>
        <Link to="/formateur/formations" className='bg-blue-500 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-[45vh]'> 
            <SchoolIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'>Mes Formations</h1>
                <div>
                    <p className='text-sm font-light'> {data.formations?.length} formations</p>
                </div>
            
            </div>
         </Link>

    </div>
  )
}
