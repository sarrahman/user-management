import { Grid } from "@mui/material";
import TitlePage from "../../components/atoms/titlePage";
import AppWidgetSummary from "../../components/molecules/widgetSummary";
import DashboardLayout from "../../template/admin";

export default function Dashboard() {
    return (
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage title="Dashboard" />
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

            </Grid>
        } />
    )
}