import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function SimpleBackdrop() {

  const navigate = useNavigate()

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(()=>{
    setTimeout(() => {
        navigate("/")
    }, 3000);
  },[])

  return (
    <div>
      <div onClick={handleOpen} className='h-[100vh] flex items-center justify-center'>
        <div className='text-center text-slate-500 text-3xl font-black'>
          <SentimentVeryDissatisfiedIcon sx={{fontSize:50}}/>
         <p>Aucun lien n'a été trouvé </p>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
