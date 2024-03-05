import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { FormationContext } from './FormationContext';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';


export default function AddPlanification(props) {
   
    /*si Formation.Provider value={} on ne destructure pas handleSetUpdate , sinon si Formation.Provider value={{}} on desctructure {handleSetUpdate} */
    const handleSetUpdate = React.useContext(FormationContext)

    const [dates, setDates] = React.useState({
                                                startDate : "",
                                                finishDate:""
                                            })
 
  const handleClose = () => {
    
    props.value.handleCloseImg()
  }


  const handleChange = (e)=>{
    const target = e.target;
    const value = target.value;
    const name = target.name

      setDates((prev)=>({
        ...prev,
        [name]:value
      }))
  }



  const handleSubmit = (event)=>{
      
      event.preventDefault()
      const id = props.value.data.id  ;
    console.log(dates)
   // Vérifier si startDate est inférieur à finishDate
    if (new Date(dates.startDate) >= new Date(dates.finishDate)) {
        
    console.error("La date de début doit être inférieure à la date de fin");
    } else {
    axios
      .get(
        "https://gestion-centre-formation.onrender.com/formations/planification",
        {
          params: {
            id: id,
            startDate: dates.startDate,
            finishDate: dates.finishDate,
          },
        }
      )
      .then((res) => {
        // Recharger les données formations
        handleSetUpdate();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    

    handleClose();
  }


  
  return (
    <React.Fragment>
      <Dialog
        open={props.value.opened}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Planifier les dates</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Entrer la date de début et de fin. 
          </DialogContentText>
         
                {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '55ch' }}>
                      <TextField id="outlined-basic" type="date" label="Date début" name="startDate" value={dates.startDate} onChange={handleChange} variant="outlined" />
                      
                    </FormControl>
                        <FormControl sx={{ m: 1, width: '55ch' }}>
                      <TextField id="outlined-basic" type="date" label="Date fin" name="finishDate" value={dates.finishDate} onChange={handleChange} variant="outlined" />
                    </FormControl>

        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Button sx={{ marginRight: 2}} onClick={handleClose} variant="contained" color='error'>Annuler</Button>
            <Button type="submit" variant="contained">Ajouter</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
