import React from 'react';
import style from '../../Style/Pages/AboutPage/vision.module.scss';

const Vision = () => {

    return (
        <div className={style.about_vision_component_area}>
            <div className={style.container}>
                <div className="row align-items-center">
                    <div className={`${style.col} col-md`}>
                        <img className={`${style.v_img} img-fluid`} src="https://i.imgur.com/y8lrH49.jpg" alt="" />
                    </div>
                    <div className={`${style.col} col-md`}>
                        <h3>
                            Our Vision Providing <br /> Ever-Increasing & Sustainable Result
                        </h3>
                        <p>
                            All of our clients have noticed constant increases in their rankings &
                            revenue. Our vision is to uphold the quality we're providing for the
                            longest time possible.
                        </p>
                        <div>
                            <div className={style.offer_options}>
                                <h6>What We Do & Offer</h6>
                                <p>
                                    We do success-oriented jobs for you. Our work ethics & process
                                    helps us gain the maximum results possible within the shortest
                                    time.
                                </p>
                            </div>
                            <div className={style.offer_options}>
                                <h6>Our Approach </h6>
                                <p>
                                    We don&apos;t take orders randomly to keep up the quality.
                                    Whenever a new client comes to us, we investigate his/her
                                    business thoroughly. If the business is scalable using our
                                    method, we agree to work for that business.
                                </p>
                            </div>
                            <div className={style.offer_options}>
                                <h6>Our Process</h6>
                                <p>
                                    For quality & effective work, we follow a methods. First of all,
                                    we arrange a client meeting before starting working on the
                                    project. After that, our expert panel plans the entire month or
                                    year roadmap & submits it to the client.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
