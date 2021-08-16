import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import dynamic from "next/dynamic";
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../components/Layout';
import yeenderServer from '../../serverConfig';
import style from './styles/about.module.css';
const Sidebar = dynamic(import("../../components/dashboard/Sidebar"));
const Login = dynamic(import("../login"));


const about = ({ aboutData }) => {
    const data = { ...aboutData.result[0] };
    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    // console.log("hello", loggedInUser);
    // from data send to backend
    const [info, setInfo] = useState({});
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const submitData = (id) => {
        fetch(`${yeenderServer}/aboutInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('then', data);
                if (data) {
                    alert('about info updated successfully');
                }
            });
    };

    // UPLOAD IMG FROM YOUR COMPUTER AND MAKE URL 
    const [{ alt, src }, setImg] = useState({
        src: 'https://i.imgur.com/Y7ADeAi.jpg',
        alt: 'Upload an Image',
    });

    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name,
            });
            const newInfo = { ...info };
            newInfo.img = URL.createObjectURL(e.target.files[0]);
            setInfo(newInfo);
        }
    };


    return (
        <>
            {loggedInUser.email && admin && loggedInUser.email == admin.email ?
                <section className={style.aboutArea}>
                    <Sidebar />
                    <Container xl="true">
                        <form>
                            <h2 className={`${style.headLine} text-truncate`}>Update your About section</h2>
                            <Row className="align-items-center">
                                <Col md>
                                    {/* ------- file upload btn start -------- */}

                                    <div>
                                        <input
                                            style={{ display: 'none' }}
                                            onChange={handleImg}
                                            accept=".png, .jpg, .jpeg"
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained" color="primary" component="span">
                                                Upload
                                            </Button>
                                        </label>

                                        <input
                                            style={{ display: 'none' }}
                                            onChange={handleImg}
                                            accept=".png, .jpg, .jpeg"
                                            id="icon-button-file"
                                            type="file"
                                        />
                                        <label htmlFor="icon-button-file">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                            >
                                                <PhotoCamera />
                                            </IconButton>
                                        </label>
                                    </div>
                                    {/* ----file upload btn end ---- */}

                                    <img src={src} alt={alt} className="about-img img-fluid" />
                                </Col>
                                <Col md>
                                    <h1 className={style.aboutTitle}>ABOUT</h1>
                                    <textarea
                                        name="description"
                                        onBlur={handleBlur}
                                        className={style.textarea}
                                        defaultValue={data.description ? data.description : ''}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12} md={6} lg={3}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.title ? data.title : ''}
                                        name="title"
                                        placeholder="title *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.facebook ? data.facebook : ''}
                                        name="facebook"
                                        placeholder="facebook link *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.youtube ? data.youtube : ''}
                                        name="youtube"
                                        placeholder="youtube link *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.linkedin ? data.linkedin : ''}
                                        name="linkedin"
                                        placeholder="linkedin link *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.twitter ? data.twitter : ''}
                                        name="twitter"
                                        placeholder="twitter link *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.instagram ? data.instagram : ''}
                                        name="instagram"
                                        placeholder="instagram link *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.address ? data.address : ''}
                                        name="address"
                                        placeholder="address *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.country ? data.country : ''}
                                        name="country"
                                        placeholder="country *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.email ? data.email : ''}
                                        name="email"
                                        placeholder="email *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.phone ? data.phone : ''}
                                        name="phone"
                                        placeholder="phone *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.img ? data.img : ''}
                                        name="img"
                                        placeholder="img *"
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <input
                                        type="text"
                                        onBlur={handleBlur}
                                        className={style.inputs}
                                        defaultValue={data.logo ? data.logo : ''}
                                        name="logo"
                                        placeholder="logo *"
                                    />
                                </Col>
                            </Row>
                            <Button
                                onClick={() => submitData(data._id)}
                                variant="contained"
                                color="primary"
                                component="span"
                            >
                                submit
                            </Button>
                        </form>
                    </Container>
                </section>

                : <Login />}
        </>
    );
};

export default about;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/aboutInfo`);
    const aboutData = await res.json();

    if (!aboutData) {
        return {
            notFound: true,
        };
    }

    return {
        props: { aboutData },
    };
}
