import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Loading from './ShareComponents/Loading';

const Footer = dynamic(import('./ShareComponents/Footer'), { loading: () => <Loading /> });
const Navbar = dynamic(import('./ShareComponents/Navbar'), { loading: () => <Loading /> });
const IconsSidebar = dynamic(import('./ShareComponents/IconsSidebar'), {
    loading: () => <Loading />,
});

export const UserContext = createContext();

const Layout = ({ children }) => {
    const activeRouter = useRouter();
    const style = {
        display: activeRouter.pathname === '/dashboard/' ? 'block' : 'none',
    };

    // OUR ABOUT INFORMATION STATE
    const [ourAbout, setOurAbout] = useState({});
    const [loggedInUser, setLoggedInUser] = useState({});
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState("");

    // console.log(loggedInUser);
    // AOS Library
    useEffect(() => {
        AOS.init({
            offset: 250,
            duration: 2000,
        });
    }, []);

    return (
        <UserContext.Provider
            value={{
                ourAbout,
                setOurAbout,
                loggedInUser,
                setLoggedInUser,
                projects,
                setProjects,
                categories,
                setCategories
            }}
        >
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                    <meta
                        name="description"
                        content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs."
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta
                        name="keywords"
                        content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website"
                    />
                    <meta name="author" content="shabnam priyanka" />
                    <title>Yeender || Yeender is the best digital marketing agency in Toronto, Canada. We've SEOs,
                        Graphic Designers, Web & App developers in our team to offer you a smooth
                        experience with Yeender.
                    </title>

                   

                    {/* css links */}
                    {/* <!-- Materialize CSS link --> */}
                    {/* <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                    /> */}
                    {/* <!-- Bootstrap CSS link --> */}
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                        crossOrigin="anonymous"
                    />

                    {/* slider  */}
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />

                    {/* <!-- Font Awesome --> */}
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                        rel="stylesheet"
                    />
                    {/* <!-- Google Fonts --> */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <!-- MDB --> */}
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
                        rel="stylesheet"
                    />

                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                </Head>

                <div className={activeRouter.pathname == '/' ? '' : 'fixdNavbar'}>
                    <Navbar />
                </div>

                {children}

                <IconsSidebar />
                <MessengerCustomerChat pageId="102368518581871" appId="232333398556116" />

                <Footer />

                {/* js links  */}

                {/* <!-- Materialize JavaScript link --> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" /> */}
                {/* <!-- Bootstrap JavaScript link --> */}
                <script
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
                    integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
                    crossOrigin="anonymous"
                />

                {/* <!-- MDB --> */}
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
                />

                <script src="https://unpkg.com/swiper/swiper-bundle.js" />
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
            </div>
        </UserContext.Provider>
    );
};

export default Layout;
