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

export default function AddFormCategorie(props) {
   
  /*si Formation.Provider value={} on ne destructure pas handleSetUpdate , sinon si Formation.Provider value={{}} on desctructure {handleSetUpdate} */
  const handleSetUpdate = React.useContext(FormationContext)

 
  const handleClose = () => {
    
    props.value.handleCloseImg()
  }

  /* pas besoin de ça ,formData, formJson fais la même chose */
/*   const handleChange = (e)=>{
    const target = e.target;
    const value = target.files[0];
    const name = target.name ;
      setImage((prev) =>( 
         {
        ...prev,
        [name]: value
       }
     ))

    console.log(image);
    handleClose();
  }
 */


  const handleSubmit = (event)=>{

    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const nom = formJson.nom;
    //const id = props.value.data.id  ;

    const formDataTo = new FormData();
   // formDataTo.append('id', id);
    formDataTo.append('nom', nom);
    
    console.log( "nom" , nom)
     /* axios
      .post("/formations/image", formDataTo, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
         
          handleSetUpdate()
      })
      .catch((error) => {
        console.log(error.message);
    
      }); */

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
        <DialogTitle>Ajouter une catégorie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir une catégorie de formation . 
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="nom"
            label="Nom"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
