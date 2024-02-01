import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
        <button
             onClick={handleClickOpen}
            className='hover:bg-red-700  text-white duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full bg-red-600'>
           <PlayArrowIcon
           sx={{fontSize:30}} 
           className='border-r-2 border-slate-300 pr-2'
           />
            <p>Suivre</p>
          </button>
    
      <Dialog
        open={open}
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
