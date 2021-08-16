import React from 'react';
import style from '../../Style/Pages/HomePage/ContactEmail.module.scss';

const HomeContactEmail = () => (
    <div className="container mb-5 mt-5">
        <div className={`${style.contactEmail_area} d-flex align-items-center`}>
            <div className={style.div}>
                <h2>Just Connect With Us</h2>
                <p>
                    Magicians move the said heart meet
                    <br /> were goat{' '}
                </p>
                <form className={style.position_relative}>
                    <input className={style.tex_bar} type="text" placeholder="Your email here" />
                    {/* <button className={style.start_btn}>Get started</button> */}
                    <button type="button" className={`${style.start_btn} btn btn-warning`}>
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default HomeContactEmail;
