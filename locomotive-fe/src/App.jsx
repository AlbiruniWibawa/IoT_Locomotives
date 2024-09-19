import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import ChartBar from './components/ChartBar';
import ChartPie from './components/ChartPie';
import TableData from './components/TableData';

const App = () => {
  return (
    <>
      <Grid2 container direction={'row'}>
        <ChartBar />
        <ChartPie />
      </Grid2>
      <TableData />
    </>
  );
};

export default App;
