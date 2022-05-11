import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Iconify from "./iconify";

export default function ListItem({title, icon, sx, ...other}){
    return(
        <ListItemButton
            onClick={() => {
                window.location.href = `/app/${title}`;
            }}
        >
            <ListItemIcon>
            <Iconify width={24} height={24} icon={icon} color="secondary.main" />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}