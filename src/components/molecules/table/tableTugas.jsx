import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'

export default function TableTugas() {
    const [valueChecked, setValueChecked] = useState({
        semua: false,
        data: false,
        karyawan: false,
        pengaduan: false,
        pengguna: false,
    })

    useEffect(() => {
        console.log(valueChecked)
    }, [valueChecked])

    const handleChange = (event) => {
        if (event.target.name === 'semua') {
            setValueChecked({
                semua: event.target.checked,
                data: event.target.checked,
                karyawan: event.target.checked,
                pengaduan: event.target.checked,
                pengguna: event.target.checked,
            })
        } else {
            setValueChecked({
                ...valueChecked,
                [event.target.name]: event.target.checked,
            })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: 'background.main' }}>
                    <TableRow>
                        <TableCell>Tugas</TableCell>
                        <TableCell align='right'>Pilih Semua</TableCell>
                        <TableCell align='right'>Data</TableCell>
                        <TableCell align='right'>Karyawan</TableCell>
                        <TableCell align='right'>Pengaduan</TableCell>
                        <TableCell align='right'>Pengguna</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Tugas 1</TableCell>
                        <TableCell align='right'>
                            <Checkbox onChange={handleChange} name="semua" sx={{
                                color: 'secondary.main', '&.Mui-checked': {
                                    color: "primary.main",
                                },
                            }} />
                        </TableCell>
                        <TableCell align='right'>
                            <Checkbox onChange={handleChange} checked={valueChecked.data} name="data" sx={{
                                color: 'secondary.main', '&.Mui-checked': {
                                    color: "primary.main",
                                },
                            }} />
                        </TableCell>
                        <TableCell align='right'>
                            <Checkbox onChange={handleChange} checked={valueChecked.karyawan} name="karyawan" sx={{
                                color: 'secondary.main', '&.Mui-checked': {
                                    color: "primary.main",
                                },
                            }} />
                        </TableCell>
                        <TableCell align='right'>
                            <Checkbox onChange={handleChange} checked={valueChecked.pengaduan} name="pengaduan" sx={{
                                color: 'secondary.main', '&.Mui-checked': {
                                    color: "primary.main",
                                },
                            }} />
                        </TableCell>
                        <TableCell align='right'>
                            <Checkbox onChange={handleChange} checked={valueChecked.pengguna} name="pengguna" sx={{
                                color: 'secondary.main', '&.Mui-checked': {
                                    color: "primary.main",
                                },
                            }} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}