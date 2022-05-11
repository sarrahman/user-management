import { Box, Typography, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function TitlePage(props){
    return(
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: '#fff',
            p: 1,
            borderRadius: 1
        }}>
             <DashboardIcon color="primary" />
             <Divider sx={{
                 mr: 1, 
                 ml: 1
             }} orientation="vertical" flexItem />
             <Typography variant="h5">{props.title}</Typography>
        </Box>
    )
}