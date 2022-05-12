import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Iconify from "./iconify";
import {useNavigate} from 'react-router-dom'

export default function ListItem({title, icon}){
    const navigate = useNavigate()
    return(
        <ListItemButton
            onClick={() => {
                navigate(`/${title}`);
            }}
        >
            <ListItemIcon>
            <Iconify width={24} height={24} icon={icon} color="secondary.main" />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}