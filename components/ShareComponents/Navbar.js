/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import style from '../../Style/layout/navbar.module.scss';
import { UserContext } from '../Layout';

const Navbar = () => {
    const activeRouter = useRouter();

    // our about info
    const { ourAbout } = useContext(UserContext);
    const AbData = ourAbout[0];
    // console.log(AbData)

    const [navbarBg, setNavbarBg] = useState(false);

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 150) {
                setNavbarBg(true);
            } else {
                setNavbarBg(false);
            }
        };
        window.addEventListener('scroll', changeNavbarBg);
    }, []);

    return (
        <div className={style.navbar_area}>
            <Container maxWidth="xl">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>

                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                {/* <img style={{ width: "30%" }} src="https://i.imgur.com/LirzrRm.png" alt="" /> */}
                                <img
                                    src="https://i.imgur.com/LirzrRm.png"
                                    width="70"
                                    alt=""
                                    loading="lazy"
                                />
                            </a>
                            {/* Left links */}
                            <div className={style.left_links}>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className={`${style.nav_link} nav-link`}>Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about">
                                            <a className={`${style.nav_link} nav-link`}>About Us</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services">
                                            <a className={`${style.nav_link} nav-link`}>Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blogs">
                                            <a className={`${style.nav_link} nav-link`}>Blog</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/review">
                                            <a className={`${style.nav_link} nav-link`}>
                                                Testimonial
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className={`${style.nav_link} nav-link`}>
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}

                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            <Link href="/login">
                            <button type="button" className="btn btn-warning">
                                Log in
                            </button>
                            </Link>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;
