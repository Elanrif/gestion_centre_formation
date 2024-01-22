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


const columns = [
  { id: 'image', label: 'Image', minWidth: 170 },
  { id: 'cout', label: 'Coût', minWidth: 10 },
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'objectif',
    label: 'objectif',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'programme',
    label: 'programme',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'ville',
    label: 'ville',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'createdAt',
    label: 'createdAt',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
   {
    id: 'options',
    label: 'Option',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(image,nom,objectif,cout,programme,ville,createdAt,options) {
  //const density = population / size;
  return {image, nom,objectif,cout,programme,ville,createdAt,options};
}

const btnOptions = ()=> (
    <div className='flex justify-center items-center space-x-[-5px]'>
                    <IconButton aria-label="éditer">
                    <ModeEditIcon />
                    </IconButton>

                     <IconButton aria-label="aperçu">
                    <PageviewIcon />
                    </IconButton>

                     <IconButton aria-label="supprimer">
                    <DeleteIcon />
                    </IconButton>
                  </div>
) 

const rows = [
  createData('image1.jpg', 'Country1', 1000000, 50000, 'Programme A', 'CityA', '2024-01-21',btnOptions()),
  createData('image2.jpg', 'Country2', 2000000, 75000, 'Programme ', 'CityB', '2024-01-22',btnOptions()),
  createData('image3.jpg', 'Country3', 500000, 25000, 'Programme C', 'CityC', '2024-01-23',btnOptions()),
];


export default function Formater() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
   <div >
     <Box sx={{marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link to="/admin/formateur/add"> <Button variant="contained" size="small">Ajouter</Button> </Link>
     </Box>
     <div className='flex justify-center'>
        <Paper sx={{ width: '95%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
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
                  {column.label}
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
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[10, 25, 100]}
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