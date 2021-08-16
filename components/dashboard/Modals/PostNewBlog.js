import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import dynamic from "next/dynamic";
import React, { useContext, useState } from 'react';
import yeenderServer from '../../../serverConfig';
import { UserContext } from '../../Layout';
import Loading from '../../ShareComponents/Loading';
const Login = dynamic(import("../../../pages/login"),{ loading: () => <Loading /> });

const PostNewBlog = () => {
    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // UPDATE BLOGE DATA TO DATABASE 
    const [newBlog, setNewBlog] = useState({});
    const inputsBlogData = (e) => {
        const blogNewInfo = { ...newBlog };
        blogNewInfo[e.target.name] = e.target.value;
        blogNewInfo["profilePic"] = loggedInUser.img;
        blogNewInfo["name"] = loggedInUser.name;
        setNewBlog(blogNewInfo);
    }

    const submitUpdateBlog = (e) => {
        fetch(`${yeenderServer}/blog`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => {
                if (res) {
                    console.log(res)
                    alert('new service up successfully')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error!')
                }
            })

        handleClose()
        e.preventDefault()
    }

    return (
        <>
            <div>
                <div>
                    <div onClick={handleClickOpen} >
                        <Button
                            style={{
                                width: "100%",
                                background: "grey",
                                fontWeight: "900",
                                marginBottom: "20px",
                                color: "#fff"
                            }}
                        >
                            POST NEW BLOG
                        </Button>
                    </div>

                    <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                        {loggedInUser.email ?
                            <form onSubmit={submitUpdateBlog}>
                                <DialogTitle>POST YOUR BLOG</DialogTitle>
                                <DialogContent>
                                    {/* ---------- start main Content --------- */}

                                    <input onBlur={inputsBlogData} required type="text" name="title" placeholder="title" />
                                    <input onBlur={inputsBlogData} required type="text" name="img" placeholder="img link" />
                                    <textarea style={{ height: '44vh' }} onBlur={inputsBlogData} required type="text" name="description" ></textarea>


                                    {/* ---------- end main Content --------- */}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        color="primary"
                                    >
                                        submit
                                    </Button>
                                </DialogActions>
                            </form>
                            : <Login />}
                        {loggedInUser.email ? "" :
                            <Button style={{ background: "#5CA2F0", color: "#fff", fontWeight: "900" }} onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                        }
                    </Dialog>

                </div>
            </div>

        </>
    );
};

export default PostNewBlog;