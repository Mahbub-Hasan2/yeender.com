import { Avatar, Card, CardHeader, Container, IconButton } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import dynamic from "next/dynamic";
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../components/Layout';
import Loading from '../../components/ShareComponents/Loading';
import yeenderServer from '../../serverConfig';
import style from './styles/review.module.css';

const Sidebar = dynamic(import("../../components/dashboard/Sidebar"),{ loading: () => <Loading /> });
const Login = dynamic(import("../login"),{ loading: () => <Loading /> });

const review = ({ data }) => {
    const review = data.result;

    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    // const [review, setReview] = useState(reviewData)

    // status setup 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // hide card value
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // DELETE REVIEW DATA 
    const delateReview = (id) => {
        fetch(`${yeenderServer}/review/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.text()
            .then(data => {
                if (data) {
                    alert('review was deleted successfully!')
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                    alert('There was a server side error')
                }
            })
    }

    // UPDATE REVIEW DATA 
    // ----------------------

    // STATUS UPDATE DATA 
    const statusChange = (status, id) => {
        // console.log(status, id)
        const statusDAta = { "status": status };
        fetch(`${yeenderServer}/review/status/${id}`, {

            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(statusDAta)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
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

    const reviewCards = review.map((data, index) => {
        return (

            <Col key={index} md={4}>
                <Card className="mb-3">
                    <CardHeader
                        avatar={
                            <Avatar alt="Remy Sharp" src={data.img} />
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
                                        <MenuItem onClick={() => { delateReview(data._id); handleClose(); }}>Delate</MenuItem>
                                        <MenuItem onClick={handleClose}>Update</MenuItem>
                                    </Menu>
                                </div>
                            </IconButton>
                        }
                        title={data.name}
                    // subheader={data.date}
                    />

                    {/* ------------------------ */}

                    <CardContent className="pt-0">
                        <Typography paragraph>
                            {data.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Col>
        )
    })

    return (
        <>{loggedInUser.email && admin && loggedInUser.email == admin.email ?
        
            <div className={style.reviewArea}>
                <Sidebar />
                <Container>
                    <h1 className={style.hadeLine}>Review Your review contents</h1>
                    <Row>
                        {reviewCards}
                    </Row>
                </Container>
            </div>

            : <Login />}
        </>
    );
};

export default review;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/review`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}