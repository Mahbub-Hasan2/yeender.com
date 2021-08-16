import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from 'next/image';
import React from 'react';
import style from './Styles/ProjectView.module.css';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ProjectView({ data }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen} >
                <VisibilityIcon className="mr-4" />  view
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>View project</DialogTitle>
                <DialogContent>
                    {/* ---------- start main Content -------- */}
                    <Image
                        src={data.img}
                        alt={data.title}
                        className="img-fluid serviceImg p-2"
                        width={555}
                        height={346}
                        loading="eager"
                        priority
                    />
                    <h5 className={style.title}>{data.title}</h5>

                    <Typography paragraph>Description:</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.description}
                    </Typography>
                    {/* ---------- end main Content --------- */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}