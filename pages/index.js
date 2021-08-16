import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import ClientsLogos from '../components/Home/ClientsLogos';
import HomeContactEmail from '../components/Home/HomeContactEmail';
import Projects from '../components/Home/Projects';
import { UserContext } from '../components/Layout';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';

const Header = dynamic(() => import('../components/Home/Header'), {
    loading: () => <Loading />,
    ssr: false,
});
const About = dynamic(() => import('../components/Home/About'), {
    loading: () => <Loading />,
    ssr: false,
});
const Services = dynamic(() => import('../components/Home/Services'), {
    loading: () => <Loading />,
});
const Review = dynamic(() => import('../components/Home/Review'), { loading: () => <Loading /> });
// const Swiper3D = dynamic(
//     () => import('../components/Home/Swiper3D'),
//     { loading: () => <Loading /> }
// )

const index = ({ aboutData, servicesData, projectsData, reviewsData, featuresData }) => {
    const { setOurAbout, projects, setProjects } = useContext(UserContext);

    React.useEffect(() => {
        setOurAbout(aboutData.result);
    }, [aboutData, setOurAbout]);

    React.useEffect(() => {
        setProjects(projectsData.result);
    }, [projectsData, setProjects]);

    return (
        <div>
            <Header />
            <About data={aboutData} />
            <Services data={servicesData} />
            <Projects />
            <Review data={reviewsData} />
            <ClientsLogos />
            <HomeContactEmail />
        </div>
    );
};

export default index;

// FETCHING ALL HOME PAGE DATA ===========>>
export async function getStaticProps(context) {
    const aboutRes = await fetch(`${yeenderServer}/aboutInfo`);
    const reviewsRes = await fetch(`${yeenderServer}/review/active`);
    const servicesRes = await fetch(`${yeenderServer}/service/active`);
    const projectsRes = await fetch(`${yeenderServer}/project/active`);
    const featuresRes = await fetch(`${yeenderServer}/feature/active`);

    const aboutData = await aboutRes.json();
    const reviewsData = await reviewsRes.json();
    const servicesData = await servicesRes.json();
    const projectsData = await projectsRes.json();
    const featuresData = await featuresRes.json();

    if (!aboutData.result) {
        return {
            notFound: true,
        };
    }

    if (!servicesData) {
        return {
            notFound: true,
        };
    }

    if (!projectsData) {
        return {
            notFound: true,
        };
    }

    if (!reviewsData) {
        return {
            notFound: true,
        };
    }

    if (!featuresData) {
        return {
            notFound: true,
        };
    }

    // all data return to props
    return {
        props: { aboutData, servicesData, projectsData, reviewsData, featuresData },
    };
}
