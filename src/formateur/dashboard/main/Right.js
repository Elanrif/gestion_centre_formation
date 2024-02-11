import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from 'react-router-dom';

export default function Right({data}) {
  return (
    <div className='h-full py-3 text-white'>
        <Link to="/formateur/evaluations" className='bg-purple-500 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-[45vh]'> 
            <EditNoteIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Mes évaluations</h1>
                <div>
                    <p className='text-sm font-light'> {data.evaluations?.length } évaluations</p>
                </div>
            
            </div>
         </Link>

      
    </div>
  )
}
