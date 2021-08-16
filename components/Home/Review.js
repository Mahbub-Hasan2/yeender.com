import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ShowMore from 'react-show-more';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../Style/Pages/HomePage/review.module.scss';

const Review = ({ data }) => {
    const isMobail = useMediaQuery({
        query: '(max-device-width: 892px)',
    });

    const reviewData = data.result;
    return (
        <div className={style.review_area}>
            <div className="container">
                <div className={style.title_area}>
                    <h3>
                        Love from our clients
                        <br />
                        around the world
                    </h3>
                    <p>
                        The advantage employed to were for there
                        <br /> with some or heavy house it that.
                    </p>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isMobail ? 1 : 2}
                    autoPlay
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {reviewData ? (
                        reviewData.map((data) => (
                            <SwiperSlide key={data._id}>
                                <div className={style.review_cards}>
                                    <div className={style.avatar}>
                                        <div className={style.div}>
                                            <Avatar alt="Remy Sharp" src={data.img} />
                                        </div>
                                    </div>
                                    <div className={`${style.contents} shadow-1`}>
                                        <h5>{data.name}</h5>
                                        <div className={style.starIcons}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        {/* <p>{data.description}</p> */}
                                        <ShowMore
                                            // className={style.p}
                                            lines={5}
                                            more="Show more"
                                            less="Show less"
                                        >
                                            <p>{data.description}</p>
                                        </ShowMore>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <h3>Loading....</h3>
                    )}
                    <h5 className={style.dot}>.....</h5>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
