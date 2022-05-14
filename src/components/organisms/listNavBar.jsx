import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import SummarizeIcon from '@mui/icons-material/Summarize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ListItem from "../atoms/listItem";
import ExpandLess from '@mui/icons-material/ExpandLess';
import TaskIcon from '@mui/icons-material/Task';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from 'react-router-dom';
import { Collapse, List } from "@mui/material";

export const mainListItems = (
    <React.Fragment>
        <ListItem title="dashboard" icon="bxs:dashboard" />
    </React.Fragment>
);

export const masterDataListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            MASTER DATA
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <CategoryIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Item" />
        </ListItemButton>
    </React.Fragment>
);

export const pengaduanListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            PENGADUAN
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <SummarizeIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Aduan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <WorkHistoryIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Pekerjaan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DescriptionIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Tagihan" />
        </ListItemButton>
    </React.Fragment>
);

export const karyawanListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            KARYAWAN
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <PeopleAltIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Karyawan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <GroupWorkIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Rekanan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Setting" />
        </ListItemButton>
    </React.Fragment>
);

export function UserListItems() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <React.Fragment>
            <ListSubheader component="div" inset>
                PENGGUNA
            </ListSubheader>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <PersonIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Pengguna" />
                {open ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton onClick={() => navigate('/pengguna')} sx={{ pl: 3 }}>
                        <ListItemIcon>
                            <PersonIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Pengguna" />
                    </ListItemButton>
                    <ListItemButton onClick={() => navigate('/pengguna/akses')} sx={{ pl: 3 }}>
                        <ListItemIcon>
                            <RuleFolderIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Hak Akses" />
                    </ListItemButton>
                    <ListItemButton onClick={() => navigate('/pengguna/tugas')} sx={{ pl: 3 }}>
                        <ListItemIcon>
                            <TaskIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Task" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    )
} 