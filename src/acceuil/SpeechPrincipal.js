import React from 'react'
import Avatar from '@mui/material/Avatar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Button from '@mui/material/Button';

function SpeechPrincipal() {
  return (
 <div className='bg-cyan-50'>
       <div className='w-[60rem] py-4 mx-auto '>
        <div className='flex p-9 my-3 border rounded-lg shadow bg-slate-50 justify-between items-center'>
            <div className='max-w-[30rem]'>  
            <RecordVoiceOverIcon className='me-3'/>   
            <p className='font-light'>Bienvenue sur notre site ! Nous sommes ravis de vous accueillir dans notre communauté dédiée à l'apprentissage et au développement professionnel. Chez nous, l'éducation va au-delà des frontières, ouvrant la voie à des opportunités infinies pour l'acquisition de nouvelles compétences et la croissance personnelle.</p>
            </div>

            <div className='w-full text-center'>
                <Avatar
                alt="Omar sy"
                src="/image/admin/omar-sy.jpg"
                sx={{mx: 'auto', width: 100, height: 100,mb:2 }}
                />
                <h1 className='text-black font-semibold'>ELANRIF SAID BACO</h1>
                <p className='mt-3 font-light'> ADMINISTRATEUR</p>
            </div>
        </div>

         <div className='flex mb-4 border rounded-lg shadow bg-slate-50 justify-between items-center mt-6'>
            
            <div className='text-center'>
                <img
                alt="Formation"
                className='w-[25rem] h-[20rem]'
                src="/image/admin/Tutorat-Mag-min.jpg"
                />
            </div>

            <div className='max-w-[30rem]'>  
            <h1 className='text-2xl font-black'>Devenir Formateur</h1> 
            <p className='font-light'>
                Bienvenue dans notre communauté dédiée à l'excellence éducative ! Nous vous invitons à vous joindre à nous pour partager votre expertise, inspirer des parcours d'apprentissage et contribuer à l'édification de compétences exceptionnelles.
            </p>
            <Button sx={{mt:2}} variant="contained"> nous rejoindre</Button>
            </div>

        </div>

    </div>
 </div>
  )
}

export default SpeechPrincipal