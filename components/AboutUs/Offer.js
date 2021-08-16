import React from 'react';
import style from '../../Style/Pages/AboutPage/offer.module.scss';

const FakeData = [
    {
        title: 'Digital Marketing',
        description:
            'We are committed to advertising your existing products & services effectively',
    },
    {
        title: 'Application Development',
        description:
            'We go beyond to help our clients. Once we finish working on your website we will always be there to help!',
    },
    {
        title: 'SEO & SMM',
        description:
            'Yeender offers Search Engine Optimization (SEO) & Social Media Marketing (SMM) to businesses of every size & shape.',
    },
    {
        title: 'Web Design & Development ',
        description:
            'We offer custom website design with polished UX & UI. These web designs will be CTR optimized to ensure the maximum CTR possible. Hence, it will increase the revenue & profit margin.',
    },
    {
        title: 'Local SEO',
        description:
            "As it's a Toronto-based digital marketing agency, we focus on local SEO more than anything.",
    },
    {
        title: 'Website Security ',
        description: "Don't risk your business & contact Yeender for a complete website check-up.",
    },
];

const Offer = () => (
    <div className={style.about_offer_component_area}>
        <div className={style.container}>
            <div className={style.head_line}>
                <h3>Things We Offer To Your Fingertips</h3>
                <p>
                    Yeender is all about digital marketing & web development solutions. With
                    Yeender, you can have excellent service within your budget. To make it easy for
                    you, here is the list of things we offer at Yeender:
                </p>
            </div>
            <div className={style.contents}>
                <div className={`${style.opctions} row`}>
                    {FakeData.map((data, index) => (
                        <div key={index} className={`${style.opction} col-sm-6`}>
                            <div className={style.icon}>0{1 + index}</div>
                            <div className={style.ops}>
                                <h5>Lifetime Support</h5>
                                <p>
                                    We go beyond to help our clients. Once we finish working on your
                                    website we will always be there to help!
                                </p>
                            </div>{' '}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Offer;
