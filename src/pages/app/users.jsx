import { Grid, Box, Typography, Divider } from "@mui/material";
import IconButton from "../../components/atoms/iconButton";
import TitlePage from "../../components/atoms/titlePage";
import TableUser from "../../components/molecules/table/tableUser";
import DashboardLayout from "../../template/admin";

export default function Users() {
    return (
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage icon="bxs:user" title="Pengguna" />
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
                                Daftar Pengguna
                            </Typography>
                            <IconButton titleTooltip="tambah pengguna baru" icon="ant-design:user-add-outlined" title="Tambah Pengguna" size="small" />
                        </Box>
                        <Divider sx={{
                            mt: 2,
                            mb: 2
                        }} />
                        <Box>
                            <TableUser />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        } />
    )
}