import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import yeenderServer from '../../serverConfig';
import style from './styles/BlogDashboardCards.module.css';

const BlogDashboardCards = ({ data }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [expandedInput, setExpandedInput] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // status setup 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // UPDATE BLOGE DATA TO DATABASE 
    const [updateBlog, setUpdateBlog] = React.useState({});

    const updateBlogData = (e) => {
        const blogUpdateInfo = { ...updateBlog };
        blogUpdateInfo[e.target.name] = e.target.value;
        setUpdateBlog(blogUpdateInfo);
    }

    const submitUpdateBlog = () => {
        fetch(`${yeenderServer}/blog/${data._id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('blog info updated successfully')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('not update. There was a server side error!')
                }
            })
    }


    // DELETE blog DATA 
    const delateBlog = () => {
        fetch(`${yeenderServer}/blog/${data._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.text()
            .then(data => {
                if (data) {
                    alert('Service was deleted successfully!')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error')
                }
            })
    }

    const statusChange = (status, id) => {
        // console.log(status, id)
        const statusDAta = { "status": status };
        fetch(`${yeenderServer}/blog/status/${id}`, {

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
        <div className={style.BlogDashboardCards}>

            {
                expandedInput ?
                    <div>
                        <Card className="mb-3">
                            <CardHeader
                                className="pb-1"
                                avatar={
                                    <Avatar aria-label="recipe">
                                        {data ? data.name : "Y"}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">

                                        <div>
                                            <MoreVertIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={() => { statusChange('active', data._id); handleClose(); }}>active</MenuItem>
                                                <MenuItem onClick={() => { statusChange('inactive', data._id); handleClose(); }}>inactive</MenuItem>
                                                <MenuItem onClick={() => { delateBlog(); handleClose(); }}>Delate</MenuItem>
                                                <MenuItem onClick={handleClose}>Update</MenuItem>
                                            </Menu>
                                        </div>
                                    </IconButton>
                                }

                                title={`${data ? data.name : "Yender.com"} -------->  ${data ? data.status : ""}`}
                                subheader={data ? data.date : "******"}
                            />

                            <CardContent className="pb-0 pt-0"
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <h3 className={style.blogTitle}>
                                    <input type="text" onBlur={updateBlogData} name="title" placeholder="title" className={style.upTitle} />
                                </h3>
                            </CardContent>

                            <div>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent className={style.blogDetails}>
                                        <input type="text" onBlur={updateBlogData} name="img" placeholder="img Link" />

                                        <textarea onBlur={updateBlogData} name="description" placeholder="description blog details"></textarea>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={submitUpdateBlog}
                                            className={style.submitUpdate}
                                        >
                                            Submit
                                        </Button>
                                    </CardContent>
                                </Collapse>
                            </div>

                            {/* CARD BUTTONS BOTTOM  */}
                            <CardActions disableSpacing className="d-flex justify-content-between">
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => setExpandedInput(!expandedInput)}
                                >
                                    <FavoriteIcon style={{ color: expandedInput ? "red" : "" }} />
                                </IconButton>
                                <IconButton
                                    aria-label="share"
                                    onClick={delateBlog}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                                <IconButton
                                    className={expanded ? style.expandOpen : style.expand}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"

                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                        </Card>
                    </div>

                    :

                    // UPDATE BLOG 
                    <div>
                        <Card className="mb-3">
                            <CardHeader
                                className="pb-1"

                                action={
                                    <IconButton aria-label="settings">

                                        <div>
                                            <MoreVertIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem onClick={() => { statusChange('active', data._id); handleClose(); }}>active</MenuItem>
                                                <MenuItem onClick={() => { statusChange('inactive', data._id); handleClose(); }}>inactive</MenuItem>
                                                <MenuItem onClick={() => { delateBlog(); handleClose(); }}>Delate</MenuItem>
                                                <MenuItem onClick={handleClose}>Update</MenuItem>
                                            </Menu>
                                        </div>
                                    </IconButton>
                                }

                                title={`${data ? data.name : "Yender.com"} --------> ${data ? data.status : ""}`}
                                subheader={data ? data.date : "*******"}
                            />
                            {/* <img className="img-fluid" src="https://i.imgur.com/NAZi7wR.jpg" alt=""/> */}
                            <CardContent className="pb-0 pt-0"
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <h3 className={style.blogTitle}>
                                    {data ? data.title : "***********"}
                                </h3>
                            </CardContent>

                            <div>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent className={style.blogDetails}>
                                        <div className="text-center">
                                            <img src={data ? data.img : ""} alt={data ? data.title : "Yeender"} className="img-fluid" />
                                        </div>
                                        <Typography paragraph>
                                            {data ? data.description : "***description***"}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </div>

                            {/* CARD BUTTONS BOTTOM  */}
                            <CardActions disableSpacing className="d-flex justify-content-between">
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => setExpandedInput(!expandedInput)}
                                >
                                    <FavoriteIcon style={{ color: expandedInput ? "red" : "" }} />
                                </IconButton>
                                <IconButton
                                    aria-label="share"
                                    onClick={delateBlog}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                                <IconButton
                                    className={expanded ? style.expandOpen : style.expand}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"

                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                        </Card>
                    </div>
            }
        </div>
    );
};

export default BlogDashboardCards;