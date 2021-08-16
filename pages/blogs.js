import Container from '@material-ui/core/Container';
import dynamic from "next/dynamic";
import Head from 'next/head';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';
import style from '../styles/blogs.module.css';

const BlogCards = dynamic(import("../components/ShareComponents/BlogCards"),{ loading: () => <Loading /> });
const BlogSidebar = dynamic(import("../components/ShareComponents/BlogSidebar"),{ loading: () => <Loading /> });
const RelatedBlogs = dynamic(import("./blog/relatedBlogs"),{ loading: () => <Loading /> });


const blogs = ({ blogsData }) => {
    const blogs = blogsData.result;

    // let i = blogs.length - 1;
    // for (; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = blogs[i];
    //     blogs[i] = blogs[j];
    //     blogs[j] = temp;
    // }

    return (
        <div className="pb-3" style={{ background: "#EEF0F1" }}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: blog page</title>
            </Head>
            <div className="d-fex justify-content-center">
                <div>
                    <h1 className={style.MainHeadline}>Yeender blog page</h1>
                    <hr className={style.blogsHr} />
                </div>
            </div>
            <Container maxWidth="lg">
                <Row>
                    <Col lg={9} md={9} className="pl-0">
                        <div className="row"></div>
                        
                        <BlogCards blogs={blogs} />
                        
                        <RelatedBlogs newBlog={blogs} />
                    </Col>
                    <Col lg={3} md={3} className={`${style.blog_sidebar} p-0`}>
                        <BlogSidebar newBlog={blogs} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default blogs;


export async function getServerSideProps(context) {
    const res = await fetch(`${yeenderServer}/blog/active`)
    const blogsData = await res.json()

    if (!blogsData) {
        return {
            notFound: true,
        }
    }

    return {
        props: { blogsData }
    }
}
