import { IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UpdateIcon from '@material-ui/icons/Update';
import React, { useState } from 'react';
import yeenderServer from '../../../serverConfig';
import style from './Styles/ServiceUpdate.module.scss';

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

const ServiceUpdate = ({ data }) => {
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

    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }

    // from data collect to state 
    const [info, setInfo] = useState({});

    const fromData = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    // update to database 
    const submitData = () => {

        fetch(`${yeenderServer}/service/${data._id}`, {

            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    alert('about info updated successfully')
                }
            })

            
        // close modal 
        // handleClose()
    }

    return (
        <div>
            <div onClick={handleClickOpen} >
                <UpdateIcon className="mr-4" />  Update
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
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
                    <Button onClick={handleClose}  color="primary">
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

export default ServiceUpdate;