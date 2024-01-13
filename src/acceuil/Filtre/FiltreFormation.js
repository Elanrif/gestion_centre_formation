import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import {FilterContext} from '../FilterContext';
export default function FiltreFormation(props) {
//  const [open, setOpen] = React.useState(false);

const {open,setOpen,filtre,dispatch,listinitFormations} = React.useContext(FilterContext)

const [data,setData] = React.useState({}) 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const autoComplete = ()=>{

    switch(filtre){

        case 'category':
            return <> 
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categories}
            sx={{ width: 400,height:320 }}
            renderInput={(params) => <TextField {...params} label="Categories"
             autoFocus
            required
            margin="dense"
            id="name"
            name="category"
            type="text"
            fullWidth />}
            />
            </> 
           case 'ville':
            return <> 
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={villes}
            sx={{ width: 400,height:320 }}
            renderInput={(params) => <TextField {...params} label="Villes"
             autoFocus
            required
            margin="dense"
            id="name"
            name="ville"
            type="text"
            fullWidth />}
            />
            </>
           case 'date':
            return <> 
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={dates}
            sx={{ width: 400,height:320 }}
            renderInput={(params) => <TextField {...params} label="Date"
             autoFocus
            required
            margin="dense"
            id="name"
            name="date"
            type="date"
            fullWidth />}
            />
            </>
           case 'tout':
            return <> 
             <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categories}
            sx={{ width: 400,height:70 }}
            renderInput={(params) => <TextField {...params} label="Categories"
             autoFocus
            required
            margin="dense"
            id="name"
            name="category"
            type="text"
            fullWidth />}
            />
             <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={villes}
            sx={{ width: 400,height:70 }}
            renderInput={(params) => <TextField {...params} label="Villes"
             autoFocus
            required
            margin="dense"
            id="name"
            name="ville"
            type="text"
            fullWidth />}
            />
           <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={dates}
            sx={{ width: 400,height:70 }}
            renderInput={(params) => <TextField {...params} label="Date"
             autoFocus
            required
            margin="dense"
            id="name"
            name="date"
            type="date"
            fullWidth />}
            />
            </> 
           
        default:
            console.log(" aucune valeur , error")
    }
    
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    //avant d'envoyer on initialise la listeFormation par defaut:
    dispatch({type:'init',payload: listinitFormations})

    const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const category = formJson.category;
            const ville = formJson.ville;
            const date = formJson.date;


            if(category && ville){
                console.log("formData category et ville : ", category, "-",ville)
                  setData((prev)=>({
                    ...prev,
                    date : date
                 }))
                // dispatch({type:'tout',test:category})
                 dispatch({type:'tout',payload: {category:category,ville:ville}}) 
            }else{

                  if(category){
                 console.log("formData category :",category)
                 setData((prev)=>({
                    ...prev,
                    category : category
                 }))
                 dispatch({type:'category',payload: category}) 
            }
            if(ville){
                 console.log("formData ville :",ville)
                 setData((prev)=>({
                    ...prev,
                    ville : ville
                 }))
                 dispatch({type:'ville',payload: ville})
            }
            if(date){
                 console.log("formData date :", date)
                 setData((prev)=>({
                    ...prev,
                    date : date
                 }))
                 dispatch({type:'date',payload: date})
            }
            }        

            handleClose()
           
  }

  React.useEffect(() => {
    
     console.log("useEffect FiltreFormation : " , data)
  }, [data])
  

  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit:  handleSubmit,
        }}
      >
        <DialogTitle>Filter par <span className='lowercase'> {filtre}</span> </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez sélectionner la <span className='lowercase'> {filtre}</span> .
          </DialogContentText>
          {autoComplete()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Valider</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const categories = [
    { label: 'Développement' },
    { label: 'Design' },
    { label: 'IA (Intelligence Artificielle)' },
    { label: 'Marketing' },
    { label: 'Photographie' },
    // Ajoutez d'autres catégories au besoin
];


const villes = [
    { label: 'Beni Mlal', country: 'Maroc' },
    { label: 'Kenitra', country: 'Maroc' },
    { label: 'Oujda', country: 'Maroc' },
    { label: 'Casablanca', country: 'Maroc' },
    { label: 'Rabat', country: 'Maroc' },
    { label: 'Marrakech', country: 'Maroc' },
];

const dates = [
    { label: '2022-03-01' },
    { label: '2022-03-15' },
    { label: '2022-04-01' },
    { label: '2022-04-15' },
    { label: '2022-05-01' },
    { label: '2022-05-15' },
    { label: '2022-06-01' },
    { label: '2022-06-15' },
    { label: '2022-07-01' },
    // Ajoutez d'autres dates au besoin
];

const tout = [

]
