import { Grid, Box, Typography, Divider } from "@mui/material";
import IconButton from "../../../components/atoms/iconButton";
import TitlePage from "../../../components/atoms/titlePage";
import TableAkses from "../../../components/molecules/table/tableAkses";
import DashboardLayout from "../../../template/admin";

export default function HakAkses() {
    return (
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage icon="ic:baseline-rule-folder" title="Hak Akses" />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        bgcolor: "background.paper",
                        p: { xs: 1, md: 3 },
                        borderRadius: 2,
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Typography variant="h6">
                                Hak Akses
                            </Typography>
                            <IconButton titleTooltip="tambah tugas baru" icon="ant-design:user-add-outlined" title="Tambah Tugas" size="small" />
                        </Box>
                        <Divider sx={{
                            mt: 2,
                            mb: 2
                        }} />
                        <Box>
                            <TableAkses />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        } />
    )
}