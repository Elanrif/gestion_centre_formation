import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MenuFormation from './MenuFormation';
import { FormationContext } from './FormationContext';
import AddCategorie from './AddCategorie';
import DeleteFormation from './DeleteFormation';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns = [
  { id: 'image', label: 'Image', minWidth: 150 },
  { id: 'cout', label: 'Coût', minWidth: 50 },
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 170,
    align: 'center', /* left,center,right */
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'programme',
    label: 'programme',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'ville',
    label: 'ville',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  
  {
    id: 'date',
    label: 'Date',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  }
  ,
  {
    id: 'formateur',
    label: 'formateur',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
   {
    id: 'options',
    label: 'Option',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(image,nom,cout,programme,ville,date,formateur,options) {
  //const density = population / size;
  return {image, nom,cout,programme,ville,date,formateur,options};
}


export default function Formation() {
  const [page, setPage] = React.useState(0);
  const [formations, setFormations] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [update,setUpdate] = React.useState(false);

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    handleLoad()
  }, [update])

  const handleLoad = ()=>{

    axios.get("/formations")
    .then((res)=>{
       
      setFormations(res.data)

    })
  }
  
   const handleSetUpdate = ()=>{
    setUpdate(!update)
    console.log(" updated !", update)
  }

 const btnOptions = (data)=> (
    <div className='flex justify-center items-center space-x-[-5px]'>
                 
                    <FormationContext.Provider value={handleSetUpdate}>
                      <IconButton aria-label="aperçu">
                    <MenuFormation data={data} handleSetUpdate={handleSetUpdate}/>
                    </IconButton>
                    </FormationContext.Provider>

                     <Link to={`/admin/formations/show/${data.id}`}>
                     <IconButton aria-label="aperçu">
                    <VisibilityIcon />
                    </IconButton>
                    </Link>

                     <DeleteFormation value ={{data,handleSetUpdate}}/>
                  </div>
) 

  const rows =
    formations.map((item, index) =>
      createData(
        <img
          src={item.image}
          alt="Image"
          className="w-20  h-16"
        />,
        item.nom,
        <div className='flex items-center space-x-2'> <span>{item.cout}</span> <span>DHS</span> </div>,
        <span>{item.programme?.slice(0,15)}...</span>,
        item.ville?.nom,/* item.ville si la ville est null , retourne null. donc -- null.nom génerera une erreur -- solution ajouter item.ville?.nom */
        item.date,
        <div className='text-slate-400'>{item.formateur?.nom ? (<span className='text-blue-400'>{item.formateur?.nom} {item.formateur?.prenom}</span>) : "Pas de formateur"}</div>,
        btnOptions(item)
      )
    );

  
  return (
   <div >
     <Box sx={{display:'flex' ,marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link to="/admin/formations/add" className='me-3'> <Button variant="contained" size="small">Planifier une formation</Button> </Link>
      <AddCategorie/>
     </Box>
     <div className='flex justify-center'>
        <Paper sx={{ width: '95%' }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                details
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
               <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                 <span className='font-black'> {column.label}</span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                       
                         { column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
     </div>
   </div>
  );
}