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
import { ToastContainer, toast } from 'react-toastify';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteCategorie from './DeleteCategorie';
// image,nom,prenom,username,ville,tel,competence,formateurExterne
const columns = [
 
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 70,
    align: 'center', /* left,center,right */
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


function createData(nom,options) {
  //const density = population / size;
  return {nom,options};
}


export default function Categorie() {
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

        axios.get("/categories")
        .then((res)=>{
          
          setFormations(res.data)

        })
  }
  
   const success = ()=> toast.success('succès !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

   const handleSetUpdate = ()=>{
    setUpdate(!update)
  }

 const btnOptions = (data)=> (
    <div className='flex justify-center items-center space-x-[-5px]'>
                 
                    <React.Fragment>
                      <IconButton aria-label="editer">
                     <Link to={`/admin/categories/edit/${data.id}`}><ModeIcon /></Link>
                    </IconButton>
                    </React.Fragment>

                     <IconButton aria-label="aperçu">
                    <PageviewIcon />
                    </IconButton>
                     <DeleteCategorie value ={{data,handleSetUpdate,success}}/>
                  </div>
) 

// image,nom,prenom,username,ville,tel,competence,formateurExterne
  const rows =
   formations?.sort((a, b) => b.id - a.id).map((item, index) =>
      createData(
        item.nom,
        btnOptions(item)
      )
    );

  
  return (
   <div >
     <Box sx={{display:'flex' ,marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link to="/admin/categories/add" className='me-3'> <Button variant="contained" size="small">Ajouter</Button> </Link>
     </Box>
     <div className='flex justify-center'>
        <Paper sx={{ width: '95%' }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
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
            {rows&& rows
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
         <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
   </div>
  );
}