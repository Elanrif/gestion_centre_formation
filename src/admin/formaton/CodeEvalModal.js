import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function CodeEvalMoal({data}) {
  const [open, setOpen] = React.useState(false);

  const {formation,succes} = data

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event)=>{

    event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const code = formJson.code;
            console.log(code);

        axios.put("/formations/generate-code",null,{
            params:{
                id: formation.id,
                code: code
            }
        })
        .then((res)=>{
            succes()
            console.log("res.data")
        })
        .catch((err)=>{
            console.error(err)
        })

        
            handleClose();
  }


  return (
    <React.Fragment>
         <div onClick={handleClickOpen} className='hover:cursor-pointer duration-300 px-4 text-white py-1 flex items-center space-x-2 rounded-full bg-red-600'>
            <MarkEmailUnreadIcon sx={{fontSize:30}} className='border-r-2 border-slate-300  pr-2'/>
            <p>email</p>
        </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit
        }}
      >
        <DialogTitle>Envoie d'email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Un email sera envoyé à tous les participants de cette formation.
            <br/>
            Veuillez mettre à jour le code d'évaluation.

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="code"
            label="Code évaluation"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button variant="contained" color="success" type="submit">Envoyer</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
