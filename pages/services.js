import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';
import style from '../Style/Pages/HomePage/services.module.scss';

const Services = dynamic(import('../components/Home/Services'), { loading: () => <Loading /> });

const services = ({ data }) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
            <title>Yeender: service page</title>
        </Head>
        {/* <Services data={data} /> */}

        <div className={style.services_area}>
            <h3 className={style.services_title}>
                Quality Services
                <br /> We Provide
            </h3>
            <div className="container">
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#DCDEFF' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/R6YBPIO.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        Web
                                        <br />
                                        Design
                                    </h4>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#FFF7CD' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/I0goePG.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        Web
                                        <br />
                                        Devlopment
                                    </h4>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#D8F2F5' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/Fx6P5sj.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        App
                                        <br />
                                        Development
                                    </h4>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#D6F7DB' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/Blb8xH4.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        Digital
                                        <br />
                                        Marketing
                                    </h4>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#FFD2E5' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/nbW0gLS.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        Search Engine
                                        <br />
                                        Optimization
                                    </h4>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={`${style.service_cards} card text-center`}>
                                    <div style={{ background: '#D6F7DB' }}>
                                        <img
                                            className="img-fluid"
                                            src="https://i.imgur.com/LNz8OmR.png"
                                            alt="service icon"
                                        />
                                    </div>
                                    <h4>
                                        Graphics
                                        <br />
                                        Design
                                    </h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div className={`${style.left_side} card p-5`}>
                            <h3>Web Design</h3>
                            <p>
                                If you own a weak website, visitors won't take your words seriously. Make your website as strong as possible via custom web designing. Yeender is blessed with professional web designers to satisfy clients accordingly. We'll take care of your website's User interface (UI) & User experience (UX) to make them more user-friendly.
                                <br /><br />
                                If you want us to make a website for you from scratch, we can do that as well. You just need to ask; the rest is our responsibility. <br /><br />
                                Firstly, we need to inspect your existing website design. We'll show you the issues & the SEO impact on your website due to the design. Later on, we will make several proposals for you regarding the design. After confirming your order, our experts will deliver your new or improved design within the deadline.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    </div>
);

export default services;

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/service/active`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
    };
}
