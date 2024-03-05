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
import { Link, useParams,useNavigate } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GroupsIcon from '@mui/icons-material/Groups';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Tooltip from '@mui/material/Tooltip';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { AuthContext } from '../../../Context';

export default function Formevaluation() {

 const {auth} = useContext(AuthContext)
 const {formateurIdeval,formationID,userID} = useParams()

 const [formateur, setFormateur] = useState({})

  const [evaluation, setEvaluation] = useState(
    {
      rythme : "",
      qualitepeda : "",
      supportcourstp : "",
      maitrisesujet:"",
      remarque:"",
      note : 0
    }
  )

  const navigate = useNavigate()


   const handleChange = (e) => {
  
    const target = e.target;
    const value = target.value;
    const name = target.name ;


   setEvaluation((prev) => {
        return{
            ...prev,
        [name] : value
        }
    })

  }


 const handleSubmit = (e) => {
    e.preventDefault();

      evaluation.rythme === "" ||
      evaluation.qualitepeda === "" ||
      evaluation.note === "" ||
      evaluation.supportcourstp === "" ||
      evaluation.maitrisesujet === ""  ? alert("veuillez remplir tout les champs *") : saveEvaluation()
  
  
  }

  const saveEvaluation = ()=>{

    /*Ajoute des nouvelles champs - valeurs  */
   evaluation.utilisateur = {id:userID}
  // evaluation.formateur = {id:parseInt(formateurIdeval, 10)}
   evaluation.formateur = {id:formateurIdeval}

   console.log(evaluation)

    axios
      .post(
        "https://gestion-centre-formation.onrender.com/evaluations",
        evaluation
      )
      .then((res) => {
        navigate(`/formation/${formationID}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    
  handleLoadData()
    
  }, [])

  const handleLoadData = ()=>{

    axios
      .get(
        `https://gestion-centre-formation.onrender.com/persons/${formateurIdeval}`
      )
      .then((res) => {
        setFormateur(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  return (
    <div className='h-[100vh] bg-slate-100 grid xl:grid-cols-1 grid-cols-1'>
            
        <div className='border border-blue-300 flex items-center justify-center'>
            <div className='text-conter'>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
        <div className='flex items-center space-x-3 mx-auto'>
        <Avatar
        alt={`${formateur.nom}`}
        src={`${formateur.image}`}
        sx={{ width: 100, height: 100,margin:"0.5rem 0rem" }}
        />
            <div className=''>
                <div className='flex items-center space-x-1'>
            <PersonPinIcon sx={{fontSize:30,color:"black"}}/> <p className='text-black text-lg font-semibold'>{formateur.nom} {formateur.prenom}</p>
            </div>
            <div className='flex items-center space-x-1'>
            <ContactMailIcon sx={{fontSize:20,color:"black"}}/> <p>{formateur.username}</p>
            </div>
            <div>
            <div className='flex items-center space-x-1'>
            <GroupsIcon sx={{fontSize:30}}/> <p>2,527,175 Students</p>
                </div>
            </div>
          </div>
        </div>
               <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
              >
                 
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-rythme-select-label">Rythme</InputLabel>
                      <Select
                        labelId="demo-rythme-select-rythme"
                        id="demo-rythme-select"
                        type="text"
                        name="rythme"
                        value={evaluation.rythme}
                        label="rythme"
                        onChange={handleChange}
                      >
                        {rythmes.map((item,value)=>( 
                             <MenuItem key={value} value={item.value}>{item.value}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl>

                     <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-support-select-label">Support cours et tp</InputLabel>
                      <Select
                        labelId="demo-support-select-label"
                        id="demo-support-select"
                        type="text"
                        name="supportcourstp"
                        value={evaluation.supportcourstp}
                        label="supportcourstp"
                        onChange={handleChange}
                      >
                        {supportcourstps.map((item,value)=>( 
                             <MenuItem key={value} value={item.value}>{item.value}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl>
                    <br/>

                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-maitrise-select-label">Maitrise du sujet</InputLabel>
                      <Select
                        labelId="demo-maitrise-select-label"
                        id="demo-maitrise-select"
                        type="text"
                        name="maitrisesujet"
                        value={evaluation.maitrisesujet}
                        label="maitrisesujet"
                        onChange={handleChange}
                      >
                        {qualites.map((item,value)=>( 
                             <MenuItem key={value} value={item.value}>{item.value}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-peda-select-label">Qualité pédagogique</InputLabel>
                      <Select
                        labelId="demo-peda-select-label"
                        id="demo-peda-select"
                        type="text"
                        name="qualitepeda"
                        value={evaluation.qualitepeda}
                        label="qualitepeda"
                        onChange={handleChange}
                      >
                        {qualites.map((item,value)=>( 
                             <MenuItem key={value} value={item.value}>{item.value}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl> <br/>

                       {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel htmlFor="outlined-adornment-remarque">Remarque</InputLabel>
                       <OutlinedInput
                        id="outlined-adornment-remarque"
                        type="text"
                        name="remarque"
                        value={evaluation.remarque}
                        onChange={handleChange}
                        label="remarque"
                        />
                    </FormControl>

                     <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-note"
                    >
                        Note /10 
                    </InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-note"
                        type="number"
                        name="note"
                        value={evaluation.note}
                        onChange={handleChange}
                        label="note"
                        />
                    </FormControl>


                </Box>
                  <div className='flex mb-3 justify-center space-x-7'>                
                          <Link to= {`/formation/${formationID}`}> 
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

const qualites = [
  { id: 1, value: 'Excellente' },
  { id: 2, value: 'Bonne' },
  { id: 3, value: 'Moyenne' },
  { id: 4, value: 'Faible' },
];

const rythmes = [
  { id: 1, value: 'Très rapide' },
  { id: 2, value: 'Rapide' },
  { id: 3, value: 'Modéré' },
  { id: 4, value: 'Lent' },
  { id: 4, value: 'Très lent' },
];

const maitrisesujets  = [
  { id: 1, value: 'Excellente' },
  { id: 2, value: 'Bonne' },
  { id: 3, value: 'Moyenne' },
  { id: 4, value: 'Faible' }
];

const supportcourstps  = [
  { id: 1, value: 'Très bien' },
  { id: 2, value: 'Bien' },
  { id: 3, value: 'Moyen' },
  { id: 4, value: 'Insuffisant' }
];










