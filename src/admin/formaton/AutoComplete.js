import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AutoComplete() {
  const [age, setAge] = React.useState(
    {
       ville : {
         id : 0,
        nom : ""
       }
    }
  );

  
  const handleChange = (e) => {

     const target = e.target;
    const value = target.value;
    const name = target.name ;

      setAge((prev) => {
        if (name === "ville") {
      
          return {
            ...prev,
            [name]: { id: value }
          };
        } else {
          // Sinon, metre à jour normalement
          return {
            ...prev,
            [name]: value
          }
        }
     })
    console.log(age)
  };

  return (
    <Box sx={{ minWidth: 320 }}>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel id="demo-simple-select-label">Ville</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="ville"
          value={age.ville}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={20}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
