// import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import 'swiper/swiper.scss';
import Loading from '../components/ShareComponents/Loading';
import '../styles/globals.scss';

const Layout = dynamic(() => import('../components/Layout'), {
    loading: () => <Loading />,
});

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
