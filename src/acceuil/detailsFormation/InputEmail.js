import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CodeEvaluation from './CodeEvaluation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AuthContext } from '../../Context';
import { ToastContainer, toast } from 'react-toastify';



export default function InputEmail() {

  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("")
  const [formation, setFormation] = useState({})
  const [utilisateur, setUtilisateur] = useState({})

  const navigate = useNavigate()
  const {formaID} = useParams()

  const clickOpen = () => {
    setOpen(true);
  };

  const clicClose = () => {
    setOpen(false);
  };


      React.useEffect(()=>{
        handleLoadFormation()
  },[])


   const handleLoadFormation = ()=>{
    axios.get(`/formations/${formaID}`)
    .then((res)=>{
        setFormation(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
  }

  const handleChange = (e)=>{

     const target = e.target 
     const name = target.name
     const value = target.value 
     setUsername(value)
  }

const handleSubmit = (e)=>{

      e.preventDefault()
      username === ""  ? warning() : findOneByEmail()
  
  }

 const warning = ()=> toast.warning('veuillez saisir votre email !', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  const error = ()=> toast.error('Votre email n\'existe pas !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

const findOneByEmail = ()=>{
 
    axios.get(`/utilisateurs/findbyemail`,{
        params:{
            username:username
        }
    })
    .then((res)=>{

        handleSendingEmail()
        res.data ? setUtilisateur(res.data) : error()  
       
    })
    .catch((err)=>{
        console.error(err)
    })
}

  const handleSendingEmail = ()=>{
    clickOpen()
    axios.get(`/evaluations/email-code/${utilisateur.id}`)
    .then((res)=>{
        console.log("receive mail : ",res.data)
       
    })
    .catch((err)=>{
        console.error(err)
    })
  }

  return (
    <React.Fragment>
      <div className='flex h-[100vh] items-center justify-center mx-auto'>
        <div className='max-w-6xl p-10  border-2'>
            <h1 className='mb-16 font-black text-2xl text-center'>Saisir votre email </h1>
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 1, width: '45ch'},
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" value={username} type="email" name="username" onChange={handleChange} label="E-mail" variant="outlined" color='success' className='bg-white' required/>

            <Link to="/register/utilisateur">
              <p className='text-blue-600 ms-3'> Créer un compte ?</p>
            </Link>
                <div className='flex justify-center space-x-7'>                
                            <Link to= {`/formation/${3}`}> 
                        <Button  variant="contained" color="secondary" sx={{mt:3 , width:150}}> retour  </Button> 
                        </Link>        
                     <Button type="submit" variant="contained"  color="success" sx={{mt:3 , width:150}}>Valider</Button>
                </div>

            </Box>

        </div>
        {(utilisateur.id && formation.id) && <CodeEvaluation data={{open,setOpen,clickOpen,clicClose,utilisateur,formation}}/>}
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
    </React.Fragment>


  )
}
