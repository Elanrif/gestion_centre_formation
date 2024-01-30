import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AuthContext } from '../../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function CodeEvaluation({data}) {

  const {auth} = React.useContext(AuthContext)
  const {open,utilisateur,clickOpen,clicClose,formation} = data

  const navigate = useNavigate()


  const handleClickOpen = () => {
    clickOpen()
  };

  const handleClose = () => {
    clicClose()
  };

  React.useEffect(()=>{
  },[])



  const handleSubmit = (event)=>{
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const code = formJson.code;
            console.log("code " , code);

            if(code == formation.code){
                    navigate(`/evaluation/formateur/${formation.formateur?.id}/utilisateur/${utilisateur.id}/formation/${formation.id}`)
            }else{
                alert( "le code n'est pas valide ")
            }
            handleClose();
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Formulaire d'évaluation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous avez reçu un email, veuillez valider le code envoyé a votre email ci-dessous.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="code"
            label="Code de validation"
            type="number"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color='error'>Annuler</Button>
          <Button type="submit" variant="outlined" color='success'>Valider</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
