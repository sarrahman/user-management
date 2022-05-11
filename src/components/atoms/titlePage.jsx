import { Box, Typography, Divider } from "@mui/material";
import Iconify from "./iconify";

export default function TitlePage(props){
    return(
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: '#fff',
            p: 1,
            borderRadius: 1
        }}>
             <Iconify width={24} height={24} icon={props.icon} color="secondary.main" />
             <Divider sx={{
                 mr: 1, 
                 ml: 1
             }} orientation="vertical" flexItem />
             <Typography variant="h5">{props.title}</Typography>
        </Box>
    )
}