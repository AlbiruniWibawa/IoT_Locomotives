import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

const LocomotiveTable = () => {
  const [tableData, setTableData] = useState([]);
  const [isDataEmpty, setIsDataEmpty] = useState(true);

  // Fetch data from the API
  async function getTableData() {
    try {
        fetch('http://localhost:8081/locomotives/all')
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data: ', data);
          setTableData(data);

          if (data.length > 0) {
            setIsDataEmpty(false);
          } else {
            setIsDataEmpty(true);
          }
        });

    } catch (error) {
      console.error('Failed to fetch table data: ', error);
    }
  }

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', my: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Locomotive Data Table
      </Typography>

      {/* Conditionally render the table or a 'No Data' message */}
      {isDataEmpty ? (
        <Typography variant="h6" align="center" gutterBottom>
          No Data Available
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left"><strong>Nama Loco</strong></TableCell>
                <TableCell align="center"><strong>Dimensi Loco</strong></TableCell>
                <TableCell align="center"><strong>Status</strong></TableCell>
                <TableCell align="center"><strong>Tanggal</strong></TableCell>
                <TableCell align="center"><strong>Jam</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.kodeLoco}>
                  <TableCell align="left">{row.namaLoco}</TableCell>
                  <TableCell align="center">{row.dimensiLoco}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.tanggal}</TableCell>
                  <TableCell align="center">{row.jam}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default LocomotiveTable;
