import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(props.open);
    }, [props]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.message}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Tidak</Button>
                    <Button onClick={() => {
                        props.action(true)
                        handleClose()
                    }} autoFocus>
                        Ya
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
