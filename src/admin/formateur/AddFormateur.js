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

export default function AddFormateur() {

  const {formateurID} = useParams() 
  const {auth,setAuth} = useContext(AuthContext)

  const [formateur, setFormateur] = useState(
    {
      nom : "",
      prenom : "",
      username : "",
      password : "",
      checkPwd:"",
      tel : "",
      ville : {
        id:"",
        nom:""
      },
      competence:"",
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


    setFormateur((prev) => ({
      ...prev,
      [name]: value,
    }))

  }


 const handleSubmit = (e) => {
    e.preventDefault();

     if(formateur.password != formateur.checkPwd)
    {
     
    alert("password error !")
     setFormateur((prevState)=>({
      ...prevState,
      password : "",
      checkPwd : "", 
     }))
    }
    else {

      formateur.nom === "" ||
      formateur.prenom === "" ||
      formateur.competence === "" ||
      formateur.prenom === "" ||
      formateur.username === "" ||
      formateur.password ==="" ||
      formateur.tel === "" ? alert("veuillez remplir tout les champs *") : saveFormateur()
    }
  
  }

  const saveFormateur = ()=>{
       
     // Supprimer la clé 'checkPwd' et sa valeur du state
   const { checkPwd, ...formater } = formateur;

    axios
      .post("/formateurs", formater)
      .then((res) => {

       //  navigate("/");
         setAuth(res.data)
         alert("créer avec succès !")
         sessionStorage.setItem("auth", JSON.stringify(res.data));
         setFormateur(
          {
            nom : "",
            prenom : "",
            username : "",
            password : "",
            checkPwd:"",
            tel : "",
            ville : "",
            competence:"",
          }
        )
      })
      .catch((error) => {
        console.log(error.message);
    
      });
  }


  return (
    <div className='bg-slate-50 '>
        <div className='flex h-[100vh] items-center justify-center'>
            <div className='text-center'>
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
                            value={formateur.nom}
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
                            value={formateur.prenom}
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
                    <InputLabel htmlFor="outlined-adornment-username"
                    >
                        Email</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-username"
                            type="text"
                            name="username"
                            value={formateur.username}
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
                            value={formateur.tel}
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
                            value={formateur.ville.nom}
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
                    <InputLabel htmlFor="outlined-adornment-competence"
                    >
                        compétence </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-competence"
                            type="text"
                            name="competence"
                            value={formateur.competence}
                            onChange={handleChange} 
                             endAdornment={
                              <InputAdornment position="end">
                                <CenterFocusStrongIcon
                            aria-label="toggle ville visibility"
                            edge="start"
                           
                          >
                          <Visibility />
                          </CenterFocusStrongIcon>
                              </InputAdornment>
                            }
                            label="competence"
                            multiline
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
                      value={formateur.password}
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
                      value={formateur.checkPwd}
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
            </div>
        </div>

    </div>
  )
}

