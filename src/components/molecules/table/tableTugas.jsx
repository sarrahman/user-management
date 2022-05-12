import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

export default function TableTugas(){
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{backgroundColor: 'background.main'}}>
                    <TableRow>
                        <TableCell rowSpan={1} colSpan={2}>Tugas</TableCell>
                        <TableCell colSpan={4}>Deskripsi</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">Master Data</TableCell>
                        <TableCell align="right">Karyawan</TableCell>
                        <TableCell align="right">Pengaduan</TableCell>
                        <TableCell align="right">Pengguna</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Tugas 1</TableCell>
                        <TableCell>Deskripsi 1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}