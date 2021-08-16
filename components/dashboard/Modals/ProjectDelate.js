import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import React from 'react';
import yeenderServer from '../../../serverConfig';

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

const ProjectDelate = ({data}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const delateService = () => {
        fetch(`${yeenderServer}/project/${data._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.text()
            .then(data => {
                if (data) {
                    alert('project was deleted successfully!')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error')
                }
            })
    }


    return (
        <div>
            <div onClick={handleClickOpen} >
                <DeleteSweepIcon className="mr-4" />  delate
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    {/* ---------- Content --------- */}
                    <Button onClick={() => delateService(data._id)}>
                        Delete Project
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => delateService(data._id)} color="primary">
                        delate
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProjectDelate;