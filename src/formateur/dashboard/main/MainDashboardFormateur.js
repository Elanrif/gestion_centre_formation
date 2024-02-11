import React,{useContext, useEffect,useReducer} from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import DashboardIcon from '@mui/icons-material/Dashboard';
import axios from 'axios';
import { AuthContext } from '../../../Context';

const initialState = {
  evaluations: null,
  formations:null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "formations":
      return { ...state, formations: action.payload };
    case "evaluations":
      return { ...state, evaluations: action.payload };
    default:
      return state;
  }
};

export default function MainDashboardFormateur() {

 const {auth,setAuth} = useContext(AuthContext)

 const [data, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
   handleloadEvaluations()
   handleloadFormations()
 
 }, [auth.id])

 const handleloadEvaluations = () => {
   axios
     .get(`/evaluations/formateur/${auth.id}`)
     .then((res) => {
       dispatch({ type: "evaluations", payload: res.data });
     })
     .catch((err) => {
       console.log(err);
     });
 };

 const handleloadFormations = () => {
   axios
     .get(`/formations/formateur/${auth.id}`)
     .then((res) => {
       dispatch({ type: "formations", payload: res.data });
     })
     .catch((err) => {
       console.log(err);
     });
 };

console.log("donnee : " , data)

  return (
     <div>
          <div className='px-7 py-3 bg-black text-white  capitalize font-black'>
            <DashboardIcon sx={{fontSize:50,color:"white"}}/> TABLEAU DE BORD FORMATEUR</div>

        <div className='flex justify-center '>
        <div className='grid border py-10  h-[70vh]
          grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4'>
            <Left/>
            <Center data={data}/>
            <Right data={data}/>
        </div>
       </div>
    </div>
  )
}
