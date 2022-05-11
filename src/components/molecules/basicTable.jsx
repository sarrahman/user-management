import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '../atoms/iconButton';

const data = [
  {
    nama: 'John Doe',
    email: "jhondoe@gmail.com",
    rules: 'Admin',
  },
  {
    nama: 'John Doe',
    email: "jhondoe@gmail.com",
    rules: 'Admin',
  },
  {
    nama: 'John Doe',
    email: "jhondoe@gmail.com",
    rules: 'Admin',
  },
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rule</TableCell>
            <TableCell align="right">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell>{row.nama}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.rules}</TableCell>
              <TableCell align="right">
                <IconButton sx={{
                  mr: 1
                }} icon="bx:edit" size="small" />
                <IconButton icon="bi:trash" color="error" size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
