import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import axios from 'axios';


export default function DeleteUser({value}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const {data,handleSetUpdate,handleLoader,formation,success} = value 

  const handleDelete = ()=>{

    
    !formation  ?
    axios.delete(`/utilisateurs/${data.id}`)
    .then((res)=>{
        handleSetUpdate()
        success()
    })
    .catch((err)=>{
        console.log(err)
    })
    :
     axios.get(`/utilisateurs/unfollow`,
     {
      params :{
        utilisateurId : data.id,
        formationId : formation.id
      }
     })
    .then((res)=>{
        handleSetUpdate()
        handleLoader()
    })
    .catch((err)=>{
        console.log(err)
    })

    handleClose()
  }
  return (
    <React.Fragment>
        
        <IconButton aria-label="supprimer" onClick={handleClickOpen}>
        <DeleteIcon />
        </IconButton>

       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Êtes-vous sûr de vouloir supprimer ${formation ? "le":"cette"} participant ${formation ? "de la formation":""}? `}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La suppression  est irréversible, elle entrenera automatiquement la suppression
            {!formation ? " definitive dans la base de donnée.":" avec la formation"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="success">Annuler</Button>
          <Button onClick={handleDelete} variant="outlined" color="error" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
