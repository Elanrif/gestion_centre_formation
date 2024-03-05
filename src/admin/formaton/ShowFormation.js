import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaceIcon from '@mui/icons-material/Place';
import EventIcon from '@mui/icons-material/Event';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CodeEvalMoal from './CodeEvalModal';
import { ToastContainer, toast } from 'react-toastify';

export default function ShowFormation() {
      const {showID} = useParams()

      const [formation, setFormation] = useState({})

            React.useEffect(() => {
            handleLoad()
        }, [])

  const handleLoad = ()=>{

    axios
      .get(`https://gestion-centre-formation.onrender.com/formations/${showID}`)
      .then((res) => {
        setFormation(res.data);
        console.log("data :", res.data);
      });
  }

     const succes = ()=>{
                toast.success('L\'email a été envoyé avec succès!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });
     }   

  return (
     <div  className='bg-slate-100 pt-10' >
      <div className='max-w-[70rem]  my-4 mx-auto duration-300 ease-in-out '>
        <div className='flex items-center justify-evenly'>
        <div className='flex min-h-[10rem] my-3  justify-start space-x-16 items-start'>
            
            <div className='text-center'>
                <img
                className='h-[20rem] w-[20rem]'
                alt="Remy Sharp"
                src={formation.image? formation.image : `/image/defaut.png`}
                />
            </div>

            <div className='max-w-[50rem]'>  
            <h2 className=' text-4xl font-black my-5 text-blue-500'><span className='text-gray-600'>Categorie : </span> {formation.category?.nom} </h2>
            <h1 className='text-3xl font-black'><span className='text-gray-600'>Nom</span> : {formation.nom}</h1> 
            <h1 className='text-xl mt-3 font-black'><span className='text-gray-600'>Prix</span> : {formation.cout} Dhs</h1> 
            <div className='text-md mt-3  py-2 capitalize flex items-center space-x-4'>
            
             
                <div className='flex items-center space-x-1'>
                    <QueryBuilderIcon className='text-slate-500'/>
                     <span className='text-gray-600'>Heure : </span> 
                     <p>{formation.heure} h</p>
                </div>
                <div className='flex items-center space-x-1'>
                <PlaceIcon className='text-red-600'/> 
                <p>{formation.ville?.nom}</p>
                </div>
                {formation.startDate &&
                <div className='flex items-center normal-case space-x-1'>
                <EventIcon sx={{fontSize:20}} className='text-slate-700 '/> 
                <p> début : {formation.startDate}</p>
                </div>}
                {
                    formation.finishDate &&
                    <div className='flex items-center normal-case space-x-1'>
                <EventIcon sx={{fontSize:20}} className='text-red-600 '/> 
                <p> fin : {formation.finishDate}</p>
                </div>
                }
            </div>
                
            <p className='font-extralight max-w-2xl'>
            <span className='text-gray-600 text-2xl me-2 font-black'>
            Objectif : 
            </span>  
            {formation.objectif}
            </p>


        <div className='flex mt-4 items-center space-x-3'>
            {
            formation.formateur &&
            <div className='flex items-center space-x-3'>
                <div className='flex items-center font-extralight my-[0.7rem]'>
                <AccountCircleIcon/>
                <span className=' font-light me-2'>
                Formateur : 
                </span> 
                <span className='font-normal '> 
                {formation.formateur?.nom} {formation.formateur?.prenom}
                </span>
                
                </div>
                {(formation.dedie === "INDIVIDU" && formation.utilisateurs?.length > 0)
                 && 
                <CodeEvalMoal data={{formation,succes}}/>
                }
            </div>
        }
            
        </div> 

        <Link to={`/admin/formations/${formation.id}/entreprises`} className='flex mt-4 items-center space-x-3'>
            {
            formation.dedie === "ENTREPRISE" &&
            <>
                <BusinessIcon/>
                <p className='font-extralight'>
                <span className=' font-light me-2'>
                Entreprises : 
                </span> 
                <span className='font-normal '> 
                {formation.entreprises.length}
                </span>
                
                </p>
            </>
        }
            
        </Link> 

        <Link to= {`/admin/formations/${formation.id}/participants`} className='flex mt-4 items-center space-x-3'>
            {
            formation.dedie === "INDIVIDU" &&
            <>
                <Diversity3Icon/>
                <p className='font-extralight'>
                <span className=' font-light me-2'>
                Participants : 
                </span> 
                <span className='font-normal '> 
                {formation.utilisateurs.length}
                </span>
                
                </p>
            </>
        }
            
        </Link> 

         <Link to={`/admin/formations`} className='flex mt-4 items-center space-x-3'>
            <p className='px-4 py-2 bg-red-500 text-white rounded-xl'> Retour </p>
         </Link> 
        </div>
        </div>
        </div>
    </div>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />

    </div>
  )
}
