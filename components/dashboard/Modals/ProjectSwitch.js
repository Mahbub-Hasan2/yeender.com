import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
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

const ProjectSwitch = ({data}) => {

    // modal
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // switch content 
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };


    const onChange = (status) => {
        // console.log(status)

        const statusDAta = { "status": status };
        fetch(`${yeenderServer}/project/status/${data._id}`, {

            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(statusDAta)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('status updated successfully!')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('not update. There was a server side error!')
                }
            })
    }


    return (
        <div>
            <div onClick={handleClickOpen} >
                <VpnKeyIcon className="mr-4" />  {data.status}
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Switch project</DialogTitle>
                <DialogContent>
                    {/* ---------- start main Content --------- */}

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {'<'}------{data.status}------{'>'}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a onClick={() => onChange('active')} className="dropdown-item" href="#">active</a>
                            <a onClick={() => onChange('inactive')} className="dropdown-item" href="#">inactive</a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />



                    {/* <FormGroup>
                        
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={toggleChecked} />}
                            label="Normal"
                        />
                        
                    </FormGroup> */}
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
};

export default ProjectSwitch;