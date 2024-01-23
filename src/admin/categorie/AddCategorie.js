import React,{useState,useContext,useEffect} from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export default function AddCategorie() {

 
  const {auth,setAuth} = useContext(AuthContext)

  const [formation, setFormation] = useState(
    {
      id : "",
      nom : ""
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


   setFormation((prev) => ({
            ...prev,
            [name]: value
         }))

  }


 const handleSubmit = (e) => {
    e.preventDefault();

      formation.nom === "" ? alert("veuillez remplir tout les champs *") : saveFormation()
  
  
  }

  const saveFormation = ()=>{
       
  // const { checkPwd, ...formater } = formation;

    axios
      .post("/categories", formation)
      .then((res) => {

        navigate("/admin/categories");
         setFormation(
          {
            id:"",
            nom: ""            
          }
        )
      })
      .catch((error) => {
        console.log(error.message);
    
      });
  }


  return (
    <div className='h-[100vh] bg-slate-50 grid xl:grid-cols-1 grid-cols-1 gap-2'>
        <div className='flex items-center justify-center'>
            <div className='text-center'>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
                    <p className='mb-7 text-lg  text-slate-600'> Ajouter une nouvelle categorie </p>
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
                            value={formation.nom}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <FormatListNumberedIcon
                            aria-label="toggle nom visibility"
                            edge="start"
                          >
                          <Visibility />
                          </FormatListNumberedIcon>
                              </InputAdornment>
                            }
                            label="nom"
                          />
                    </FormControl>
             
                </Box>
              <div className='flex mb-3 justify-center space-x-7'>                
                        <Link to= "/admin/categories"> 
                        <Button  variant="contained" color="secondary" sx={{mt:3 , width:150}}> retour  </Button> 
                        </Link>        
                     <Button type="submit" variant="contained"  color="success" sx={{mt:3 , width:150}}>Valider</Button>
                </div>
            </Box>
            </div>
        </div>

    </div>
  )
}

