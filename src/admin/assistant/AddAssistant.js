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

export default function AddAssistant() {

 
  const {auth,setAuth} = useContext(AuthContext)

   const [villes, setVilles] = useState([])

  const [assistant, setAssistant] = useState(
    {
      nom : "",
      prenom : "",
      username : "",
      password : "",
      checkPwd:"",
      tel : "",
      ville : {
        id:null,
        nom:""
      },
      
      role:"ROLE_ASSISTANT"
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

     setAssistant((prev) => {
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

     if(assistant.password != assistant.checkPwd)
    {
     
    alert("password error !")
     setAssistant((prevState)=>({
      ...prevState,
      password : "",
      checkPwd : "", 
     }))
    }
    else {

      assistant.nom === "" ||
      assistant.prenom === "" ||
      assistant.prenom === "" ||
      assistant.username === "" ||
      assistant.password ==="" ||
      assistant.tel === "" ? alert("veuillez remplir tout les champs *") : saveAssistant()
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

  const saveAssistant = ()=>{
       
     // Supprimer la clé 'checkPwd' et sa valeur du state
   const { checkPwd, ...formater } = assistant;

    axios
      .post("https://gestion-centre-formation.onrender.com/persons", formater)
      .then((res) => {
        success();
        setTimeout(() => {
          navigate("/admin/assistants");
        }, 2000);

        setAssistant({
          nom: "",
          prenom: "",
          username: "",
          password: "",
          checkPwd: "",
          tel: "",
          ville: {
            id: null,
            nom: "",
          },
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
    <div className='bg-slate-50'>
        <div className='h-[100vh] text-center flex items-center justify-center'>
              <div className='text-center xl:text-start xl:w-[62rem]'>
                    <Box 
                component="form"
                onSubmit={handleSubmit}
                >
                 <p className='mb-7'> Ajouter un assistant.</p>
                 
               <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '55ch' },
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
                            value={assistant.nom}
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
                            value={assistant.prenom}
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
                            value={assistant.username}
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
                            value={assistant.tel}
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
                    </FormControl>

                 {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-simple-select-label">Ville</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        type="text"
                        name="ville"
                        value={assistant.ville?.id}
                        label="ville"
                        onChange={handleChange}
                      >
                        {villes.map((item,value)=>( 
                             <MenuItem key={value} value={item.id}>{item.nom}</MenuItem>                    
                        ))}
                        
                      </Select>
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
                      id="outlined-adornment-password2"
                      name="checkPwd"
                      value={assistant.checkPwd}
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
                      value={assistant.password}
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

                </Box>
                 <div className='flex mb-3 justify-center space-x-7'>                
                        <Link to= "/admin/assistants"> 
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

