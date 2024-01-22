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
import { EntrepriseContext } from './EntrepriseContext'; 
import MenuEntreprise from './MenuEntreprise';


const columns = [
  { id: 'image', label: 'Image', minWidth: 150 },
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 170,
    align: 'center', /* left,center,right */
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'url',
    label: 'url',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'tel',
    label: 'tel',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'address',
    label: 'address',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
   {
    id: 'options',
    label: 'Option',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(image,nom,email,url,tel,address,options) {
  //const density = population / size;
  return {image, nom,email,url,tel,address,options};
}


export default function Entreprise() {
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

    axios.get("/entreprises")
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
                 
                    <EntrepriseContext.Provider value={handleSetUpdate}>
                      <IconButton aria-label="aperçu">
                    <MenuEntreprise data={data} handleSetUpdate={handleSetUpdate}/>
                    </IconButton>
                    </EntrepriseContext.Provider>

                     <IconButton aria-label="aperçu">
                    <PageviewIcon />
                    </IconButton>

                     <IconButton aria-label="supprimer">
                    <DeleteIcon />
                    </IconButton>
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
        item.email,
        <span>{item.url?.slice(0,10)}...</span>,
        item.tel,
        <span>{item.address?.slice(0,15)}...</span>,
        btnOptions(item)
      )
    );

  
  return (
   <div >
     <Box sx={{display:'flex' ,marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link to="/admin/entreprise/add" className='me-3'> <Button variant="contained" size="small">Ajouter</Button> </Link>
     </Box>
     <div className='flex justify-center'>
        <Paper sx={{ width: '95%' }}>
      <TableContainer sx={{ maxHeight: 540 }}>
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