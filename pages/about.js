import dynamic from 'next/dynamic';
import React from 'react';
import ChooseUe from '../components/AboutUs/ChooseUe';
import Offer from '../components/AboutUs/Offer';
import Solution from '../components/AboutUs/Solution';
import Vision from '../components/AboutUs/Vision';
import Loading from '../components/ShareComponents/Loading';
import yeenderServer from '../serverConfig';

const AboutUs = dynamic(() => import('../components/AboutUs/AboutUs'), {
    loading: () => <Loading />,
    ssr: false,
});

const about = ({ data }) => (
    <div className="pb-5">
        <AboutUs data={data} />
        <Solution />
        <ChooseUe />
        <Vision />
        <Offer />
    </div>
);

export async function getStaticProps(context) {
    const res = await fetch(`${yeenderServer}/aboutInfo`);
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

export default about;
