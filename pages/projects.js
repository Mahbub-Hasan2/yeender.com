import { Container } from '@material-ui/core';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../components/Layout';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';

const Project = dynamic(import('../components/ShareComponents/Project'), {
    loading: () => <Loading />,
});

const projects = ({ data }) => {
    const activeRouter = useRouter();
    const { projects, setProjects } = useContext(UserContext);

    useEffect(() => {
        setProjects(data.result);
    }, [data, setProjects]);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: blog page</title>
            </Head>
            {data ? (
                <div className="project-area">
                    <Container>
                        <h4 className="project-title">OUR PROJECTS -</h4>
                        <Project />
                    </Container>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`${yeenderServer}/project/active`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
    };
}

export default projects;
