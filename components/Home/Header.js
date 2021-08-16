import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../../Style/Pages/HomePage/header.module.scss';

const NewHeader = () => (
    <div className={style.header_area}>
        <div className={style.container}>
            <Row className="align-items-center">
                <Col md={6} className={`${style.header_col_1} ${style.col}`}>
                    <div>
                    <h2>
                        Design <br /> Development
                        <br /> & Digital Marketing
                    </h2>
                    </div>
                    <p className={style.description}>
                        Yeender is the best digital marketing agency in Toronto, Canada. We've SEOs,
                        Graphic Designers, Web & App developers in our team to offer you a smooth
                        experience with Yeender.
                    </p>

                    <div className={style.btn_div}>
                        <button type="button" className="btn btn-warning mr-2">
                            Get Started
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-warning ml-2"
                            data-mdb-ripple-color="dark"
                        >
                            Learn More
                        </button>
                    </div>

                    <div className={`${style.clients_count} row row-cols-3`}>
                        <div className="col">
                            <h5>400+</h5>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col">
                            <h5>400+</h5>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col">
                            <h5>400+</h5>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </Col>

                <Col md={6} className={`${style.header_col_2} ${style.col}`}>
                    <Image
                        src="https://i.imgur.com/zKMeVFv.png"
                        alt="Picture of the author"
                        width={533}
                        height={683}
                        className="img-fluid"
                        loading="eager"
                        priority
                    />
                </Col>
            </Row>
        </div>
    </div>
);

export default NewHeader;
