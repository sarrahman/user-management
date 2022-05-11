import { Button } from "@mui/material";
import Iconify from "./iconify";

export default function IconButton({ icon, title, onClick, ...other }) {
    return (
        <Button variant="contained" {...other}>
            <Iconify
                onClick={onClick}
                icon={icon}
                width={24}
                height={24}
                color="third.main"
                sx={{
                    mr: 1
                }}
            />
            {title}
        </Button>
    );
}
