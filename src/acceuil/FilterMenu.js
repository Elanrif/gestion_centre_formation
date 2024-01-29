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
import CategoryIcon from '@mui/icons-material/Category';
import Logout from '@mui/icons-material/Logout';
import TodayIcon from '@mui/icons-material/Today';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BallotIcon from '@mui/icons-material/Ballot';
import FiltreFormation from './Filtre/FiltreFormation';
import { FilterContext } from './FilterContext';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';


export default function FilterMenu() {

  const {open,setOpen,filtre,setFiltre} = React.useContext(FilterContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenFilter = (name) => {
    setOpen(true)
    setFiltre(name)
    
    handleClose()
  };

  const handleCloseFilter = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        {/* <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}

        <Tooltip title="Filtrer">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={opened ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={opened ? 'true' : undefined}
          >
            <FilterListIcon sx={{ width: 30, height: 30 }}/>
          <span className='font-light ms-3'>Filtrer par</span>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={opened}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 45,
              height: 45,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 20,
              height: 20,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=> handleClickOpenFilter('category')} sx={{width:200}}>
        <ListItemIcon>
        <FormatListNumberedIcon fontSize="small" />
        </ListItemIcon>
           Catégorie 
        </MenuItem>
        <MenuItem onClick={()=> handleClickOpenFilter('ville')}>
        <ListItemIcon>
        <LocationCityIcon fontSize="small" />
        </ListItemIcon>
          Ville
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=> handleClickOpenFilter('date')}>
          <ListItemIcon>
            <TodayIcon fontSize="small" />
          </ListItemIcon>
          Date
        </MenuItem>

         <MenuItem onClick={()=> handleClickOpenFilter('tout')}>
          <ListItemIcon>
            <BallotIcon fontSize="small" />
          </ListItemIcon>
          Tout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
