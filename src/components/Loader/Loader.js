import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

 const Loader = () => {
  return (
    <Stack sx={{ color: 'white'}}>
      <CircularProgress color="inherit" />
    </Stack>
  );
}

export default Loader
