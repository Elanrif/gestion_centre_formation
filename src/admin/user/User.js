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
import MenuUser from './MenuUser';
import { UserContext } from './UserContext'; 
import DeleteUser from './DeleteUser';

// image,nom,prenom,username,ville,tel,competence,formateurExterne
const columns = [
  { id: 'image', label: 'Image', minWidth: 150 },
  {
    id: 'nom',
    label: 'Nom',
    minWidth: 70,
    align: 'center', /* left,center,right */
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'prenom',
    label: 'prenom',
    minWidth: 70,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'username',
    label: 'email',
    minWidth: 120,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'ville',
    label: 'ville',
    minWidth: 120,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'tel',
    label: 'tel',
    minWidth: 120,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'naissance',
    label: 'D.naissance',
    minWidth: 130,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'individu',
    label: 'individu',
    minWidth: 20,
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


function createData(image,nom,prenom,username,ville,tel,naissance,individu,options) {
  //const density = population / size;
  return {image,nom,prenom,username,ville,tel,naissance,individu,options};
}


export default function User({value}) {
  const [page, setPage] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [update,setUpdate] = React.useState(false);

   /* cas ou on appelle le composant User et qu'on a pas de pros value, ça va générer 
   * une erreur, donc on gère ce cas
   */
  const {formation,handleSetload} = typeof value !== 'undefined' && value  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    React.useEffect(() => {
   (typeof value === 'undefined' ) ? handleLoad() : setUsers(formation?.utilisateurs)
  }, [update])


  const handleLoad = ()=>{

        axios
          .get("https://gestion-centre-formation.onrender.com/utilisateurs")
          .then((res) => {
            setUsers(res.data);
          });
  }
  
   /* on ne peux pas passer directement la fonction handleSetload reçu en props, il ne sera pris comme une 
  fonction. erreur a éviter */
  const handleLoader = ()=>{
     handleSetload()
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
    console.log(" updated !", update)
  }

 const btnOptions = (data)=> (
    <div className='flex justify-center items-center space-x-[-5px]'>
                 
                    <UserContext.Provider value={handleSetUpdate}>
                      <IconButton aria-label="aperçu">
                    <MenuUser data={data} handleSetUpdate={handleSetUpdate}/>
                    </IconButton>
                    </UserContext.Provider>

                     <IconButton aria-label="aperçu">
                    <PageviewIcon />
                    </IconButton>

                    <DeleteUser value ={{data,handleSetUpdate,formation,handleLoader,success}}/>
                  </div>
) 


  const rows =
    users.sort((a, b) => b.id - a.id).map((item, index) =>
      createData(
        <img
          src={item.image}
          alt="Image"
          className="w-20  h-16"
        />,
        item.nom,
        item.prenom,
        item.username,
        item.ville?.nom,
        item.tel,
        item.naissance,
        item.individu,
        btnOptions(item)
      )
    );

  
  return (
   <div >
     <Box sx={{display:'flex' ,marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link to="/admin/users/add" className='me-3'> <Button variant="contained" size="small">Ajouter</Button> </Link>
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