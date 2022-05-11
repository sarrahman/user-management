import { Grid } from "@mui/material";
import TitlePage from "../../components/atoms/titlePage";
import DashboardLayout from "../../template/admin";

export default function Users() {
    return(
        <DashboardLayout main={
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TitlePage icon="bxs:user" title="Users" />
                </Grid>
            </Grid>
        } />
    )
}