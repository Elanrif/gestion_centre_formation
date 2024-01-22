import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { UserContext } from './UserContext';  

export default function AddImage(props) {
   
  /*si Formation.Provider value={} on ne destructure pas handleSetUpdate , sinon si Formation.Provider value={{}} on desctructure {handleSetUpdate} */
  const handleSetUpdate = React.useContext(UserContext)

 
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
    const image = formJson.image;
    const id = props.value.data.id  ;

    const formDataTo = new FormData();
    formDataTo.append('id', id);
    formDataTo.append('image', image);
    
     axios
      .post("/utilisateurs/image", formDataTo, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
          /* recharger les données formations */
          handleSetUpdate()
      })
      .catch((error) => {
        console.log(error.message);
    
      });

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
        <DialogTitle>Ajouter une image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez séléctionner une image . 
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="image"
            label="Image"
            type="file"
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
