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
import { AuthContext } from '../../Context';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function UpdateFormation() {

  const [formations, setFormations] = useState([])
  const {auth,setAuth} = useContext(AuthContext)
  const {formationID} = useParams() 

  const [formation, setFormation] = useState(
    {
      nom : "",
      objectif : "",
      programme : "",
      password : "",
      checkPwd:"",
      heure : "",
      ville : {
        id : "",
        nom: ""
      },
      cout:"",
    }
  )

  const navigate = useNavigate()

   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;


   /*  setFormation((prev) => ({
      ...prev,
      [name]: value,
    })) */

      setFormation((prev) => {
        if (name === "ville") {
      
          /* value du champ SELECT, MENUITEM,setSTATE doit être du même type */
          return {
            ...prev,
            [name]: { id: value}
          };
        } else {
          // Sinon, metre à jour normalement
          return {
            ...prev,
            [name]: value
          };
        }
  });

  }

 React.useEffect(() => {
    handleLoad()
  }, [])

  const handleLoad = ()=>{

    axios.get(`/formations/${formationID}`)
    .then((res)=>{
       
      setFormation(res.data)
      console.log("data :" , res.data)

    })
  }

    useEffect(() => {
      
    axios.get("/villes")
    .then((res)=>{
      setFormations(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
      
    }, [])

 const handleSubmit = (e) => {
    e.preventDefault();

      formation.nom === "" ||
      formation.objectif === "" ||
      formation.cout === "" ||
      formation.objectif === "" ||
      formation.programme === "" ||
      formation.heure === "" ? alert("veuillez remplir tout les champs *") : updateFormation()
    
  
  }

  const updateFormation = ()=>{
       
  // const { checkPwd, ...formater } = formation;
    console.log(formation)
    axios
      .put("/formations", formation)
      .then((res) => {

         navigate("/admin/formations");
        
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
                    <p className='mb-7 text-lg  text-slate-600'> Modifier la formation </p>
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
                    <InputLabel htmlFor="outlined-adornment-heure"
                    >
                        heure </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-heure"
                            type="text"
                            name="heure"
                            value={formation.heure}
                            onChange={handleChange} 
                            endAdornment={
                              <InputAdornment position="end">
                                <ContactPhoneIcon
                            aria-label="toggle heure visibility"
                            edge="start"
                          >
                          <Visibility />
                          </ContactPhoneIcon>
                              </InputAdornment>
                            }
                            label="heure"
                          />
                    </FormControl> <br/>

                    
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-programme"
                    >
                        programme</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-programme"
                            type="text"
                            name="programme"
                            value={formation.programme}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <MailIcon
                            aria-label="toggle programme visibility"
                            edge="start"
                          >
                          <Visibility />
                          </MailIcon>
                              </InputAdornment>
                            }
                            label="programme"
                            multiline
                          />
                    </FormControl>

                   <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-objectif"
                    
                    >
                        objectif</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-objectif"
                            type="text"
                            name="objectif"
                            value={formation.objectif}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <PersonIcon
                            aria-label="toggle objectif visibility"
                            edge="start"
                          >
                          <Visibility />
                          </PersonIcon>
                              </InputAdornment>
                            }
                            label="objectif"
                            multiline
                          />
                    </FormControl> <br/>

                  {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-simple-select-label">Ville</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        type="text"
                        name="ville"
                        value={formation.ville?.id}
                        label="ville"
                        onChange={handleChange}
                      >
                        {formations.map((item,value)=>( 
                             <MenuItem key={value} value={item.id}>{item.nom}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl>


                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-cout"
                    >
                        coût </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-cout"
                            type="text"
                            name="cout"
                            value={formation.cout}
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
                            label="cout"
                          />
                    </FormControl> <br/>

                </Box>
                 <div className='flex mb-3 justify-center space-x-7'>                
                        <Link to= "/admin/formations"> 
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

