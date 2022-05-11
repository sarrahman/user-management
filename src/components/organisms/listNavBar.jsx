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

export const userListItems = (
    <React.Fragment>
         <ListItem title="pengguna" icon="bxs:user" />
    </React.Fragment>
);