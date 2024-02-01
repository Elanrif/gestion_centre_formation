import React,{useState} from 'react'
import { Link,useNavigate, Outlet } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../Context';
import { ToastContainer, toast } from 'react-toastify';

function Header() {

  const {auth,setAuth} = React.useContext(AuthContext)
  const navigate = useNavigate()

    const handleLogout = ()=>{   
      console.log("Déconnexion réussi !")
          setAuth({
            id : 0
          })
          
          sessionStorage.removeItem("auth")
          
          toast.success('Vous êtes déconnecté avec succès', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/login/utilisateur")
          }, 2000);
  }

    const moncompte = (() => {
        switch(auth.role) {
          case "ROLE_ADMIN":
            return '/admin/dashboard';
          case "ROLE_ASSISTANT":
            return '/admin/dashboard';
          case "ROLE_FORMATEUR":
            return '/formateur/dashboard';
          case "ROLE_USER":
            return '/user/dashboard';
          default:
            return "";
        }
      })();

  return (
   <div>
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
    <div className='py-7 border-b-4 border-slate-100 flex items-center justify-around'>
      <Link to="/" className='hidden md:block'>
        <div className='flex items-center'>
        <img src="/image/Elan-logo.png" className='h-16 w-16 text-blue-500'/>
        <div> 
          <p className='font-black'>Centre de formation</p> 
          <p className='font-extralight'>Plate de formation
           En ligne
           </p> 
        </div>
      </div>
      <p className='text-blue-600 text-center font-black'> Se former en liberté</p>
      </Link>

      <div className='flex text-white space-x-3 items-center'>
          {
            auth.id === 0 &&
            <>
            <Link to= '/register/utilisateur' className='px-5 py-2 rounded-full bg-slate-200 text-black'>Inscription</Link>
            <Link to= '/login/utilisateur'  className='px-3 py-1 flex items-center space-x-2 rounded-full bg-red-600'>
           <AccountCircleIcon sx={{fontSize:30}} className='border-r-2 border-slate-300 pr-2'/>
            <p>Connexion</p>
          </Link>
          </>
          }
           {
            auth.id !== 0 &&
            <>
            <button
            onClick={handleLogout}
            className='hover:bg-orange-700 duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full bg-orange-600'>
           <LogoutIcon 
           sx={{fontSize:30}} 
           className='border-r-2 border-slate-300 pr-2'
           />
            <p>Déconnexion</p>
          </button>
           <Link to= {moncompte} className='hover:bg-red-700 duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full bg-red-600'>
           <PersonPinIcon sx={{fontSize:30}} className='border-r-2 border-slate-300 pr-2'/>
            <p>Mon compte</p>
          </Link>
          </>
           }
          <button className='px-5 py-2 rounded-full bg-orange-600'>Faq</button>
      </div>
    </div>

    <Outlet/>
   </div>
  )
}

export default Header