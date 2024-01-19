import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const logins = ['admin', 'assistant','formateur','utilisateur'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open,type } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}  fullWidth maxWidth='xs'>
        <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
      <DialogTitle sx={{display:"flex"}}> <span className='font-semibold'>Qui êtes-vous ? </span></DialogTitle>
       <List sx={{ pt: 0 }}>
        {logins
        .filter((login)=>login!=props.type)
        .map((login) => (
          <ListItem disableGutters key={login}>
           <Link to = {`/login/${login}`}>
            <ListItemButton onClick={() => handleListItemClick(login)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={login} />
            </ListItemButton></Link>
          </ListItem>
        ))}
        <ListItem disableGutters>
        <Link to="/">
         <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Acceuil" />
          </ListItemButton>
        </Link>
        </ListItem>
      </List>
        </Box>
     
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function LoginAs(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(logins[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className='hover:cursor-pointer mt-3'>

      <Typography variant="text" onClick={handleClickOpen}>
      <span className='hover:text-blue-700 text-slate-500 cursor-pointer'> se connecter en tant que ?</span> 
      </Typography>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        type = {props.type}
      />
    </div>
  );
}
