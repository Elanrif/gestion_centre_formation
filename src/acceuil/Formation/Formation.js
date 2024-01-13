import React from 'react'
import Avatar from '@mui/material/Avatar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Button from '@mui/material/Button';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaceIcon from '@mui/icons-material/Place';

function Formation(props) {

  

  return (
    <div className='max-w-[80rem] my-4 mx-auto hover:cursor-pointer border duration-300 ease-in-out hover:bg-orange-50'>
       <div className='flex items-center justify-evenly'>
         <div className='flex min-h-[10rem]  my-3  justify-start space-x-16 items-center'>
            
            <div className='text-center'>
                <img
                className='h-[12rem] w-[20rem]'
                alt="Remy Sharp"
                src={props.formation.image}
                />
            </div>

            <div className='max-w-[50rem]'>  
            <h2 className='font-light text-orange-600'>{props.formation.category} - Formation</h2>
            <h1 className='text-xl font-black'>{props.formation.nom}</h1> 
            <div className='font-light py-2 capitalize flex items-center space-x-4'>
               
                <div className='flex items-center space-x-1'>
                    <BarChartIcon className='text-slate-500'/> <p>Niveau : facile</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <QueryBuilderIcon className='text-slate-500'/> <p>{props.formation.heure} heures</p>
                </div>
                  <div className='flex items-center space-x-1'>
                    <PlaceIcon className='text-red-600'/> <p>{props.formation.ville}</p>
                </div>
                </div>
                 
            <p className='font-extralight max-w-2xl'>
                {props.formation.description}
            </p>
            <p className='font-extralight my-[0.3] text-blue-700'>
               {props.formation.formateur}
            </p>
            {/* <Button sx={{mt:2}} variant="contained"> commencer</Button> */}
            </div>

        </div>
        <div>
            <h1 className=' text-2xl font-light'> 8400 <span className='uppercase'>DHS</span> </h1>
        </div>
       </div>


    </div>
  )
}

export default Formation