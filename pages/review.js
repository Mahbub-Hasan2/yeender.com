import { Avatar, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../components/Layout';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';
import style from '../style/components/related.module.scss';

const Login = dynamic(import('./login'), { loading: () => <Loading /> });

const review = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    // NEW review calect to form
    const [newReview, setNewReview] = useState({});

    // console.log(newReview)s
    const newReviewData = (e) => {
        const newReviewInfo = { ...newReview };
        newReviewInfo[e.target.name] = e.target.value;
        newReviewInfo.img = loggedInUser.img;
        setNewReview(newReviewInfo);
    };

    // fetching up new data to database
    const submitNewReview = (e) => {
        e.preventDefault();

        fetch(`${yeenderServer}/review`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then((res) => {
                if (res) {
                    alert('your review up successfully');
                }
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    alert('There was a server side error!');
                }
            });
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: review page</title>
            </Head>
            {/* {loggedInUser.email ? ( */}
                <div className={style.review_area}>
                    <h3 className={style.review_title}>This is review section</h3>
                    <hr className="client_hr" />
                    <br />
                    <br />

                    <Container maxWidth="xl">
                        <Row>
                            <Col md={6}>
                                <div className={style.preview_area}>
                                    <Avatar
                                        className="avatar-review"
                                        alt="Remy Sharp"
                                        src={loggedInUser.img}
                                    />

                                    <h2 className="avatar-nameReview">
                                        {newReview.name ? newReview.name : '***Your name***'}
                                    </h2>
                                    <p className="mb-0">
                                        <StarIcon className="reviewIcon" />
                                        <StarIcon className="reviewIcon" />
                                        <StarIcon className="reviewIcon" />
                                        <StarIcon className="reviewIcon" />
                                        <StarHalfIcon className="reviewIcon" />
                                    </p>
                                    <img
                                        className="quote-review img-fluid"
                                        style={{ float: 'left' }}
                                        src="https://img.icons8.com/nolan/64/quote-left.png"
                                        alt="img"
                                    />
                                    <br />

                                    <p className="text-center">
                                        {newReview.description
                                            ? newReview.description
                                            : '******************Your description******************'}
                                    </p>
                                    <img
                                        className="quote-review img-fluid"
                                        style={{ float: 'right' }}
                                        src="https://img.icons8.com/nolan/64/quote-right.png"
                                        alt="img"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <form onSubmit={submitNewReview}>
                                    <Row>
                                        <Col md={6} className={style.first_input}>
                                            <input
                                                onChange={newReviewData}
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="your name*"
                                                className={style.inputs}
                                            />
                                        </Col>
                                        <Col md={6} className="">
                                            <input
                                                onChange={newReviewData}
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="your email*"
                                                className={style.inputs}
                                            />
                                        </Col>
                                        <Col md={12} className="">
                                            <input
                                                onChange={newReviewData}
                                                required
                                                type="number"
                                                name="star"
                                                placeholder="your review points*"
                                                className={style.inputs}
                                            />
                                        </Col>
                                        <Col md={12} className="pr-2">
                                            <textarea
                                                onChange={newReviewData}
                                                required
                                                name="description"
                                                placeholder="your description*"
                                                className={style.textarea}
                                            />
                                        </Col>
                                    </Row>
                                    <Button type="submit" className={style.submitBtn}>
                                        Submit
                                    </Button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            {/* ) : (
                <Login />
            )} */}
        </>
    );
};

export default review;
