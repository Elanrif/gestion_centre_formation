import React,{useState,useEffect,useContext} from 'react'
import Welcome from './Welcome'
import TitleForm from './TitleForm'
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
import { AuthContext } from '../../Context';
import axios from 'axios';
import LoginAs from './LoginAs';


export default function Admin() {

  const {auth,setAuth} = useContext(AuthContext)
  const [person, setPerson] = useState({
    username : "",
    password : ""
  })

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;


    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }))

  }

  const handleSubmit = (e)=>{
    e.preventDefault() 
    person.password ==="" ||
    person.username === "" ? alert("veuillez remplir tout les champs *") : loginPerson()
  }

   const loginPerson = ()=>{
  
    axios
      .post("/loginUser", person)
      .then((res) => {

       //  navigate("/");

       /* stocker le pwd en claire ,ainsi ecrasé le pwd encrypté. */
        res.data.password = person.password

         setAuth(res.data)
         sessionStorage.setItem("auth", JSON.stringify(res.data));
         console.log("admin : " , res.data)
         setPerson(
          {
            username : "",
            prenom : ""
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
            <div>
              <TitleForm name="Administrateur"/>
               <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
              >
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email"
                    >
                        E-mail</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                            name="username"
                            value={person.name}
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
                      type={showPassword ? 'text' : 'password'}
                        value={person.password}
                        name="password"
                        onChange={handleChange}
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
                     <div className='flex justify-center'>
                     <Button type='submit' variant="contained" sx={{mt:3 , width:150}}>Se connecter</Button>
                    </div>

                  </FormControl>
                </Box>

                     <div className='text-center'>
                      <div className='flex justify-center items-center space-x-2'>
                       <Link to="/register/utilisateur" className='hover:text-blue-700 cursor-pointer'> créer un compte ?</Link>
                      </div>
                     <div className='flex justify-center items-center space-x-2'>
                        <LoginAs type="admin"/>
                      </div>
                         
                    </div>
            </div>
        </div>
         <Welcome/>

    </div>
  )
}
