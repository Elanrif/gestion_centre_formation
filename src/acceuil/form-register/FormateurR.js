import React from 'react'
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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import Welcom from './Welcom';

export default function FormateurR() {

     const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" formateur : ", e)
  };


  return (
    <div className='h-[100vh] bg-slate-50 grid grid-cols-2 gap-2'>
        <div className='flex items-center justify-center'>
            <div className=''>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
                  <TitleFormR name="formateur"/>
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

                 <FormControl sx={{ m: 1, width: '13ch' }}>
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Ville" />}
                    />
                </FormControl> 

                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-competence"
                    >
                        Compétence </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-competence"
                            type="text"
                            endAdornment={
                              <InputAdornment position="end">
                                <CenterFocusWeakIcon
                            aria-label="toggle competence visibility"
                            edge="start"
                          >
                          <Visibility />
                          </CenterFocusWeakIcon>
                              </InputAdornment>
                            }
                            label="competence"
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
                    
                  </FormControl>

                </Box>
                <div className='flex mb-3 justify-center'>
                     <Button type="submit" variant="contained" sx={{mt:3 , width:150}}>Valider</Button>
                </div>
            </Box>

                     <div className='text-center'>
                      <div className='flex justify-center items-center space-x-2'>
                        <p className='text-blue-700 cursor-pointer'> se connecter en tant que ? </p>
                       <Link to="/" className='hover:text-blue-700 cursor-pointer'> retour</Link>
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

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },

]
