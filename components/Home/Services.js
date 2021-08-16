// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../../Style/Pages/HomePage/services.module.scss';

const Services = ({ data }) => {
    // const activeRouter = useRouter();

    const service = data.result;
    
    return (
        <>
            <div className={style.services_area}>
                <h3 className={style.services_title}>
                    Quality Services
                    <br /> We Provide
                </h3>
                <div className={style.container}>
                    <Row className="justify-content-center">
                        {service.map((data, index) => (
                            <Col md="4" sm="6">
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#DCDEFF' }}>
                                        <img
                                            className="img-fluid"
                                            src={data.img ? data.img : "https://i.imgur.com/R6YBPIO.png"}
                                            alt={data.title ? data.title : "service"}
                                        />
                                    </div>
                                    <h4>
                                        {data.title ? data.title : "..."}
                                    </h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Services;
