import React from 'react'
import Avatar from '@mui/material/Avatar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Button from '@mui/material/Button';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function Formation({formation}) {


  return (
    <Link to={`/formation/${formation.id}`} className='max-w-[80rem] my-4 mx-auto hover:cursor-pointer border duration-300 ease-in-out hover:bg-orange-50'>
       <div className='flex items-center justify-evenly'>
         <div className='flex min-h-[10rem]  my-3  justify-start space-x-16 items-center'>
            
            <div className='text-center'>
                <img
                className='h-[12rem] w-[20rem]'
                alt="Remy Sharp"
                src={formation.image}
                />
            </div>

            <div className='max-w-[50rem]'>  
            <h2 className='font-light text-orange-600'>{formation.category?.nom} - Formation</h2>
            <h1 className='text-xl font-black'>{formation.nom}</h1> 
            <div className='font-light py-2 capitalize flex items-center space-x-4'>
               
                <div className='flex items-center space-x-1'>
                    <BarChartIcon className='text-slate-500'/> <p>Niveau : facile</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <QueryBuilderIcon className='text-slate-500'/> <p>{formation.heure} heures</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <PlaceIcon className='text-red-600'/> <p>{formation.ville?.nom}</p>
                </div>
                 {
                  formation.startDate  && <>
                  <div className='flex items-center  normal-case space-x-1'>
                  <EventIcon className='text-blue-600 '/> <p>du {formation.startDate} au {formation.finishDate}</p>
                </div></>
                 }
            </div>
                 
            <p className='font-extralight max-w-2xl'>
                {formation.objectif}
            </p>

           {
            formation.formateur &&
             <p className='font-normal my-[0.7rem] text-blue-700'>
             <span className=' font-normal text-slate-700'>Formateur : </span>  {formation.formateur?.nom} {formation.formateur?.prenom}
            </p>
           }
            
            </div>

        </div>
        <div>
            <h1 className=' text-2xl font-semibold text-slate-500'> {formation.cout} <span className='uppercase'>{formation.cout? "DHS" : "Gratuite" }</span> </h1>
        </div>
       </div>


    </Link>
  )
}

export default Formation