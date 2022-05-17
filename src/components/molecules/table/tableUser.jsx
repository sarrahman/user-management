import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '../../atoms/iconButton';

const tableHead = ["Nama", "Email"];

export default function TableUser(props) {
  const data = props.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: 'secondary.main' }}>
          <TableRow>
            <TableCell>No</TableCell>
            {
              tableHead.map((head, index) => {
                return (
                  <TableCell key={index}>{head}</TableCell>
                )
              })
            }
            <TableCell align="right">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              {/* <TableCell>{row.role[0]}</TableCell> */}
              <TableCell align="right">
                <IconButton sx={{
                  mr: 1
                }} icon="bx:edit" size="small" titleTooltip="edit data" />
                <IconButton onClick={() => props.onRemove(row.id)} icon="bi:trash" color="error" size="small" titleTooltip="hapus data" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
