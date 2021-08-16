import { Card, CardContent, Container } from '@material-ui/core';
import dynamic from "next/dynamic";
import Head from 'next/head';
import { useContext } from 'react';
import { UserContext } from '../components/Layout';
import Loading from '../components/ShareComponents/Loading';
import style from '../styles/dashboard.module.css';

const Sidebar = dynamic(import("../components/dashboard/Sidebar"),{ loading: () => <Loading /> });
const Login = dynamic(import("./login"),{ loading: () => <Loading /> });

const dashboard = () => {
    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    if (loggedInUser.email && admin && loggedInUser.email == admin.email) {
        return (
            <div className={style.dashboardPage}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                    <title>Yeender: deshboard page</title>
                </Head>
                <Sidebar />
                <Container>
                    <h1 className={style.headLine}>This is Our dashboard page.</h1>
                    <CardContent className={style.dasContent}>
                        <img
                            className="img-fluid"
                            src="https://i.imgur.com/tVK4H4p.png"
                            alt="img"
                        />
                        <Card className={style.mainCard}>wow</Card>
                    </CardContent>
                </Container>
            </div>
        );
    }

    return <Login />;
};

export default dashboard;
