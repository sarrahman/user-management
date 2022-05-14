import { Button, Tooltip } from "@mui/material";
import Iconify from "./iconify";

export default function IconButton({ icon, title, titleTooltip, onClick, ...other }) {
    return (
        <Tooltip title={titleTooltip}>
            <Button onClick={onClick} variant="contained" {...other}>
                <Iconify
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
        </Tooltip>
    );
}
