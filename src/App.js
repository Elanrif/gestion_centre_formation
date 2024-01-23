import React,{useState,useEffect} from 'react';
import './App.css';
import { Routes, Route, useParams } from "react-router-dom";
import Acceuil from './acceuil/Acceuil';
import Admin from './acceuil/form/Admin';
import Assistant from './acceuil/form/Assistant';
import Formateur from './acceuil/form/Formateur';
import Utilisateur from './acceuil/form/Utilisateur';
import FormateurR from './acceuil/form-register/FormateurR';
import UtilisateurR from './acceuil/form-register/UtilisateurR';
import { AuthContext } from './Context';
import axios from 'axios';
import Basic from './Basic';
import AdminDashboard from './admin/dashboard/AdminDash';
import View from './admin/View';
import Formation from './admin/formaton/Formation';
import Entreprise from './admin/entrepris/Entreprise';
import FormateurA from './admin/formateur/Formateur';
import AddFormation from './admin/formaton/AddFormation';
import AddEntreprise from './admin/entrepris/AddEntreprise';
import UpdateFormation from './admin/formaton/UpdateFormation';
import User from './admin/user/User';
import AddUser from './admin/user/AddUser';
import UpdateUser from './admin/user/UpdateUser';
import AddFormateurA from './admin/formateur/AddFormateur';
import UpdateFormateurA from './admin/formateur/UpdateFormateur';
import UpdateEntreprise from './admin/entrepris/UpdateEntreprise';
import Ville from './admin/ville/Ville';
import UpdateVille from './admin/ville/UpdateVille';
import AddVille from './admin/ville/AddVille';
import Autocomplete from './admin/formaton/AutoComplete';
import Categorie from './admin/categorie/Categorie';
import AddCategorie from './admin/formaton/AddCategorie';
import UpdateCategorie from './admin/categorie/UpdateCategorie';

function App() {

   const authenticate = sessionStorage.getItem("auth") ? JSON.parse( sessionStorage.getItem("auth")) : null ; 

  const [auth,setAuth] = useState({
    id : 0
  }) 

  useEffect(() => {
  authenticate && setAuth(authenticate)
  console.log(auth)
  }, [auth.id])

   useEffect(() => {
    intecepteurs()
  })


  const intecepteurs = ()=>{
        axios.interceptors.request.use(function (request) {
      const principal = auth
          const username =  "elanrif@gmail.com"
          const password = 1234

      if (principal.username) {
        request.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
      }
      return request
    }, (error) => {
     // return Promise.reject(error);
     console.log(error)
    });
  }
  
  return (
   <>
    <AuthContext.Provider value={{auth,setAuth}}>
          <Routes>
            <Route path="/" element={<Acceuil />}/>
            <Route path="/basic" element={<Basic />}/>
            <Route path="/login/admin" element={<Admin />}/>
            <Route path="/login/assistant" element={<Assistant />}/>
            <Route path="/login/utilisateur" element={<Utilisateur />}/>
            <Route path="/login/formateur" element={<Formateur />}/>
            <Route path="/register/formateur" element={<FormateurR />}/>
            <Route path="/register/utilisateur" element={<UtilisateurR />}/>

            <Route path="/admin" element={<AdminDashboard />}>
            <Route index path="dashboard" element={<View />}/>
            
            <Route  path="formations" element={<Formation />}/>
            <Route  path="formations/add" element={<AddFormation />}/>
            <Route  path="formations/edit/:formationID" element={<UpdateFormation />}/>

            <Route  path="entreprises" element={<Entreprise />}/>
            <Route  path="entreprises/add" element={<AddEntreprise />}/>
            <Route  path="entreprises/edit/:entrepriseID" element={<UpdateEntreprise />}/>

            <Route  path="formateurs" element={<FormateurA />}/>
            <Route  path="formateurs/add" element={<AddFormateurA />}/>
            <Route  path="formateurs/edit/:formateurID" element={<UpdateFormateurA />}/>

            <Route  path="users" element={<User />}/>
            <Route  path="users/add" element={<AddUser />}/>
            <Route  path="users/edit/:userID" element={<UpdateUser />}/>

            <Route  path="assistants" element={<User />}/>
            <Route  path="assistants/add" element={<AddUser />}/>
            <Route  path="assistants/edit/:assistantID" element={<UpdateUser />}/>

            <Route  path="categories" element={<Categorie />}/>
            <Route  path="categories/add" element={<AddCategorie />}/>
            <Route  path="categories/edit/:categorieID" element={<UpdateCategorie />}/>

            <Route  path="villes" element={<Ville />}/>
            <Route  path="villes/add" element={<AddVille />}/>
            <Route  path="villes/edit/:villeID" element={<UpdateVille />}/>

            </Route>

            <Route  path="/auto" element={<Autocomplete />}/>
            
          </Routes>
    </AuthContext.Provider></>
  );
}

export default App;
