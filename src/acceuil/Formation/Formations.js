import React,{useEffect} from 'react'
import Formation from './Formation';
import PaginationRule from './PaginationRule';
import FilterMenu from '../FilterMenu';
import FiltreFormation from '../Filtre/FiltreFormation';
import {FilterContext} from '../FilterContext';
import axios from 'axios';


const reducer = (state, action) => {

  switch (action.type) {
     case 'tout':
        const { category, date,ville } = action.payload;
        console.log("Test ...", action.test)
      return state.filter((formation) => formation.category === category && formation.ville === ville &&  new Date(formation.startDate) >= new Date(date));

    case 'category':
      return state.filter((formation) => formation.category?.nom === action.payload);;

    case 'ville':
      return state.filter((formation) => formation.ville?.nom === action.payload);

    case 'date':
      return state.filter((formation) => new Date(formation.startDate) >= new Date(action.payload) );

    case 'init' : 
    return action.payload ;

    default:
      return state ;
  }
};

function Formations() {

  
  const [open, setOpen] = React.useState(false);
  const [filtre, setFiltre] = React.useState('');
  const [formations, dispatch] = React.useReducer(reducer,[]);
  
  
  useEffect(() => {
    handleLoadFormations()
  }, [])
  
  const handleLoadFormations = ()=>{

    axios
      .get("/formations")
      .then((res) => {
        dispatch({ type: "init", payload: res.data });
      });
  }

  return (
    <div>
    <FilterContext.Provider value={{open,setOpen,filtre,setFiltre,formations,handleLoadFormations,dispatch}}>
        <div className='max-w-[80rem] pt-5 my-4 mx-auto hover:cursor-pointer'>
            <h1 className='text-3xl font-black text-slate-400'> Catalogue des formations</h1>
                <FilterMenu /> 
                <FiltreFormation/>
        </div>
        {formations?.sort((a, b) => b.id - a.id).map((item,index)=>{
            return(
                <div className='mx-auto max-w-[80rem]' key={index}>
                <Formation formation={item}/>
                </div>
            )
        })}
        <PaginationRule/>
    </FilterContext.Provider>
    </div>
  )
}

export default Formations