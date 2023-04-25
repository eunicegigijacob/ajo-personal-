import styles from '../../styles/Table.module.css';
import { rows } from '../../assets/Dummy data/TableData';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = () => {
  const style = {
    tableCell: {
      color: ' #6E7191',
      fontFamily: 'Poppins',
      fontSize: '12px',
    },
    Id: {
      color: ' #101828',
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    main: {
      fontFamily: 'Poppins',
      fontSize: '14px',
    },
  };

  const color = (status) => {
    if (status === 'Failed') {
      return '#e53030';
    }
    if (status === 'Pending') {
      return '#3c3a3a';
    }
    return 'rgb(10, 104, 81)';
  };
  const Background = (status) => {
    if (status === 'Failed') {
      return 'rgb(238, 47, 47, 0.1)';
    }
    if (status === 'Pending') {
      return 'rgb(60, 58, 58, 0.1)';
    }
    return 'rgb(10, 104, 81, 0.1)';
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100% ' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={style.tableCell}>Transaction ID</TableCell>
            <TableCell sx={style.tableCell}>Date</TableCell>
            <TableCell sx={style.tableCell}>Type</TableCell>
            <TableCell sx={style.tableCell}>Amount</TableCell>
            <TableCell sx={style.tableCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.TransactionID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={style.Id}>
                {row.TransactionID}
              </TableCell>
              <TableCell sx={style.main}>{row.Date}</TableCell>
              <TableCell sx={style.main}>{row.Type}</TableCell>
              <TableCell sx={style.main}>{row.Amount}</TableCell>
              <TableCell
                sx={{
                  color: color(row.Status),
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  background: Background(row.Status),
                  borderRadius: '50%',
                }}
              >
                {row.Status}
              </TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
