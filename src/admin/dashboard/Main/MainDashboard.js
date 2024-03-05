import React,{useContext, useEffect,useReducer} from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import DashboardIcon from '@mui/icons-material/Dashboard';
import axios from 'axios';
import { AuthContext } from '../../../Context';

const initialState = {
  formateurs: null,
  formations:null,
  entreprises: null,
  assistants: null,
  villes : null,
  categories:null,
  persons:null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'formateurs':
      return { ...state, formateurs: action.payload };
    case 'formations':
    return { ...state, formations: action.payload };
    case 'entreprises':
      return { ...state, entreprises: action.payload };
    case 'assistants':
      return { ...state, assistants: action.payload };
    case 'villes':
      return { ...state, villes: action.payload };
    case 'categories':
      return { ...state, categories: action.payload };
    case 'persons':
      return { ...state, persons: action.payload };
    // Ajoutez d'autres cas selon les besoins
    default:
      return state;
  }
};


export default function MainDashboard() {

 const [data, dispatch] = useReducer(reducer, initialState);

 const {auth} = useContext(AuthContext)

 useEffect(() => {
   handleloadFormateurs()
   handleloadFormations()
   handleloadAssistants()
   handleloadUtilisateurs()
   handleloadCategories()
   handleloadVilles()
   handleloadEntreprises()
 
 }, [])

 const handleloadFormateurs = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/persons/role", {
        params: {
          role: "ROLE_FORMATEUR",
        },
      })
      .then((res) => {
        dispatch({ type: "formateurs", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }

 const handleloadAssistants = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/persons/role", {
        params: {
          role: "ROLE_ASSISTANT",
        },
      })
      .then((res) => {
        dispatch({ type: "assistants", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }

 const handleloadUtilisateurs = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/utilisateurs")
      .then((res) => {
        dispatch({ type: "utilisateurs", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }

 const handleloadFormations = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/formations")
      .then((res) => {
        dispatch({ type: "formations", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }

 const handleloadVilles = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/villes")
      .then((res) => {
        dispatch({ type: "villes", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }

 const handleloadCategories = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/categories")
      .then((res) => {
        dispatch({ type: "categories", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }
 
 const handleloadEntreprises = ()=>{
    axios
      .get("https://gestion-centre-formation.onrender.com/entreprises")
      .then((res) => {
        dispatch({ type: "entreprises", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
 }


  return (
     <div>
          <div className='px-7 py-3 bg-black text-white  capitalize font-black'>
            <DashboardIcon sx={{fontSize:50,color:"white"}}/> TABLEAU DE BORD {auth.role === "ROLE_ADMIN" ? "ADMINISTRATEUR" : "ASSISTANT" }</div>

        <div className='flex justify-center '>
        <div className='grid border py-10  h-[70vh]
          grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4'>
            <Left data={data}/>
            <Center data={data}/>
            <Right data={data}/>
        </div>
       </div>
    </div>
  )
}
