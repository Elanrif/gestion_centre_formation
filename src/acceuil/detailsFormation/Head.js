import React from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import AlertDialogSlide from './AlertDialogSlide';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Head({formation}) {


  return (
    <div  className=' bg-slate-100 shadow-lg pb-3' >
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
                  <h2 className=' text-4xl font-black my-5 text-blue-500'><span className='text-gray-600'>Formation </span>- {formation.category?.nom} </h2>
                  <h1 className='text-3xl font-black'>{formation.nom}</h1> 
                  <div className='text-md mt-3  py-2 capitalize flex items-center space-x-4'>
                    
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
                        <EventIcon sx={{fontSize:20}} className='text-slate-700 '/> <p> début -{formation.date}</p>
                      </div>
                      <div className='flex items-center normal-case space-x-1'>
                        <EventIcon sx={{fontSize:20}} className='text-red-600 '/> <p> fin - {formation.date}</p>
                      </div>
                  </div>
                      
                  <p className='font-extralight max-w-2xl'>
                      {formation.objectif}
                  </p>

                <div className='flex mt-4 items-center space-x-3'>
                  {
                  formation.formateur &&
                  <>
                  <AccountCircleIcon/>
                  <p className='font-extralight my-[0.7rem]'>
                  <span className=' font-light '>Formateur : </span> 
                   <span className='font-normal '> {formation.formateur?.nom} {formation.formateur?.prenom}</span>
                   
                  </p>
                  </>
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