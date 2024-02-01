import React, { useContext, useEffect, useState } from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import AlertDialogSlide from './AlertDialogSlide';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AuthContext } from '../../Context';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import AlertEntreprise from './AlertEntreprise';


export default function Head({formation}) {

const {auth} = useContext(AuthContext) 

const boolean = true 

const [change,setChange ] = useState({
    boolean : false,
    bg : 'bg-red-600',
    hoverbg:'bg-red-700'
})

const handleClickFollow = ()=>{
   
  
  setChange((prev) => {
    const currentBoolean= !prev.boolean;
    return {
      ...prev,
      boolean: currentBoolean,
      bg: currentBoolean ? 'bg-blue-600' : 'bg-red-600',
      hoverbg: currentBoolean ? 'bg-blue-700' : 'bg-red-700'
    }
  })
  
  /* on inverse la logique car les modifications du state n'ont pas encore eté 
   * prise en compte
   * en gros , le state change est toujours le state avant de faire la modification setChange 
  */
  console.log("change boolean : ", change.boolean)
  change.boolean ?  unfollow() : follow()

  change.boolean ? unfollowFormation() : followFormation()
  }


    const follow =()=> 
      toast.success('vous êtes inscrit !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
    
      const unfollow =()=> {
        toast.error('vous n\'êtes plus inscrit !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
      }


const followFormation = ()=>{
 
  axios.get( "/utilisateurs/follow",{
      params :{
        utilisateurId : auth.id ,
        formationId : formation.id
      }
    })
    .then((res)=>{

      console.log(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
}

const unfollowFormation = ()=>{

    axios.get("/utilisateurs/unfollow",{
      params :{
        utilisateurId : auth.id ,
        formationId : formation.id
      }
    })
    .then((res)=>{

      console.log(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
}

  return (
    <div  className=' bg-slate-100 shadow-lg pb-3' >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      <div className='max-w-[80rem]  my-4 mx-auto duration-300 ease-in-out '>
             <div className='flex items-center justify-evenly'>
              <div className='flex min-h-[10rem] my-3  justify-start space-x-16 items-center'>
                  
                  <div className='text-center'>
                      <img
                      className='h-[12rem] w-[20rem]'
                      alt="Remy Sharp"
                     src={formation.image  ? formation.image : `/image/defaut.png`}
                      />
                  </div>

                  <div className='max-w-[50rem]'>  
                  <h2 className=' text-4xl font-black my-5 text-blue-500'><span className='text-gray-600'>Formation </span>- {formation.category?.nom} </h2>
                  <h1 className='text-3xl font-black'>{formation.nom}</h1> 
                  <div className='text-md mt-3  py-2 capitalize flex items-center space-x-4'>
                    
                      <div className='flex items-center space-x-1'>
                          <QueryBuilderIcon className='text-slate-500'/> <p>{formation.heure} heures</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <PlaceIcon className='text-red-600'/> <p>{formation.ville?.nom}</p>
                      </div>
                      {formation.startDate && <div className='flex items-center normal-case space-x-1'>
                        <EventIcon sx={{fontSize:20}} className='text-slate-700 '/> <p> début - {formation.startDate}</p>
                      </div>
                      }
                      {
                        formation.finishDate && <div className='flex items-center normal-case space-x-1'>
                        <EventIcon sx={{fontSize:20}} className='text-red-600 '/> <p> fin - {formation.finishDate}</p>
                      </div>
                      }
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
                 
                {
                  formation.dedie === "ENTREPRISE" ? 
                  <>
                    <AlertEntreprise formation={formation}/>
                  </>
                  : 
                  ( 
                  auth.id === 0 ? 
                  <AlertDialogSlide formation={formation}/>
                  : 
                 <button
                  onClick={handleClickFollow}
                  className={`hover:${change.hoverbg} ${change.bg} text-white duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full`}>
                {
                  change.boolean ? 
                <StopCircleIcon
                sx={{fontSize:30}} 
                className='border-r-2 border-slate-300 pr-2'
                />
                :
                <PlayArrowIcon
                sx={{fontSize:30}} 
                className='border-r-2 border-slate-300 pr-2'
                />
                }
                  <p>{change.boolean ? "Inscrit" : "S'inscrire" }</p>
                </button>
                  )
                }


                </div>
              </div>

              </div>
         </div>
      </div>


    </div>
  )
}