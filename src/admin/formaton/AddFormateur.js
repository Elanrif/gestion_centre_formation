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


export default function AddFormateur(props) {
   
  /*si Formation.Provider value={} on ne destructure pas handleSetUpdate , sinon si Formation.Provider value={{}} on desctructure {handleSetUpdate} */
  const handleSetUpdate = React.useContext(FormationContext)

  const [formateurId, setFormateurId] = React.useState(0)
  const [formateurs, setFormateurs] = React.useState([])
 
  const handleClose = () => {
    
    props.value.handleCloseImg()
  }


  const handleChange = (e)=>{
    const target = e.target;
    const value = target.value;

      setFormateurId(value)
  }



  const handleSubmit = (event)=>{

    event.preventDefault()
    const id = props.value.data.id  ;
    /* une requête POST avec params , doit avoir 3 donne url,data,params(facultatif) */
     axios
       .post(
         "https://gestion-centre-formation.onrender.com/formations/add-formateur",
         null,
         {
           params: {
             formationId: id,
             formateurId: formateurId,
           },
         }
       )
       .then((res) => {
         /* recharger les données formations */
         handleSetUpdate();
       })
       .catch((error) => {
         console.log(error.message);
       });

    handleClose();
  }


    React.useEffect(() => {
    
  handleLoadData()
    
  }, [])

  const handleLoadData = ()=>{

    axios
      .get("https://gestion-centre-formation.onrender.com/persons/role", {
        params: {
          role: "ROLE_FORMATEUR",
        },
      })
      .then((res) => {
        setFormateurs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <DialogTitle>Ajouter un formateur</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez séléctionner le formateur . 
          </DialogContentText>
         
                {/* value du champ SELECT, MenuItem,setState doit être du même type ici `.id` */}
                    <FormControl sx={{ m: 1, width: '35ch' }}>
                      <InputLabel id="demo-simple-select-label">Formateurs</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        type="text"
                        name="formateur"
                        onChange={handleChange}
                        value={formateurId}
                        label="formateur"
                      >
                        {formateurs.map((item,value)=>( 
                             <MenuItem key={value} value={item.id}>{item.nom}</MenuItem>                    
                        ))}
                        
                      </Select>
                    </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

