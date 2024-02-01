import React,{useState,useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Acceuil from './acceuil/Acceuil';
import Admin from './acceuil/form/Admin';
import Assistant from './acceuil/form/Assistant';
import Formateur from './acceuil/form/Formateur';
import Utilisateur from './acceuil/form/Utilisateur';
import FormateurR from './acceuil/form-register/FormateurR';
import UtilisateurR from './acceuil/form-register/UtilisateurR';
import { AuthContext } from './Context';
import axios from 'axios';
import AdminDashboard from './admin/dashboard/AdminDash';
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
import Categorie from './admin/categorie/Categorie';
import UpdateCategorie from './admin/categorie/UpdateCategorie';
import AssistantA from './admin/assistant/AssistantA';
import AddAssistant from './admin/assistant/AddAssistant';
import UpdateAssistant from './admin/assistant/UpdateAssistant';
import AddCategorieC from './admin/categorie/AddCategorieC';
import MainDashboard from './admin/dashboard/Main/MainDashboard';
import DetailFormation from './acceuil/detailsFormation/DetailFormation';
import Header from './acceuil/Header';
import FormulaireIndividu from './acceuil/detailsFormation/formindividus/FormulaireIndividu';
import Formevaluation from './acceuil/detailsFormation/evaluation/Formevaluation';
import InputEmail from './acceuil/detailsFormation/InputEmail';
import 'react-toastify/dist/ReactToastify.css';
import ListEntreprise from './admin/formaton/liste/ListEntreprise';
import ListParticipant from './admin/formaton/liste/ListParticipant';
import ShowFormation from './admin/formaton/ShowFormation';
import FormateurDashboard from './formateur/dashboard/main/FormateurDash';
import UserDashboard from './user/dashboard/main/UserDash';
import MainDashboardFormateur from './formateur/dashboard/main/MainDashboardFormateur';
import MainDashboardUser from './user/dashboard/main/MainDashboardUser';
import FormationFormateur from './formateur/dashboard/FormationFormateur';
import FormationUser from './user/dashboard/FormationUser';
import EvaluationFormateur from './formateur/dashboard/EvaluationFormateur';
import EvaluationUser from './user/dashboard/EvaluationUser';
import Evaluation from './admin/evaluation/Evaluation';


function App() {

   const authenticate = sessionStorage.getItem("auth") ? 
                          JSON.parse( sessionStorage.getItem("auth")) : 
                          {
                            id : 0
                          } 

  const [auth,setAuth] = useState({
    id : 0
  }) 

  useEffect(() => {
    setAuth(authenticate)
  }, [authenticate.id])

   useEffect(() => {
    intecepteurs()
  })


  const intecepteurs = ()=>{
        axios.interceptors.request.use(function (request) {
      const principal = auth
          const username =  auth.username
          const password = auth.password

      if (principal.role === "ROLE_ADMIN" || principal.role === "ROLE_ASSISTANT") {
        request.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
        console.log(" Basic auth success")
      }
      return request
    }, (error) => {
     // return Promise.reject(error);
     console.log("error Basic auth ")
    });
  }


  
  return (
   <>
  
    <AuthContext.Provider value={{auth,setAuth}}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index path="" element={<Acceuil />}/>
              <Route path="formation/:detailformID" element={<DetailFormation />}/>
            </Route >
            <Route path="/formation/:IDform/formulaire" element={<FormulaireIndividu />}/>
            <Route path="/evaluation/formateur/:formateurIdeval/utilisateur/:userID/formation/:formationID" element={<Formevaluation />}/>
            <Route path="/formation/:formaID/email" element={<InputEmail />}/>
            <Route path="/login/admin" element={<Admin />}/>
            <Route path="/login/assistant" element={<Assistant />}/>
            <Route path="/login/utilisateur" element={<Utilisateur />}/>
            <Route path="/login/formateur" element={<Formateur />}/>
            <Route path="/register/formateur" element={<FormateurR />}/>
            <Route path="/register/utilisateur" element={<UtilisateurR />}/>

               {
               ( auth.role === "ROLE_ADMIN" || auth.role === "ROLE_ASSISTANT" ) &&
                <Route path="/admin" element={<AdminDashboard />}>
                <Route index path="dashboard" element={<MainDashboard />}/>
                
                <Route  path="formations" element={<Formation />}/>
                <Route  path="formations/add" element={<AddFormation />}/>
                <Route  path="formations/edit/:formationID" element={<UpdateFormation />}/>
                <Route  path="formations/show/:showID" element={<ShowFormation />}/>
                <Route  path="formations/:idFormation/entreprises" element={<ListEntreprise />}/>
                <Route  path="formations/:idFormation/participants" element={<ListParticipant />}/>

                <Route  path="entreprises" element={<Entreprise />}/>
                <Route  path="entreprises/add" element={<AddEntreprise />}/>
                <Route  path="entreprises/edit/:entrepriseID" element={<UpdateEntreprise />}/>

                <Route  path="formateurs" element={<FormateurA />}/>
                <Route  path="formateurs/add" element={<AddFormateurA />}/>
                <Route  path="formateurs/edit/:formateurID" element={<UpdateFormateurA />}/>

                <Route  path="evaluations" element={<Evaluation />}/>
                
                <Route  path="assistants" element={<AssistantA />}/>
                <Route  path="assistants/add" element={<AddAssistant />}/>
                <Route  path="assistants/edit/:assistantID" element={<UpdateAssistant />}/>

                <Route  path="users" element={<User />}/>
                <Route  path="users/add" element={<AddUser />}/>
                <Route  path="users/edit/:userID" element={<UpdateUser />}/>

                <Route  path="categories" element={<Categorie />}/>
                <Route  path="categories/add" element={<AddCategorieC />}/>
                <Route  path="categories/edit/:categorieID" element={<UpdateCategorie />}/>

                <Route  path="villes" element={<Ville />}/>
                <Route  path="villes/add" element={<AddVille />}/>
                <Route  path="villes/edit/:villeID" element={<UpdateVille />}/>

                </Route>
                }
                
                {
                 ( auth.role === "ROLE_FORMATEUR")
                 &&
                 <Route path="/formateur" element={<FormateurDashboard />}>
                <Route index path="dashboard" element={<MainDashboardFormateur />}/>
                <Route index path="formations" element={<FormationFormateur />}/>
                <Route index path="evaluations" element={<EvaluationFormateur />}/>
                </Route>
                }

                {
                  auth.role === "ROLE_USER" &&
                   <Route path="/user" element={<UserDashboard />}>
                <Route index path="dashboard" element={<MainDashboardUser />}/>
                <Route index path="formations" element={<FormationUser />}/>
                <Route index path="evaluations" element={<EvaluationUser />}/>
                </Route>
               
                }

           {/*  <Route  path="*" element={<SimpleBackdrop />}/> */}
            
          </Routes>
    </AuthContext.Provider>
  </>
  );
}

export default App;
