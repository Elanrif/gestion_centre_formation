import React,{useState,useContext,useEffect} from 'react'
import Welcome from '../form/Welcome';
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
import { Link } from 'react-router-dom';
import TitleFormR from './TitleFormR';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import Welcom from './Welcom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';

export default function UtilisateurR() {

  const {auth,setAuth} = useContext(AuthContext)

  const [user, setUser] = useState(
    {
      nom : "",
      prenom : "",
      email : "",
      password : "",
      checkPwd:"",
      tel : "",
      ville : "",
      naissance:"",
    }
  )

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;


    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))

  }


 const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user)
     if(user.password != user.checkPwd)
    {
     
    alert("password error !")
     setUser((prevState)=>({
      ...prevState,
      password : "",
      checkPwd : "", 
     }))
    }
    else {

      user.nom === "" ||
      user.prenom === "" ||
      user.email === "" ||
      user.password ==="" ||
      user.tel === "" ? alert("veuillez remplir tout les champs *") : saveUser()
    }
  
  }

  const saveUser = ()=>{
       
     // Supprimer la clé 'checkPwd' et sa valeur du state
   const { checkPwd, ...utilisateur } = user;

    axios
      .post("/utilisateurs", utilisateur)
      .then((res) => {

        //  navigate("/");
         setAuth(res.data)
         alert("créer avec succès !")
         sessionStorage.setItem("auth", JSON.stringify(res.data));
         setUser(
          {
            nom : "",
            prenom : "",
            email : "",
            password : "",
            checkPwd:"",
            tel : "",
            ville : "",
            naissance:"",
          }
        )
      })
      .catch((error) => {
        console.log(error.message);
    
      });
  }


  return (
    <div className='h-[100vh] bg-slate-50 grid xl:grid-cols-2 grid-cols-1 gap-2'>
        <div className='flex items-center justify-center'>
            <div className='text-center'>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
                  <TitleFormR name="utilisateur"/>
               <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '35ch' },
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
                            value={user.nom}
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
                        Prenom</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-prenom"
                            type="text"
                            name="prenom"
                            value={user.prenom}
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
                            label="prenom"
                          />
                    </FormControl> <br/>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email"
                    >
                        Email</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-email"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <MailIcon
                            aria-label="toggle email visibility"
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
                            value={user.tel}
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
                        Ville </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-ville"
                            type="text"
                            name="ville"
                            value={user.ville}
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
                            label="Ville"
                          />
                    </FormControl>

                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-naissance"
                    >
                        Date naissance </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-naissance"
                            type="date"
                            name="naissance"
                            value={user.naissance}
                            onChange={handleChange} 
                            label="naissance"
                          />
                    </FormControl> <br/>

                  <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"
                    startadornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
              >
                  Mot de passe</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      name= "password"
                      value={user.password}
                      onChange={handleChange}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    
                  </FormControl>

                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"
                    startadornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
              >
                  Mot de passe</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password2"
                      name="checkPwd"
                      value={user.checkPwd}
                      onChange={handleChange}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password2 visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password2"
                    />
                    
                  </FormControl>

                </Box>
                <div className='flex mb-3 justify-center'>
                     <Button type="submit" variant="contained" sx={{mt:3 , width:150}}>Valider</Button>
                </div>
            </Box>

                     <div className='text-center'>
                      <div className='flex justify-center items-center space-x-2'>
                        <p className='text-blue-700 cursor-pointer'> se connecter en tant que ? </p>
                       <Link to="/" className='hover:text-blue-700 cursor-pointer'> acceuil</Link>
                      </div>
                          <div className='flex mt-3 items-start justify-center space-x-3'>  
                          <Link to="/login/admin" className='flex hover:text-blue-700 justify-center'>admin -</Link>
                          <Link to="/login/formateur" className='flex hover:text-blue-700 justify-center'>formateur -</Link>
                          <Link to="/login/assistant" className='flex hover:text-blue-700 justify-center'>assistant </Link>
                          </div>
                    </div>
            </div>
        </div>
         <Welcom/>

    </div>
  )
}


