import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import StarsIcon from '@material-ui/icons/Stars';
import emailjs from 'emailjs-com';
import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import yeenderServer from '../../serverConfig';
import style from '../../styles/serviceDetail.module.css';

const Service = ({ service }) => {
    const data = service.result ? service.result[0] : '';

    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(e.target);
        emailjs
            .sendForm('service_6x6zhwl', 'template_mtsm54e', e.target, 'user_MV1Q2PezGfAgY0wbCbtu8')
            .then(
                (result) => {
                    if (result) {
                        alert('✅Your message has been sent successfully✅');
                        document.getElementById('resetFormServiceDetailPage').reset();
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

    return (
        <div className={style.area}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website"
                />
                <title>Yeender: {data.title ? data.title : ''}</title>
            </Head>

            <Typography
                component="div"
                className={style.main_Head_img_bg}
                style={{ backgroundImage: `url(${data.img})` }}
            >
                <div className={style.bg_img_overlay}>
                    <h2>{data.title}</h2>
                </div>
            </Typography>

            {/* ***************************************************************** */}

            <div className="container">
                <Row>
                    <Col md={7}>
                        <Row className="border-bottom pb-3">
                            <Col sm={10}>
                                <h2 className={style.main_title}>This is title {data.title}</h2>
                                <div className={style.title_c_icons}>
                                    <button>
                                        <AttachMoneyIcon /> Budget Friendly
                                    </button>
                                    <button>
                                        <HeadsetMicIcon /> Lifetime Support
                                    </button>
                                    <button>
                                        <CardGiftcardIcon /> SEO friendly
                                    </button>
                                </div>
                            </Col>
                            <Col sm={2} className={style.avatar_headLine}>
                                <Avatar alt="Remy Sharp" src={data.img} />
                            </Col>
                        </Row>

                        {data.relatedServices
                            ? data.relatedServices.map((content, index) => (
                                  <div key={index} className="">
                                      <div className="d-flex mt-1 mb-2 ml-3">
                                          <StarsIcon />
                                          <h6 className="mb-1 ml-2">{content}</h6>
                                      </div>
                                  </div>
                              ))
                            : ''}

                        <CardContent className="pt-3 mt-3 border-top">
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardContent className="pt-2">
                            <h4>
                                Reviews <StarsIcon style={{ color: '#0D8FEE' }} />
                            </h4>
                            <h5>
                                <StarsIcon style={{ color: '#0D8FEE' }} /> 9.3 (147 reviews)
                            </h5>
                        </CardContent>
                    </Col>

                    {/* -------------------------------------------------------------------- */}

                    <Col md={5}>
                        <Card>
                            <CardContent>
                                <h5>
                                    Tell us the details of your requirements. <br /> Or ask your
                                    question. ({data.title})
                                </h5>
                                <Typography
                                    className="pb-2"
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {data.description}
                                </Typography>
                                <form onSubmit={sendEmail} id="resetFormServiceDetailPage">
                                    <input
                                        type="text"
                                        className={style.cardInputs}
                                        required
                                        name="name"
                                        placeholder="Your full Name *"
                                    />
                                    <input
                                        type="email"
                                        className={style.cardInputs}
                                        required
                                        name="email"
                                        placeholder="Your email *"
                                    />
                                    {/* <input type="tel" className={style.cardInputs} required name="number" placeholder="Mobile  Number *" /> */}
                                    <PhoneInput
                                        disableSearchIcon
                                        countryCodeEditable
                                        enableSearch
                                        country="ca"
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true,
                                        }}
                                    />
                                    <input
                                        type="text"
                                        className={`${style.cardInputs} mt-2`}
                                        required
                                        name="address"
                                        placeholder="Your address *"
                                    />
                                    <textarea
                                        type="text"
                                        className={style.cardTextArea}
                                        required
                                        name="message"
                                        placeholder="Your message *"
                                    />
                                    <Button type="submit" className={style.submitBtn}>
                                        Submit
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

//  DATA FETCHING
export async function getServerSideProps({ params: { id } }) {
    const resId = await fetch(`${yeenderServer}/service/detail/${id}`);
    const data = await resId.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            service: data,
        },
    };
}

// export async function getStaticPaths() {
//     const res = await fetch(`${yeenderServer}/service`);
//     const services = await res.json();
//     const servicePaths = services.result;

//     const paths = servicePaths.map((service) => ({
//         params: { id: service._id },
//     }))

//     return {
//         paths,
//         fallback: true // See the "fallback" section below
//     };
// }

export default Service;
