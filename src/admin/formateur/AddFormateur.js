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
import { Link } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';

export default function AddFormateur() {

 
  const {auth,setAuth} = useContext(AuthContext)

   const [villes, setVilles] = useState([])

  const [formateur, setFormateur] = useState(
    {
      nom : "",
      prenom : "",
      remarque:"",
      username : "",
      description:"",
      password : "",
      checkPwd:"",
      tel : "",
      ville : {
        id:null,
        nom:""
      },
      competence:"",
      role:"ROLE_FORMATEUR"
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

     setFormateur((prev) => {
        if (name === "ville") {
      
          return {
            ...prev,
            [name]: { id: value }
          };
        } else {
          // Sinon, metre à jour normalement
          return {
            ...prev,
            [name]: value
          }
        }
     })

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
      formateur.description === "" ||
      formateur.competence === "" ||
      formateur.prenom === "" ||
      formateur.username === "" ||
      formateur.password ==="" ||
      formateur.tel === "" ? alert("veuillez remplir tout les champs *") : saveFormateur()
    }
  
  }

   const success = ()=> toast.success('succès !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  const saveFormateur = ()=>{
       
     // Supprimer la clé 'checkPwd' et sa valeur du state
   const { checkPwd, ...formater } = formateur;

    axios
      .post("https://gestion-centre-formation.onrender.com/persons", formater)
      .then((res) => {
        success();
        setTimeout(() => {
          navigate("/admin/formateurs");
        }, 2000);
        setFormateur({
          nom: "",
          prenom: "",
          username: "",
          description: "",
          remarque: "",
          password: "",
          checkPwd: "",
          tel: "",
          ville: {
            id: null,
            nom: "",
          },
          competence: "",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

    useEffect(() => {
        
      axios
        .get("https://gestion-centre-formation.onrender.com/villes")
        .then((res) => {
          setVilles(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
        
      }, [])

  return (
    <div className='bg-slate-50 '>
        <div className='h-[100vh] flex items-center justify-center'>
            <div className=''>
            <Box 
                component="form"
                onSubmit={handleSubmit}>
                  <p className='text-center my-3'> Ajouter un formateur </p>
               <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '55ch' },
                }}
                noValidate
                autoComplete="off"
              >
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
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

                 {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-simple-select-label">Ville</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        type="text"
                        name="ville"
                        value={formateur.ville?.id}
                        label="ville"
                        onChange={handleChange}
                      >
                        {villes.map((item,value)=>( 
                             <MenuItem key={value} value={item.id}>{item.nom}</MenuItem>                    
                        ))}
                        
                      </Select>
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
                          />
                    </FormControl> <br/>
                     <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-competence"
                    >
                        Déscription </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-description"
                            type="text"
                            name="description"
                            value={formateur.description}
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
                            label="description"
                          />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-remarque"
                    >
                        Remarque </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-remarque"
                            type="text"
                            name="remarque"
                            value={formateur.remarque}
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
                            label="description"
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
                 <div className='flex mb-3 justify-center space-x-7'>                
                        <Link to= "/admin/formateurs"> 
                        <Button  variant="contained" color="secondary" sx={{mt:3 , width:150}}> retour  </Button> 
                        </Link>        
                     <Button type="submit" variant="contained"  color="success" sx={{mt:3 , width:150}}>Valider</Button>
                </div>
            </Box>
            </div>
        </div>
         <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </div>
  )
}

