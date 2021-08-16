import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from "next/link";
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import yeenderServer from '../../serverConfig';
import style from '../../styles/blog.module.scss';

const BlogSidebar = dynamic(import('../../components/ShareComponents/BlogSidebar'));
const RelatedBlogs = dynamic(import('./relatedBlogs'));

const fakeData = [
    {
        title: "Yeender The Complete Solution Of Digital Marketing, Web & App Development",
        date: "Monday  May 2021",
        descriptionHtml: (
            <div>
                <img src="https://i.imgur.com/ZhOzaU3.jpg" alt="d" loading="lazy" />
                <p>The front-end web developer only knows the front-end languages such as – HTML, JQuery, CSS, JavaScriptReact, AngularJS, etc. On the other hand, the back-end web developer knows the back-end languages like – Java, PHP, Ruby and Ruby On Rails, C#, MySQL, MongoDB & so on. Finally, the full stack web developer, who pretty much knows both front & back-end languages.
                    <br /><br />
                    For your simpler understanding, what you’re seeing on this web page is done by the front-end web developers. The rest of the web page & website (what is out of your eyesight) is done by the back-end web developer. Yeender is blessed with developers, primarily Full Stack Web Developers who know everything. We also have professional front-end & back-end web developers who have decades of experience
                </p>

                <img src="https://i.imgur.com/hM2zfwd.jpg" alt="d" loading="lazy" />
                <p>For your simpler understanding, what you’re seeing on this web page is done by the front-end web developers. The rest of the web page & website (what is out of your eyesight) is done by the back-end web developer. Yeender is blessed with developers, primarily Full Stack Web Developers who know everything. We also have professional front-end & back-end web developers who have decades of experience
                </p>
            </div>
        )
    }
]

const Blog = ({ blogData, blogsData }) => {
    const blog = blogData[0];
    const blogs = blogsData.result;
    return (
        <div className={style.blogArea}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Yeender is a one spot digital solution Canadian-based company. We specialize in web development, web design, digital marketing, and graphic design. Working together with businesses and individuals to fulfill their needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="yeender, Web Design, Web Development, Digital Marketing, Retail Business Website, Educational Website, E-commerce Website, Blog and magazine Website, Landing page, Small Business Website" />
                <title>Yeender: {blog.title ? blog.title : ''}</title>
            </Head>

            <div className={`${style.container}`}>
                <Row className="pt-4">
                    <Col lg={8} md={8}>
                        {/* Latest blog card start */}
                        <Paper variant="outlined" className="card p-4">
                            <div className={style.head_bar}>
                                <p><span>2 DAys Ago</span> <span>3min Read</span></p>
                                <h4>Yeender The Complete Solution
                                    Of Digital Marketing, Web & App Development</h4>
                                <p className={style.date}><span>Monday  May 2021</span></p>
                            </div>
                            <div className={style.body_bar}>
                                {fakeData[0].descriptionHtml}
                            </div>

                            {/* == blogar info start */}

                            <div className="row algin-items-center pt-5 pb-3">
                                <div className="col-sm d-flex">
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    <h5 className="pl-2 pt-2">Mahbub Hasan</h5>
                                </div>
                                {/* <!-- Right --> */}
                                <div className="col-sm text-right pt-3">
                                    <Link  href="/">
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-facebook-f" />
                                    </a></Link>
                                    <Link href="/" >
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    </Link>
                                    <Link href="/">
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-google" />
                                    </a></Link>
                                    <Link href="/" >
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-instagram" />
                                    </a></Link>
                                    <Link href="/" >
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-linkedin" />
                                    </a></Link>
                                    <Link href="/">
                                    <a className="me-4 text-reset">
                                        <i className="fab fa-github" />
                                    </a>
                                    </Link>
                                </div>
                                {/* <!-- Right --> */}
                            </div>

                            {/* == blogar info end */}

                        </Paper>
                        {/* Latest blog card end */}


                        {/* comments section started  */}
                        <Paper variant="outlined" className={`${style.comments} card p-4`}>
                            <div className={style.comment}>
                                <p>Makes and planning contracting waved could can where of week in on that a phase of money material myself blue such the agency.
                                </p>
                                <div className="col-sm d-flex">
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    <h5 className="pl-2 pt-2">Mahbub Hasan</h5>
                                </div>
                            </div>

                            {/* add commend  */}
                            <div className={style.add_comment}>
                                <h4>Add Comment</h4>
                                <textarea placeholder="www.example.net"></textarea>

                                <button>Comment</button>
                            </div>
                        </Paper>
                        {/* comments section started  */}
                    </Col>
                    <Col lg={4} md={4}>
                        <BlogSidebar newBlog={blogs} />
                    </Col>
                </Row>
            </div>

            {/* related blog section  */}
            <RelatedBlogs newBlog={blogs} />
        </div>
    );
};

export default Blog;

// Single blog fetching
export async function getServerSideProps({ params: { id } }) {
    const resId = await fetch(`${yeenderServer}/blog/${id}`);
    const res = await fetch(`${yeenderServer}/blog/active`);

    const blogData = await resId.json();
    const blogsData = await res.json();

    if (!blogData) {
        return {
            notFound: true,
        };
    }
    if (!blogsData) {
        return {
            notFound: true,
        };
    }

    return {
        props: { blogData, blogsData },
    };
}
