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

function App() {

   const authenticate = sessionStorage.getItem("auth") ? JSON.parse( sessionStorage.getItem("auth")) : null ; 

  const [auth,setAuth] = useState({
    id : -1
  }) 

  useEffect(() => {
  authenticate && setAuth(authenticate)
  console.log(auth)
  }, [auth.id])

  return (
   <>
    <AuthContext.Provider value={{auth,setAuth}}>
          <Routes>
            <Route path="/" element={<Acceuil />}/>
            <Route path="/login/admin" element={<Admin />}/>
            <Route path="/login/assistant" element={<Assistant />}/>
            <Route path="/login/utilisateur" element={<Utilisateur />}/>
            <Route path="/login/formateur" element={<Formateur />}/>
            <Route path="/register/formateur" element={<FormateurR />}/>
            <Route path="/register/utilisateur" element={<UtilisateurR />}/>
          </Routes>
    </AuthContext.Provider></>
  );
}

export default App;
