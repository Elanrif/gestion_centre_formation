import React from 'react'
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

export default function Formateur() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='h-[100vh] bg-slate-50 grid grid-cols-2 gap-2'>
        <div className='flex items-center justify-center'>
            <div>
              <TitleForm name="Formateur"/>
               <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
              >
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"
                    >
                        E-mail</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type="text"
                            endAdornment={
                              <InputAdornment position="end">
                                <MailIcon
                            aria-label="toggle password visibility"
                            edge="start"
                          >
                          <Visibility />
                          </MailIcon>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                    </FormControl> <br/>

                  <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"
                    startAdornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
              >
                  Mot de passe</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
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
                     <div className='flex justify-center'>
                     <Button variant="contained" sx={{mt:3 , width:150}}>Se connecter</Button>
                    </div>

                  </FormControl>
                </Box>

                     <div className='text-center'>
                       <div className='flex justify-center items-center space-x-2'>
                       <Link to="/register/utilisateur" className='hover:text-blue-700 cursor-pointer'> créer un compte ?</Link>
                      </div>
                     <div className='flex justify-center items-center space-x-2'>
                        <p className='text-blue-700 cursor-pointer'> se connecter en tant que ? </p>
                       <Link to="/" className='hover:text-blue-700 text-slate-500 cursor-pointer'> acceuil</Link>
                      </div>
                          <div className='flex mt-3 items-start justify-center space-x-3'>  
                          <Link to="/login/admin" className='flex hover:text-blue-700 justify-center'>admin -</Link>
                          <Link to="/login/assistant" className='flex hover:text-blue-700 justify-center'>assistant -</Link>
                          <Link to="/login/utilisateur" className='flex hover:text-blue-700 justify-center'>utilisateur </Link>
                          </div>
                    </div>
            </div>
        </div>
         <Welcome/>

    </div>
  )
}
