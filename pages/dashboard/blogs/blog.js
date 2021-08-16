import Container from '@material-ui/core/Container';
import dynamic from "next/dynamic";
import React, { useContext } from 'react';
import { UserContext } from '../../../components/Layout';
import yeenderServer from '../../../serverConfig';
import style from '../styles/blogs.module.css';
const BlogDashboardCards = dynamic(import("../../../components/dashboard/BlogDashboardCards"));
const PostNewBlog = dynamic(import("../../../components/dashboard/Modals/PostNewBlog"));
const Sidebar = dynamic(import("../../../components/dashboard/Sidebar"));
const Login = dynamic(import("../../login"));



const blog = ({ blogsData }) => {
    const { loggedInUser, setLoggedInUser, admin } = useContext(UserContext);

    const blogs = blogsData.result;
    return (
        <>{loggedInUser.email && admin && loggedInUser.email == admin.email ?

            <div className="pb-3" style={{ background: "#EEF0F1" }}>
                <Sidebar />
                <h1 className={style.MainHeadline}>Yeender blog page</h1>
                <Container maxWidth="lg">
                    {/* post new blog  */}
                    <PostNewBlog />
                    {
                        blogs.map((data, index) => <BlogDashboardCards key={index} data={data} />)
                    }
                </Container>
            </div>

            : <Login />
        } </>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`${yeenderServer}/blog`)
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


export default blog;

