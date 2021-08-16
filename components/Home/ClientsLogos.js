import React from 'react';
import style from '../../Style/Pages/HomePage/ClientsLogos.module.scss';

const logosData = [
    { "logo": "https://i.imgur.com/P6uk2m0.png" },
    { "logo": "https://i.imgur.com/mafXS0F.png" },
    { "logo": "https://i.imgur.com/xPGdPIu.png" },
    { "logo": "https://i.imgur.com/GXbjk6B.png" },
    { "logo": "https://i.imgur.com/MBQy1Df.png" },
    { "logo": "https://i.imgur.com/3iVFBDO.png" },
    { "logo": "https://i.imgur.com/FYZC6sr.png" },
    { "logo": "https://i.imgur.com/GnkYohz.png" },
    { "logo": "https://i.imgur.com/jI7CTau.png" },
    { "logo": "https://i.imgur.com/gvVdyOb.png" },
    { "logo": "https://i.imgur.com/vCrawsh.png" },
    { "logo": "https://i.imgur.com/MgeTwSH.png" },
    { "logo": "https://i.imgur.com/A1rsL8G.png" },
    { "logo": "https://i.imgur.com/nPrrNey.png" },
    { "logo": "https://i.imgur.com/BOruANG.png" },
    { "logo": "https://i.imgur.com/U1vTBe9.png" }
]

const ClientsLogos = () => {
    const [count, setCount] = React.useState(10);
    // console.log(count)
    return (
        <div className={style.clients_Logos_area}>
            <div className="container">
                <div className={style.title_area}>
                    <h2>Over 1k Compnies Worked with Us</h2>
                    <p>We have been working with some Fortune 500 clients</p>
                </div>
                <div className={`${style.logos} row justify-content-center`}>
                    {
                        logosData.slice(0, count).map((d, index) => (
                            <div key={index}>
                                {/* <Image
                                    src={d.logo}
                                    alt="logo"
                                    className="img-fluid"
                                    width={229}
                                    height={229}
                                    layout="responsive"
                                    loading="eager"
                                    priority
                                /> */}
                                <img src={d.logo} alt="" />
                            </div>
                        ))
                    }
                </div>

                {/* see more / less section  */}
                <div className="pt-5 text-center">

                    {count === logosData.length || count > logosData.length ?
                        <button
                            onClick={() => setCount(5)}
                            type="button"
                            className="btn btn-outline-warning btn-rounded w-50"
                            data-mdb-ripple-color="dark"
                        >
                            See less
                        </button>
                        :
                        <>
                            <button
                                onClick={() => setCount(count + 5)}
                                type="button"
                                className="btn btn-warning btn-rounded mr-2"
                                data-mdb-ripple-color="dark"
                            >
                                see more
                            </button>
                            {count === 10 ? "" :
                                <button
                                    onClick={() => setCount(count - 5)}
                                    type="button"
                                    className="btn btn-outline-warning btn-rounded ml-2"
                                    data-mdb-ripple-color="dark"
                                >
                                    See less
                                </button>
                            }
                        </>

                    }
                </div>
                {/* see more / less section  */}
            </div>
        </div >
    );
};

export default ClientsLogos;
