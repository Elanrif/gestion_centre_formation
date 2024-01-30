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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';

export default function FormulaireIndividu() {

  const {IDform} = useParams()

  const [user, setUser] = useState(
    {
      nom : "",
      prenom : "",
      username : "",
      password : "",
      checkPwd:"",
      formations:[{
        
      }],
      tel : "",
      ville : {
        nom : ""
      },
      naissance:"",
    }
  )

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    handleLoadFormation()
  }, [IDform])
  
   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;

    setUser((prev)=>{
        if(name == "ville"){
            return({
                ...prev,
                [name]:{nom: value}
            })
        }else{
            return ({
                ...prev,
            [name]:value
            })
            }
        })

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
      user.ville?.nom === "" ||
      user.prenom === "" ||
      user.username === "" ||
      user.password ==="" ||
      user.tel === "" ? alert("veuillez remplir tout les champs *") : saveUser()
    }
  
  }

   const handleLoadFormation = ()=>{
   
    axios
      .get(`/formations/${IDform}`)
      .then((res) => {
        
        setUser((prev)=>({
            ...prev,
            formations :[
              res.data
            ]
          }))
      })
      .catch((error) => {
        console.log(error);
    
      });
      
   }


  const saveUser = ()=>{
    
    user.role = 'ROLE_INDIVIDU';
   const { checkPwd, formations,...utilisateur } = user;

   console.log("user : " , utilisateur)
   console.log("formations : " , formations[0])
   
   axios
      .post("/utilisateurs/individu-form", utilisateur,
      {
        params:{
          formationId : formations[0].id 
        }
      })
      .then((res) => {

        navigate("/")
      setUser({
        nom : "",
        prenom : "",
        username : "",
        password : "",
        checkPwd:"",
        formations:[{
          
        }],
        tel : "",
        ville : {
          nom : ""
        },
        naissance:"",
      })
       
      })
      .catch((error) => {
        console.log(error.message);
    
      });
  }


  return (
    <div className='h-[100vh] bg-slate-50 grid xl:grid-cols-2 grid-cols-1 gap-2'>
        <div className='flex items-center justify-center'>
            <div className=''>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
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
                    <InputLabel htmlFor="outlined-adornment-username"
                    >
                        Email</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-username"
                            type="text"
                            name="username"
                            value={user.username}
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
                            label="username"
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
                            value={user.ville?.nom}
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
                    <InputLabel htmlFor="outlined-adornment-formations"
                    >
                       Formation </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-formations"
                            type="text"
                            name="formations"
                            autoFocus  
                            readOnly  
                            value={user.formations[0]?.nom}
                            onChange={handleChange} 
                            label="formations"
                          />
                    </FormControl> <br/>
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
                    </FormControl><br/>

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
            </div>
        </div>
         <Welcome/>

    </div>
  )
}


