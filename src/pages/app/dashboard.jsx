import { Box, Grid, Typography } from "@mui/material";
import TitlePage from "../../components/atoms/titlePage";
import BarChartComp from "../../components/molecules/chart/barChartComp";
import AppWidgetSummary from "../../components/molecules/widgetSummary";
import DashboardLayout from "../../template/admin";

const data = [
    {
        "name": "Januari",
        "pengaduan": 98,
        "pekerjaan": 260,
        "tagihan": 8200000,
        "rekanan": 5,
    },
    {
        "name": "Februari",
        "pengaduan": 108,
        "pekerjaan": 290,
        "tagihan": 1400000,
        "rekanan": 7,
    },
    {
        "name": "Maret",
        "pengaduan": 118,
        "pekerjaan": 302,
        "tagihan": 1420000,
        "rekanan": 10,
    },
    {
        "name": "April",
        "pengaduan": 124,
        "pekerjaan": 319,
        "tagihan": 1500000,
        "rekanan": 16,
    },
    {
        "name": "Mei",
        "pengaduan": 118,
        "pekerjaan": 302,
        "tagihan": 1420000,
        "rekanan": 10,
    },
    {
        "name": "Juni",
        "pengaduan": 98,
        "pekerjaan": 260,
        "tagihan": 8200000,
        "rekanan": 5,
    },
    {
        "name": "Juli",
        "pengaduan": 203,
        "pekerjaan": 403,
        "tagihan": 26500000,
        "rekanan": 30,
    },
]

export default function Dashboard() {
    return (
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage icon="bxs:dashboard" title="Dashboard" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Rekanan" total={
                        data.reduce((acc, curr) => acc + curr.rekanan, 0)
                    } color="info" icon={'ic:outline-group-work'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Aduan" color="error" total={
                        data.reduce((acc, curr) => acc + curr.pengaduan, 0)
                    } icon={'carbon:report'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Pekerjaan" total={
                        data.reduce((acc, curr) => acc + curr.pekerjaan, 0)
                    } color="success" icon={'ic:outline-work-history'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Tagihan" total={
                        data.reduce((acc, curr) => acc + curr.tagihan, 0)
                    } color="warning" icon={'icon-park-outline:bill'} />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ p: 1, borderRadius: 2, boxShadow: 1, m: 1, bgcolor: '#fff' }}>
                        <Typography sx={{ mb: 2, ml: 2 }} variant="h5">
                            Laporan
                        </Typography>
                        {
                            window.innerWidth > 600 ?
                            (<BarChartComp data={data} keyNama="bulan" /> ):
                            (<Typography sx={{ mb: 2}} variant="subtitle1">
                                Silahkan Pilih Layar Lebih Besar
                            </Typography>)
                        }
                    </Box>
                </Grid>

            </Grid>
        } />
    )
}