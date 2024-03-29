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
    <Link to={`/formation/${formation.id}`}>
       <div className='flex duration-300 my-3 ease-in-out  p-3 bg-slate-100 hover:bg-orange-50 items-center justify-evenly'>
         <div className='flex justify-start space-x-16 items-center'>
            
            <div className='hidden md:block text-center'>
                <img
                className='h-[12rem] w-[20rem]'
                alt={formation.nom}
                src={formation.image  ? formation.image : `/image/defaut.png`}
                />
            </div>

            <div className='max-w-[50rem]'>  
            <h2 className=' font-normal text-blue-600'><span className='italic text-slate-600'>Catégorie :</span> {formation.category?.nom}</h2>
            <h1 className='text-xl font-black'>{formation.nom}</h1> 
            <div className='font-normal py-2 capitalize flex-cols md:flex items-center space-y-2 md:space-x-4'>
               
                <div className='flex items-center space-x-1'>
                    <QueryBuilderIcon className='text-slate-500'/> <p>{formation.heure} heures</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <PlaceIcon className='text-red-600'/> <p>{formation.ville?.nom}</p>
                </div>
                 {
                  formation.startDate  && <>
                  <div className='flex items-center  normal-case space-x-1'>
                  <EventIcon className='text-blue-600 '/> <p>{formation.startDate} {formation.finishDate && <span> au {formation.finishDate}</span>}</p>
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
        <div className='hidden md:block'>
            <h1 className=' text-lg '> {formation.cout} <span className='uppercase'>{formation.cout? "DHS" : "Gratuite" }</span> </h1>
        </div>
       </div>


    </Link>
  )
}

export default Formation