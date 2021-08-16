import React, { useContext } from 'react';
import style from '../../Style/layout/_footer.module.scss';
import { UserContext } from '../Layout';

const Footer = () => {
    const { ourAbout } = useContext(UserContext);
    const data = ourAbout[0];
    // console.log(data )

    return (
        <>
            <footer className={`${style.footer_area} text-center text-lg-start text-muted`}>
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block text-white">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-google" />
                        </a>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="/" className="me-4 text-reset text-white">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5 text-white">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img
                                        style={{ width: '30%' }}
                                        src="https://i.imgur.com/LirzrRm.png"
                                        alt=""
                                    />
                                </h6>
                                <p className="text-white">
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                                <div className="text-white">
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-google" />
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                    <a href="" className="me-4 text-reset">
                                        <i className="fab fa-github" />
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        About
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Destinotion
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Community
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Contact
                                    </a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Terms & Conditions
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Privacy Policy
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Contact Us
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        FAQ/Help
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-white">
                                        Resources
                                    </a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <p className="text-white">
                                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                                </p>
                                <p className="text-white">
                                    <i className="fas fa-envelope me-3" />
                                    {/* info@example.com */}
                                    info@travelo.com
                                </p>
                                <p className="text-white">
                                    <i className="fas fa-phone me-3" /> + 851-943-1765
                                </p>
                                <p className="text-white">
                                    <i className="fas fa-print me-3" /> + 851-943-1765
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold text-white" href="https://yeender.com">
                        {' '}
                        Yeender.com
                    </a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
};

export default Footer;
