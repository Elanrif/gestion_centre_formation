import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRule() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='text-center my-7'>
    <Stack spacing={2} sx={{textAlign: 'center', alignItems: 'center' }}>
    {/* <Typography>Page: {page}</Typography> */}
    <Pagination count={10} page={page} onChange={handleChange} color="primary"/>
    </Stack>
    </div>
  );
}
