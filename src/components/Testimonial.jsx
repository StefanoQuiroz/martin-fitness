import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';

import img1 from '../Assets/test1.jpg';
import img3 from '../Assets//test2.jpg';
import img4 from '../Assets/test3.jpg';
import img2 from '../Assets/test_partner.png';
import icon from '../Assets/test_icon.png';

import { Autoplay, EffectCreative } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <div className='container-fluid testimonial pb-md-5 pb-lg-0'>
                <div className='container'>
                    <div className='row gx-0'>
                        <div className='col-md-12 py-md-5 py-lg-0 col-lg-7' data-aos='fade-right' data-aos-duration='1000'>
                            <div className='testimonial_col1 pe-md-5 me-md-5'>
                                <h1 className='main_heading'>Real Transformations, Real Results</h1>
                                <p className='py-4'>
                                    Join our community of successful athletes who have transformed their bodies and lives. See how our personalized coaching and
                                    elite programs have helped hundreds achieve their dream physique and peak performance.
                                </p>
                                <div className='row pt-2 align-items-center'>
                                    <div className='col-md-5'>
                                        <div className='test_images'>
                                            <img src={img1} alt='Transformation Success' className='img-fluid' />
                                            <img src={img3} alt='Client Achievement' className='img-fluid test_images1' />
                                            <img src={img1} alt='Fitness Journey' className='img-fluid test_images2' />
                                            <img src={img4} alt='Body Transformation' className='img-fluid test_images3' />
                                            <img src={icon} alt='Excellence Badge' className='img-fluid test_images3' />
                                        </div>
                                    </div>
                                    <div className='col-md-7 gx-0'>
                                        <p className='test_p3'>
                                            <i className='fa-solid fa-star'></i> 4.9 (850+ Success Stories)
                                        </p>
                                    </div>
                                </div>
                                <img src={img2} alt='Training Excellence' className='img-fluid py-4' />
                            </div>
                        </div>
                        <div className='col-md-12 pb-md-5 pb-lg-0 col-lg-5' data-aos='fade-left' data-aos-duration='1000'>
                            <div className='testimonial_col2'>
                                <Swiper
                                    grabCursor={true}
                                    effect={'creative'}
                                    creativeEffect={{
                                        prev: {
                                            shadow: true,
                                            translate: [0, 0, -400],
                                        },
                                        next: {
                                            translate: ['100%', 0, 0],
                                        },
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, EffectCreative]}
                                    className='mySwiper'
                                >
                                    <SwiperSlide>
                                        <div className='row test_main'>
                                            <div className='col-12'>
                                                <div className='row gx-0 align-items-center'>
                                                    <div className='col-4 col-md-3 col-lg-4 text-center'>
                                                        <img src={img1} alt='Elite Athlete' className='img-fluid' />
                                                    </div>
                                                    <div className='col-8 col-md-9 col-lg-8'>
                                                        <h5>Mike R. | Competition Winner</h5>
                                                        <p className='test_p1 pt-1'>12-Week Transformation</p>
                                                    </div>
                                                </div>
                                                <div className='stars py-3 py-md-4 py-lg-3'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                </div>
                                                <p className='test_p2'>
                                                    "Martin's expertise is unmatched! In just 12 weeks, I dropped 8% body fat and added serious muscle mass. His
                                                    personalized approach and constant support made all the difference. If you're serious about transforming
                                                    your physique, this is your guy!"
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row test_main'>
                                            <div className='col-12'>
                                                <div className='row gx-0 align-items-center'>
                                                    <div className='col-4 col-md-3 col-lg-4 text-center'>
                                                        <img src={img3} alt='Pro Bodybuilder' className='img-fluid' />
                                                    </div>
                                                    <div className='col-8 col-md-9 col-lg-8'>
                                                        <h5>Sarah K. | Fitness Model</h5>
                                                        <p className='test_p1 pt-1'>Elite Program Member</p>
                                                    </div>
                                                </div>
                                                <div className='stars py-3 py-md-4 py-lg-3'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                </div>
                                                <p className='test_p2'>
                                                    "Working with Martin changed my entire approach to fitness. His elite program isn't just about workouts –
                                                    it's a complete transformation system. The nutrition plans and training protocols are next level. Achieved
                                                    my pro card under his guidance!"
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row test_main'>
                                            <div className='col-12'>
                                                <div className='row gx-0 align-items-center'>
                                                    <div className='col-4 col-md-3 col-lg-4 text-center'>
                                                        <img src={img4} alt='Transformation Champion' className='img-fluid' />
                                                    </div>
                                                    <div className='col-8 col-md-9 col-lg-8'>
                                                        <h5>Carlos M. | Performance Athlete</h5>
                                                        <p className='test_p1 pt-1'>6-Month Success Story</p>
                                                    </div>
                                                </div>
                                                <div className='stars py-3 py-md-4 py-lg-3'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                </div>
                                                <p className='test_p2'>
                                                    "From plateau to peak performance! Martin's advanced techniques and detailed attention to form
                                                    revolutionized my training. Gained 15lbs of lean muscle and smashed all my PRs. His knowledge of
                                                    bodybuilding is incredible!"
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
