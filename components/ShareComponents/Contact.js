import emailjs from 'emailjs-com';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from "../../Style/Pages/ContactPage/contact.module.scss";
import { UserContext } from '../Layout';

const Contact = () => {
    // our about info
    const { ourAbout } = useContext(UserContext);
    const AbData = ourAbout[0];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v44bevo', 'template_ogr10z3', e.target, 'user_U9EP9L0vBpdLjEQAecnbk')
            .then(
                (result) => {
                    if (result) {
                        alert('✅Your message has been sent successfully✅');
                        document.getElementById('resetFormContact').reset();
                    }
                },
                (error) => {
                    if (error) {
                        alert('⚠Sorry, your message could not be sent. Please try again🔄');
                    }
                    console.log(error.text);
                }
            );
    };

    const isJustMob = useMediaQuery({
        query: '(min-device-width: 700px)',
    });

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={style.contact_area}>
            <h3 className={style.hadeline}>Contact Us</h3>
            <div className={style.container}>
                <Row className="align-items-center">
                    <Col md={7}>
                        <div className={`${style.inputs} card`}>
                            <h3 className={style.hadeLine}>
                                Send us a message
                            </h3>
                            <form onSubmit={sendEmail} id="resetFormContact" className="form">
                                <label>Full Name</label>
                                <input type="text" required name="name" placeholder="Mahbub Hasan" />

                                <label>Enter Email</label>
                                <input type="text" required name="email" placeholder="examole@gmail.com" />

                                <label>Website <span>( Optional )</span></label>
                                <input type="text" required name="website" placeholder="www.example.net" />

                                <label>Add Description</label>
                                <textarea name="message" required placeholder="Write your message"></textarea>

                                <label>Write your budget</label>
                                <input type="text" name="budget" placeholder="$25000" />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={`${style.information} card`}>
                            <h3>Contact<br /> Information</h3>
                            <p><span>Location :</span> 2405 Finch Ave West North
                                York, ON
                                M9M-2X2, Canada M9M-2X2,
                                Canada</p>

                            <p><span>Email :</span> shabnam.priyanka@live.ca</p>
                            <p><span>Phone :</span> 647-222-4345</p>

                            {/* icons  */}
                            <div className={style.contact_icons}>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-github" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;
