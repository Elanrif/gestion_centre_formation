import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups3Icon from '@mui/icons-material/Groups3';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';

export default function Center({data}) {
  return (
     <div className='py-3 text-white'>
        <Link to="/admin/formations" className='bg-blue-500 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-1/2'> 
            <SchoolIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Formations</h1>
                <div>
                    <p className='text-sm font-light'> {data.formations?.length} formations</p>
                </div>
            
            </div>
         </Link>

           <Link to="/admin/users" className='bg-blue-500 my-3 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-1/2'> 
            <PeopleAltIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Individus et Utilisateurs</h1>
                <div>
                    <p className='text-sm font-light'> {data.utilisateurs?.length} individus/utilisateurs</p>
                </div>
            
            </div>
         </Link>

    </div>
  )
}
