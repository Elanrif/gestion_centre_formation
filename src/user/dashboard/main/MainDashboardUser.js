import React,{useEffect,useReducer} from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function MainDashboardUser() {

  return (
     <div>
          <div className='px-7 py-3 bg-black text-white  capitalize font-black'>
            <DashboardIcon sx={{fontSize:50,color:"white"}}/> TABLEAU DE BORD DE L'UTILISATEUR</div>

        <div className='flex justify-center '>
        <div className='grid border py-10  h-[70vh]
          grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4'>
            <Left />
            <Center />
            <Right />
        </div>
       </div>
    </div>
  )
}
