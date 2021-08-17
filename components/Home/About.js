import { Col, Row } from 'react-bootstrap';
import style from '../../Style/Pages/HomePage/about.module.scss';

const About = ({ data }) => {
    const info = { ...data.result[0] };

    return (
        <div className={style.about_area}>
            <div className={style.container}>
                <Row className="align-items-center">
                    <Col md={6} className={style.col}>
                        {/* <LazyLoadImage
                            alt="alt"
                            className="img-fluid"
                            effect="blur"
                            // height={500}
                            src="https://i.imgur.com/2O1VUhl.jpg" // use normal <img> attributes as props
                            // width={400} */}
                        {/* /> */}
                        <img className="img-fluid" src="https://i.imgur.com/2O1VUhl.jpg" alt="" />
                    </Col>
                    <Col md={6} className={`${style.text_contents} ${style.col}`}>
                        <h2 className="mt-3">
                            Who Are We & <br />
                            Why Should You Choose Us?
                        </h2>
                        <p>
                            We're a group of SEOs, Graphic Designers, Web & App Developers working
                            together to provide the best client experience possible from a digital
                            marketing agency
                        </p>
                        <div className={style.opctions}>
                            <div className={style.opction}>
                                <div className={style.icon}>01</div>
                                <div className={style.ops}>
                                    <h5>Creative Team</h5>
                                    <p>We have a highly talented and powerful creative team</p>
                                </div>{' '}
                            </div>
                            <div className={style.opction}>
                                <div className={style.icon}>02</div>
                                <div className={style.ops}>
                                    <h5>Budget Friendly</h5>
                                    <p>
                                        We will charge you based on the amount of work one website
                                        needs to create.
                                    </p>
                                </div>{' '}
                            </div>
                            <div className={style.opction}>
                                <div className={style.icon}>03</div>
                                <div className={style.ops}>
                                    <h5>Lifetime Support</h5>
                                    <p>
                                        We go beyond to help our clients. Once we finish working on
                                        your website we will always be there to help!
                                    </p>
                                </div>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;
