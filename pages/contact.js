import dynamic from "next/dynamic";
import Head from 'next/head';
import React from 'react';
import Loading from "../components/ShareComponents/Loading";
const Contact = dynamic(import("../components/ShareComponents/Contact"),{ loading: () => <Loading /> });

const contact = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: contact page</title>
            </Head>
            <Contact />
        </>
    );
};

export default contact;