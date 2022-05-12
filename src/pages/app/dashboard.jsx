import { Box, Grid, Typography } from "@mui/material";
import TitlePage from "../../components/atoms/titlePage";
import BarChartComp from "../../components/molecules/chart/barChartComp";
import AppWidgetSummary from "../../components/molecules/widgetSummary";
import DashboardLayout from "../../template/admin";

export default function Dashboard() {
    return (
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage icon="bxs:dashboard" title="Dashboard" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Rekanan" total={1352831} color="info" icon={'ic:outline-group-work'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Aduan" color="error" total={714000} icon={'carbon:report'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Pekerjaan" total={1723315} color="success" icon={'ic:outline-work-history'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Tagihan" total={234} color="warning" icon={'icon-park-outline:bill'} />
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ p: 1, pl: 0, borderRadius: 2, boxShadow: 1, m: 1, bgcolor: '#fff' }}>
                        <Typography sx={{ mb: 2, ml: 2 }} variant="h5">
                            Laporan
                        </Typography>
                        <BarChartComp data={[{}]} keyNama="tanggal" keyValue="laporan" />
                    </Box>
                </Grid>

            </Grid>
        } />
    )
}