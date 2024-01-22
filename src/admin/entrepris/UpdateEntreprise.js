import React,{useState,useContext,useEffect} from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useParams } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

export default function UpdateEntreprise() {

  const {entrepriseID} = useParams() 
  const {auth,setAuth} = useContext(AuthContext)

  const [entreprise, setEntreprise] = useState(
    {
        nom: "",
        address: "",
        tel: "",
        url: "",
        email: "",
    }
  )


  
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    useEffect(() => {
    loadEntreprises()
  }, [])

  const loadEntreprises = ()=>{

    axios.get(`/entreprises/${entrepriseID}`)
    .then((res)=>{

      setEntreprise(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  

   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;


    setEntreprise((prev) => ({
      ...prev,
      [name]: value,
    }))

  }


 const handleSubmit = (e) => {
    e.preventDefault();

     if(entreprise.password != entreprise.checkPwd)
    {
     
    alert("password error !")
     setEntreprise((prevState)=>({
      ...prevState,
      password : "",
      checkPwd : "", 
     }))
    }
    else {

      entreprise.nom === "" ||
      entreprise.url === "" ||
      entreprise.address === "" ||
      entreprise.email === "" ||
      entreprise.tel === "" ? alert("veuillez remplir tout les champs *") : saveEntreprise()
    }
  
  }

  const saveEntreprise = ()=>{
       
   
    axios
      .put("/entreprises", entreprise)
      .then((res) => {

         setEntreprise(
          {
            nom: "",
            address: "",
            tel: "",
            url: "",
            email: "",
          })
      })
      .catch((error) => {
        console.log(error.message);
    
      });
  }


  return (
    <div className='bg-slate-50 '>
        <div className='flex h-[100vh] items-center justify-center'>
            <div>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
                  vvvv
               <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
              >
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-nom"
                    >
                        Nom</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-nom"
                            type="text"
                            name="nom"
                            value={entreprise.nom}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <PersonIcon
                            aria-label="toggle nom visibility"
                            edge="start"
                          >
                          <Visibility />
                          </PersonIcon>
                              </InputAdornment>
                            }
                            label="nom"
                          />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-prenom"
                    >
                        Url</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-prenom"
                            type="text"
                            name="url"
                            value={entreprise.url}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <PersonIcon
                            aria-label="toggle prenom visibility"
                            edge="start"
                          >
                          <Visibility />
                          </PersonIcon>
                              </InputAdornment>
                            }
                            label="url"
                          />
                    </FormControl> <br/>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username"
                    >
                        Email</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-username"
                            type="text"
                            name="email"
                            value={entreprise.email}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <MailIcon
                            aria-label="toggle username visibility"
                            edge="start"
                          >
                          <Visibility />
                          </MailIcon>
                              </InputAdornment>
                            }
                            label="email"
                          />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-tel"
                    >
                        Tel </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-tel"
                            type="text"
                            name="tel"
                            value={entreprise.tel}
                            onChange={handleChange} 
                            endAdornment={
                              <InputAdornment position="end">
                                <ContactPhoneIcon
                            aria-label="toggle tel visibility"
                            edge="start"
                          >
                          <Visibility />
                          </ContactPhoneIcon>
                              </InputAdornment>
                            }
                            label="tel"
                          />
                    </FormControl> <br/>

                 <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-ville"
                    >
                        Address </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-ville"
                            type="text"
                            name="address"
                            value={entreprise.address}
                            onChange={handleChange} 
                            endAdornment={
                              <InputAdornment position="end">
                                <PublicIcon
                            aria-label="toggle ville visibility"
                            edge="start"
                          >
                          <Visibility />
                          </PublicIcon>
                              </InputAdornment>
                            }
                            label="Address"
                          />
                    </FormControl>

                </Box>
                <div className='flex mb-3 justify-center'>
                     <Button type="submit" variant="contained" sx={{mt:3 , width:150}}>Valider</Button>
                </div>
            </Box>
            </div>
        </div>

    </div>
  )
}

