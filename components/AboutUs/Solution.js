import React from 'react';
import style from '../../Style/Pages/AboutPage/solution.module.scss';

const Solution = () => {
    const fakeAboutData = {
        s: ['d', 'd'],
        s: [
            {
                d: 'd',
                d: 'da',
            },
        ],
    };
    // console.log(fakeAboutData);

    return (
        <div className={style.about_solution_component_area}>
            <div className={style.container}>
                <div className="row align-items-center">
                    <div className={`${style.col} col-md`}>
                        <img className="img-fluid" src="https://i.imgur.com/P9wdGZe.jpg" alt="" />
                    </div>
                    <div className={`${style.col} col-md`}>
                        <h3>
                            Yeender The Complete Solution <br />
                            Of Digital Marketing, Web & App Development
                        </h3>
                        <p>
                            We&apos;re confident enough to guarantee success if you choose us as
                            your digital marketing agency. From SEO to Google ads, we've experts in
                            every sector.
                        </p>
                        <div>
                            <div className={style.offer_options}>
                                <h6>
                                    With Yeender, You&apos;ll Always Receive More Than You spend
                                </h6>
                                <p>
                                    Yeender is devoted to offering the best services within the
                                    client&apos;s budget.
                                </p>
                            </div>
                            <div className={style.offer_options}>
                                <h6>Get Increased Traffic & Results</h6>
                                <p>
                                    Building stable money making websites & apps is hard. It&apos;s
                                    even harder to scale it up in the competitive niches. Don&apos;t
                                    worry; we&apos;ve got you covered.
                                </p>
                            </div>
                            <div className={style.offer_options}>
                                <h6>Increasing Ranking</h6>
                                <p>
                                    Trying to game the algorithm won&apos;t be that fruitful today
                                    like it once did. Now, it&apos;s all about delivering a better
                                    user experience via your website&apos;s design & interface.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;
