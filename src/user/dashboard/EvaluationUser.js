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
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context'; 
import axios from 'axios';

const columns = [
  { id: 'qualitepeda', label: 'Qualité Pedagogique', minWidth: 90 ,align:'center'},
  {
    id: 'rythme',
    label: 'Rythme',
    minWidth: 70,
    align: 'center', /* left,center,right */
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'supportcourstp',
    label: 'Support cours/tp',
    minWidth: 90,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'maitrisesujet',
    label: 'Matrise du sujet',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  
  {
    id: 'remarque',
    label: 'Remarque',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toFixed(2),
  }
  ,
  {
    id: 'note',
    label: 'Note',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
   ,
  {
    id: 'utilisateur',
    label: 'Participant',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'formateur',
    label: 'Formateur',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(qualitepeda,rythme,supportcourstp,maitrisesujet,remarque,note,utilisateur,formateur) {
  //const density = population / size;
  return {qualitepeda,rythme,supportcourstp,maitrisesujet,remarque,note,utilisateur,formateur};
}


export default function EvaluationUser() {

   const {auth,setAuth} = React.useContext(AuthContext)

  const [page, setPage] = React.useState(0);
  const [evaluations, setEvaluations] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [update,setUpdate] = React.useState(false);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

     const handleSetUpdate = ()=>{
    setUpdate(!update)
    console.log(" updated !", update)
  }

  React.useEffect(() => {
    handleLoad()
  }, [update])

  const handleLoad = ()=>{

    axios.get(`/evaluations/user/${1}`)
    .then((res)=>{
       
      setEvaluations(res.data)

    })
  }
  


  const rows =
    evaluations.map((item, index) =>
      createData(
        item.qualitepeda,
        item.rythme,
        item.supportcourstp,
        item.maitrisesujet,
        <div>{item.remarque? item.remarque : <span className='text-slate-400'>aucune</span> }</div>,/* item.ville si la ville est null , retourne null. donc -- null.nom génerera une erreur -- solution ajouter item.ville?.nom */
        <span>{item.note}/10</span>,
        item.utilisateur?.username,
        item.formateur?.username
      )
    );

  
  return (
   <div >
     <Box sx={{display:'flex' ,marginLeft:5,marginTop:4,marginBottom:4}}>
      <Link  className='me-3'> <Button variant="contained" size="small">Évaluations</Button> </Link>

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
                 <span className='font-semibold'> {column.label}</span>
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