import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({formation}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="error" sx={{ marginTop:2}} onClick={handleClickOpen}>
       Suivre formation
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Veuillez cliqué sur un bouton ci-dessous ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Pour suivre une formation , vous devez soit créer un compte ou remplir un formulaire de la formation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={`/formation/${formation.id}/formulaire`}>
          <Button variant='contained' color="primary" onClick={handleClose}>Formulaire</Button>
          </Link>
           <Link to="/register/utilisateur">
         <Button variant='contained' color="success"  onClick={handleClose}>Créer un compte</Button>
          </Link>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
