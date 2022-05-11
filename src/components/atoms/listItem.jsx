import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Iconify from "./iconify";

export default function ListItem({title, icon, sx, ...other}){
    return(
        <ListItemButton
            onClick={() => {
                window.location.href = `/${title}`;
            }}
        >
            <ListItemIcon>
            <Iconify width={24} height={24} icon={icon} sx={{ ...sx }} {...other} />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}