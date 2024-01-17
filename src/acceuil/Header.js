import React,{useState} from 'react'
import AccountMenu from './AccountMenu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

    const [chevron, setChevron] = useState(false)


  return (
    <div className='bg-gray-100 flex py-3 items-center space-x-0 justify-around'>
        <div className='flex items-center space-x-16'>
            <h1 className='text-2xl font-black my-1 text-blue-900 hover:cursor-pointer hover:text-blue-800 duration-300 ease-in-out'> Centre-Formation</h1>

            <div className='flex items-center space-x-3 hover:cursor-pointer hover:text-blue-500 duration-300 ease-in-out'
            onClick={()=>setChevron(!chevron)}>
                <h1 className='text-lg font-xl my-3 '> Formation</h1>
            <ExpandMoreIcon className={`${chevron ? 'rotate-180': 'rotate-0'}`}/>
            </div>
            <Link to= '/register/formateur'>
           <Button sx={{mt:0,fontSize:'12px'}} variant="contained"> Dévenir formateur</Button>
            </Link>
        </div>
       
        <AccountMenu/>
    </div>
  )
}

export default Header