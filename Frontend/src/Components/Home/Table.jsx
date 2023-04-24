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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100% ' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.TransactionID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.TransactionID}
              </TableCell>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Type}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell>{row.Status}</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
