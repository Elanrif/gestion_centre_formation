import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LockIcon from '@mui/icons-material/Lock';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function AlertEntreprise({formation}) {
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
            className='hover:bg-black  text-white duration-300 ease-in-out px-3 py-1 flex items-center space-x-2 rounded-full bg-slate-900'>
           <LockIcon
           sx={{fontSize:30}} 
           className='border-r-2 border-slate-300 pr-2'
           />
            <p>Réservé</p>
          </button>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"La formation est réservé aux entreprises !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Vous ne pouvez pas vous s'inscrire a cette formation, il est reservé aux entreprises.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Button variant='contained' sx={{marginBottom:2}} color="error" onClick={handleClose}>Fermer</Button>
       
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
