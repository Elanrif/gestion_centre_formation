import React from 'react'
import Avatar from '@mui/material/Avatar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Button from '@mui/material/Button';
import Formation from './Formation';
import PaginationRule from './PaginationRule';
import FilterMenu from '../FilterMenu';
import FiltreFormation from '../Filtre/FiltreFormation';
import {FilterContext} from '../FilterContext';

const listinitFormations = [
    {
        id: 1,
        category: "Développement",
        ville : "Kenitra",
        heure:72,
        nom: "Formation Spring Boot",
        image: "/image/formation/spring-boot.jpeg",
        description: "Maîtrisez le développement d'applications Java avec Spring Boot. Cette formation approfondie vous plonge dans l'écosystème robuste de Spring, vous enseignant comment créer des applications Java efficaces avec une configuration minimale.",
        formateur: "Dr. Sarah Dev"
    },
    {
        id: 2,
        heure:120,
        category: "Développement",
        ville : "Casablanca",
        nom: "Formation ReactJS",
        image: "/image/formation/reactjs.png",
        description: "Explorez le monde passionnant de ReactJS, la bibliothèque JavaScript frontale développée par Facebook. Sous la guidance de nos experts en React, vous serez prêt à créer des applications web modernes et dynamiques.",
        formateur: "Dr. Manar Bakhat"
    },
    {
        id: 3,
        heure:60,
        category: "Développement",
        ville : "Casablanca",
        nom: "Formation Laravel",
        image: "/image/formation/Laravel.jpg",
        description: "Plongez dans le framework PHP élégant et expressif avec notre formation Laravel.  Cette formation complète, dirigée par nos experts en Laravel, vous guidera à travers les aspects essentiels du framework, de l'ORM Eloquent à la gestion des migrations. Préparez-vous à exceller dans le développement PHP avec Laravel.",
        formateur: "S. Max Laravel"
    },
    {
        id: 4,
        heure:80,
        category: "Développement",
         ville : "Casablanca",
        nom: "Formation HTML, CSS, JavaScript",
        image: "/image/formation/html-css-javascript.png",
        description: "Découvrez les fondamentaux du développement web avec notre formation HTML, CSS, et JavaScript. De la structure de base avec HTML à la stylisation avec CSS, jusqu'à l'ajout d'interactivité dynamique avec JavaScript, cette formation vous offre une base solide pour créer des sites web attrayants et fonctionnels. ",
        formateur: "S. Webmaster"
    },
    {
        id: 5,
        heure:100,
        category: "IA (Intelligence Artificielle)",
        ville : "Rabat",
        nom: "Formation Machine Learning",
        image: "/image/formation/Machine-learning.png",
        description: "Explorez le domaine passionnant du Machine Learning avec notre formation approfondie. Apprenez les concepts clés du ML, des algorithmes d'apprentissage supervisé aux méthodes d'apprentissage non supervisé. Sous la direction de nos experts en Machine Learning, plongez dans des projets pratiques pour mettre en œuvre vos connaissances",
        formateur: "Dr. AI Guru"
    }, 
    {
        id: 6,
        heure:200,
        category: "IA (Intelligence Artificielle)",
         ville : "Rabat",
        nom: "Formation Big Data",
        image: "/image/formation/big-data.png",
        description: "Explorez le monde du Big Data avec notre formation spécialisée. Plongez dans les technologies et les outils qui permettent de gérer, analyser et tirer des insights à partir de grandes quantités de données.  Préparez-vous à maîtriser les compétences essentielles pour exceller dans le domaine du Big Data.",
        formateur: "Dr. Data Master"
    }
    
    ]

const reducer = (state, action) => {
  switch (action.type) {
     case 'tout':
        const { category, ville } = action.payload;
        console.log("Test ...", action.test)
      return state.filter((formation) => formation.category === category && formation.ville === ville);

    case 'category':
      return state.filter((formation) => formation.category === action.payload);

    case 'ville':
      return state.filter((formation) => formation.ville === action.payload);

    case 'date':
      return state.filter((formation) => formation.date === action.payload);

    case 'init' : 
    return action.payload ;

    default:
      return state ;
  }
};

function Formations() {

    const [open, setOpen] = React.useState(false);
    const [filtre, setFiltre] = React.useState('');
    const [formations, dispatch] = React.useReducer(reducer,listinitFormations);

  const handleClickOpen = () => {
    setOpen(true);
  };



  return (
    <div>
    <FilterContext.Provider value={{open,setOpen,filtre,setFiltre,listinitFormations,dispatch}}>
        <div className='max-w-[80rem] my-4 mx-auto hover:cursor-pointer'>
            <h1 className='text-3xl font-black text-slate-400'> Nos formations</h1>
                <FilterMenu /> 
                <FiltreFormation/>
        </div>
        {formations.map((item,index)=>{
            return(
                <React.Fragment key={index}>
                <Formation formation={item}/>
                </React.Fragment>
            )
        })}
        <PaginationRule/>
    </FilterContext.Provider>
    </div>
  )
}

export default Formations