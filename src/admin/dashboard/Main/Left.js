import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups3Icon from '@mui/icons-material/Groups3';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';


export default function Left({data}) {

    console.log(data)
  return (
    <div className='h-full text-white'>
        <Link to="/admin/formateurs" className='bg-green-500 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-1/3'> 
            <Groups3Icon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Formateurs</h1>
                <div>
                    <p className='text-sm font-light'> {data.formateurs?.length} formateurs</p>
                </div>
            
            </div>
         </Link>

           <Link to="/admin/entreprises" className='bg-green-500 my-3 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-1/3'> 
            <BusinessIcon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Entreprises</h1>
                <div>
                    <p className='text-sm font-light'> {data.entreprises?.length} entreprises</p>
                </div>
            
            </div>
         </Link>

            <Link to="/admin/assistants" className='bg-green-500 my-3 w-[23rem] flex items-center justify-center space-x-3 rounded-lg h-1/3'> 
            <Diversity3Icon sx={{fontSize: 100,color:"white"}}/> 
            <div> 
                <h1 className='text-xl font-black'> Assistants</h1>
                <div>
                    <p className='text-sm font-light'> {data.assistants?.length} assistants</p>
                </div>
            
            </div>
         </Link>
    </div>
  )
}
