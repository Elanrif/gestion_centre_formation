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
import AlertDialogSlide from './AlertDialogSlide';

export default function Head({formation}) {


  return (
    <div  className='text-white pb-3' style={{background:"#000000"}}>
      <div className='max-w-[80rem]  my-4 mx-auto duration-300 ease-in-out '>
             <div className='flex items-center justify-evenly'>
              <div className='flex min-h-[10rem] my-3  justify-start space-x-16 items-center'>
                  
                  <div className='text-center'>
                      <img
                      className='h-[12rem] w-[20rem]'
                      alt="Remy Sharp"
                      src={formation.image}
                      />
                  </div>

                  <div className='max-w-[50rem]'>  
                  <h2 className=' text-4xl font-black my-5 text-green-300'><span className='text-orange-200'>Formation </span>- {formation.category?.nom} </h2>
                  <h1 className='text-3xl font-black'>{formation.nom}</h1> 
                  <div className='text-xl mt-3 font-black py-2 capitalize flex items-center space-x-4'>
                    
                      <div className='flex items-center space-x-1'>
                          <BarChartIcon className='text-slate-500'/> <p>Niveau : facile</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                          <QueryBuilderIcon className='text-slate-500'/> <p>{formation.heure} heures</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <PlaceIcon className='text-red-600'/> <p>{formation.ville?.nom}</p>
                      </div>
                      <div className='flex items-center normal-case space-x-1'>
                        <EventIcon className='text-blue-600 '/> <p>à partir de {formation.date}</p>
                      </div>
                  </div>
                      
                  <p className='font-extralight max-w-2xl'>
                      {formation.objectif}
                  </p>

                <div className='flex items-center space-x-4'>
                  {
                  formation.formateur &&
                  <p className='font-extralight font-serif my-[0.7rem]'>
                  <span className=' font-semibold '>Formateur : </span>  {formation.formateur?.nom}
                  </p>
                }
                 <AlertDialogSlide formation={formation}/>
                </div>
                  
                  </div>

              </div>
         </div>
      </div>


    </div>
  )
}