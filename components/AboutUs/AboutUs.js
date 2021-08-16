import style from '../../Style/Pages/AboutPage/aboutUs.module.scss';

const AboutUs = () => (
    <div className={style.about_page_1_section_area}>
        <div className={style.about_hade_area}>
            <h2>About Us</h2>
        </div>

        <div className="container-xl">
            <div className={`${style.card} card shadow-lg`}>
                <h3>
                    Our Mission is Ensuring Financial
                    <br /> Growth To Every Client
                </h3>
                <p>
                    Our mission is simple & solid – We ensure everlasting financial growth to our
                    clients. This mission is true for both our
                    <br /> service types: Digital Marketing & Web Development.{' '}
                </p>
                <div className="row">
                    <div className="col">
                        <h5>400+</h5>
                        <p>Happy Clients</p>
                    </div>
                    <div className="col">
                        <h5>400+</h5>
                        <p>Happy Clients</p>
                    </div>
                    <div className="col">
                        <h5>400+</h5>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;
