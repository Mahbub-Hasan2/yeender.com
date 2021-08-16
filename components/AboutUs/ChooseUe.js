import React from 'react';
import style from '../../Style/Pages/AboutPage/ChooseUe.module.scss';

const ChooseUe = () => {
    const fakeAboutData = {
        s: ['d', 'd'],
        s: [
            {
                d: 'd',
                d: 'da',
            },
        ],
    };
    // console.log(fakeAboutData);

    return (
        <div className={style.about_Choose_component_area}>
            <div className={style.container}>
                <div className="row align-items-center">
                    <div className={`${style.col} col-md`}>
                        <h3>
                            Who Are We & <br />
                            Why Should You Choose Us?
                        </h3>
                        <p>
                            We&apos;re a group of SEOs, Graphic Designers, Web & App Developers
                            working together to provide the best client experience possible from a
                            digital marketing agency
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
                    </div>
                    <div className={`${style.col} col-md`}>
                        <img className="img-fluid" src="https://i.imgur.com/Wlh775P.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUe;
