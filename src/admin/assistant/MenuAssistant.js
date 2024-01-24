import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
import AddImage from './AddImage';


export default function MenuAssistant({data,handleSetUpdate}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const [opened, setOpenImg] = React.useState(false);

  const handleOpenImg = () => {
    setOpenImg(true)
    handleClose()
  }

   const handleCloseImg = () => {
    setOpenImg(false);
  }


  return (
    <React.Fragment>
      <AddImage value = {{handleCloseImg,opened,data}} />
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      
        <Tooltip title="Plus d'options">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
           <PlaylistAddIcon/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ModeEditIcon fontSize="small" />
          </ListItemIcon>
          <Link to={`/admin/assistants/edit/${data.id}`}> Editer<span className='ms-12 text-start text-transparent'>space</span> </Link> 
        </MenuItem>
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Formateur
        </MenuItem>
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <GroupsIcon fontSize="small" />
          </ListItemIcon>
          Entreprise
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleOpenImg}>
          <ListItemIcon>
            <AddPhotoAlternateIcon fontSize="small" />
          </ListItemIcon>
          Image
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}