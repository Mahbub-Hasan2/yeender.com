import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UpdateIcon from '@material-ui/icons/Update';
import React, { useState } from 'react';
import yeenderServer from '../../../serverConfig';
import style from '../Modals/Styles/ProjectUpdate.module.scss';

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

const ProjectUpdate = ({data}) => {
    const classes = useStyles();

    // modal 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Preview and upload img 
    const [{ alt, src }, setImg] = useState({
        src: 'https://i.imgur.com/Y7ADeAi.jpg',
        alt: 'Upload an Image'
    });

    // from data collect to state 
    const [info, setInfo] = useState({});

    const fromData = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    // update to database 
    const submitData = () => {

        fetch(`${yeenderServer}/project/${data._id}`, {

            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('about info updated successfully')
                }
            })

            
        // close modal 
        // handleClose()
    }


    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }

    return (
        <div>
            <div onClick={handleClickOpen} >
                <UpdateIcon className="mr-4" />  Update
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Update your project </DialogTitle>
                <DialogContent>
                    {/* ---------- ‍start main Content --------- */}
                    {/* ------- file upload btn start -------- */}
                    <div>
                        <img src={src} alt={alt} className="img-fluid" />
                        <Typography paragraph className="text-truncate">................................................................................................................................................</Typography>
                        <form>
                            <input
                                style={{ display: 'none' }}
                                onChange={handleImg} accept=".png, .jpg, .jpeg"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>

                            <input style={{ display: 'none' }} onChange={handleImg} accept=".png, .jpg, .jpeg" id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>

                            {/* ----file upload btn end ---- */}
                            <input onBlur={fromData} name="img" className={style.input} placeholder="your project img" type="text" />
                            <input onBlur={fromData} name="title" className={style.input} placeholder="your project title" type="text" />
                            <textarea onBlur={fromData} name="description" className={style.textarea}></textarea>
                        </form>
                    </div>
                    {/* ---------- end main Content --------- */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button  onClick={submitData} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProjectUpdate;