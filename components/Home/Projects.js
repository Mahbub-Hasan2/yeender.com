import Image from 'next/Image';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../../Style/Pages/HomePage/porject.module.scss';
import { UserContext } from '../Layout';

const Projects = () => {
    const { projects } = useContext(UserContext);
    console.log(projects)
    return (
        <div className={style.projects_area_home}>
            <h2 className={style.main_title}>Our Recent Works</h2>
            <div className="container-lg">
                <Row>
                    {projects.map((data) => (
                        <Col md={4} key={data._id}>
                            <div className="card shadow-5 mb-4">
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    className="img-fluid"
                                    width={373}
                                    height={120}
                                    layout="responsive"
                                    loading="eager"
                                    priority
                                />
                                <p>App Design</p>
                                <h3>{data.title}</h3>
                                <h6>
                                    View more <i className="fas fa-long-arrow-alt-right" />
                                </h6>
                            </div>
                        </Col>
                    ))}
                </Row>

                <h5 className={style.see_more}>
                    More Project <i className="fas fa-long-arrow-alt-right" />
                </h5>
            </div>
        </div>
    );
};

export default Projects;
