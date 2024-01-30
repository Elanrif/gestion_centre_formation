import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';

function Aside() {
  return (
    <div >
      <div className='h-[50vh]'>
        <img src="/image/formation210.jpg" className='float-right'/>
        <div className='max-w-6xl mx-auto'>
            <h1 className=' py-3 text-5xl font-black'><span className='text-red-600'>Se former</span> <span>en liberté</span>
            </h1>
            <p className='text-3xl py-2'>Des formations en ligne pour découvrir, apprendre, progresser et réussir</p>
            <div>
              <h1 className='mt-[7rem] text-xl font-black'> Chercher dans nos formations </h1>
              <div className='flex items-center space-x-8'>
                  <Box
                component="form"
                sx={{
                    '& > :not(style)': {marginLeft:0, marginTop: 1, width: '55ch',color:"white",backgroundColor:"white" },
                }}
                noValidate
                autoComplete="off"
                >
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-nom"
                    >
                        Rechercher des formations</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-nom"
                            type="text"
                            name="nom"
                            endAdornment={
                              <InputAdornment position="end">
                          <SearchIcon
                            aria-label="toggle nom visibility"
                            edge="start"
                            className='hover:cursor-pointer' onClick={()=>alert("cliqué ")}
                          >
                          <Visibility />
                          </SearchIcon>
                              </InputAdornment>
                            }
                            label="nom"
                          />
                    </FormControl>

             </Box>

                <Link to= '/register/formateur' className='hover:bg-red-700 text-white duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full bg-red-600'>
                <SchoolIcon sx={{fontSize:30}} className='border-r-2 border-slate-300 pr-2'/>
                  <p>Dévenir formateur</p>
                </Link>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Aside