import React from 'react'
import Avatar from '@mui/material/Avatar';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Tooltip from '@mui/material/Tooltip';
import CodeEvaluation from './CodeEvaluation';

export default function DetailFormateur({formation}) {

  return (
    <div>
        <h1 className='font-black text-xl'> Formateur </h1>
        <h3 className='font-black text-xl text-blue-700 pt-1'> {formation.formateur?.nom} {formation.formateur?.prenom}</h3>
        <h4  className=' text-slate-700 py-1'> Developer and Lead Instructor</h4>
        <div>
            <div className=''>
                <Avatar
                alt={`${formation.formateur?.nom}`}
                src={`${formation.formateur?.image}`}
                sx={{ width: 100, height: 100,margin:"0.5rem 0rem" }}
                />
               <div className='flex items-center space-x-3'>
                    <div className='flex items-center space-x-1'>
                       <StarHalfIcon sx={{fontSize:30,color:"orange"}}/> <p>4.7 Instructor Rating</p>
                    </div>
                    <div>
                       <div className='flex items-center space-x-1'>
                       <GroupsIcon sx={{fontSize:30}}/> <p>2,527,175 Students</p>
                        </div>
                        
                    </div>
               </div>
            </div>
            <div>
                <Link to={`/formation/${formation.id}/email`} className='flex items-center mt-2 group'> <NoteAltIcon sx={{fontSize:30,color:"blue"}}/> 
                <Tooltip title="Évaluer le formateur" arrow>
                     <p className='font-semibold text-slate-700 group-hover:text-cyan-600'> Évaluer</p>
                </Tooltip>
                </Link>
                <p className='max-w-3xl my-4'>
                  {formation.formateur?.description}
                </p>
            </div>
        </div>
    </div>
  )
}
