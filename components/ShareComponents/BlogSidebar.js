import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import style from '../../styles/blogSidebar.module.scss';
import { UserContext } from '../Layout';


const categoriesData = [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "IT Conference",
    "Start Up",
    "App Development",
    "Graphics Design",
]

const tagsData = [
    "Web", "Design", "SEO", "App", "web development", "digital marketing", "SEO"
]

const BlogSidebar = ({ newBlog }) => {
    const {categories, setCategories}  = React.useContext(UserContext);
    // console.log(categories);

    return (
        <div>
            {/* <PostNewBlog /> */}
            <Paper variant="outlined" className={`${style.latest_blog} card p-4`}>
                <h4>Latest blog</h4>
                <div className={style.img_date}>
                    <img className="img-fluid" src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h5>12 <br /> Dec</h5>
                </div>
                <h6 className={style.latest_blog_title}>Content writing demand day by day increasing</h6>
    
                <div className="d-flex text-truncate">
                    <div className="col-sm d-flex pl-0">
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <h6 className="pl-2 pt-2 text-truncate">Mahbub Hasan</h6>
                    </div>
                    <h6>Read More ></h6>
                </div>
            </Paper>
    
            <Paper variant="outlined" className={`${style.categories} card p-4 mt-4`}>
                <h4>Categories</h4>
                <div style={{ background: "#ffc107" }}>
                    <h5>Web Development</h5>
                </div>
                {
                    categoriesData.map((data, index) => (
                        <div key={index} style={{ background: "" }} onClick={() => setCategories(data)}>
                            <h5>{data}</h5>
                        </div>
                    ))
                }
            </Paper>
    
            <Paper variant="outlined" className={`${style.tags} card p-4 mt-4`}>
                <h4>Tags</h4>
                <div>
                    {tagsData.map((data, index) => (
                        <button key={index} onClick={() => setCategories(data)}>{data}</button>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default BlogSidebar;
