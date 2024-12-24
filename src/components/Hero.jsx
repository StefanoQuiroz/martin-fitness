//import img1 from '../Assets/main-image1.png';
//import img2 from '../Assets/main-image3.png';
import icon1 from '../Assets/icons8-play-64.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';

const Hero = () => {
    return (
        <>
            {/* ********************************* */}
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 400000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className='mySwiper'
            >
                <SwiperSlide>
                    {' '}
                    <div className='container-fluid Hero'>
                        <div className='container gx-0'>
                            <div className='row gx-0'>
                                <div className='col-md-12 col-lg-6' data-aos='fade-right' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                                    <div className='Hero_col1'>
                                        <h1 className='hero_h1'>
                                            Build Your Body
                                            <span> Transform</span> Your Life
                                        </h1>
                                        <p>
                                            Empower your journey to peak fitness. Build a stronger body and transform your life with our expert guidance and
                                            support.
                                        </p>
                                        <div className='hero_btns'>
                                            <button className='btn1 btn0'>Get Started</button>
                                            <button className='play_btn'>
                                                <img src={icon1} alt='' /> Watch Video
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6'>
                                    <div className='Hero_col2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ********************************* */}
                {/*  <SwiperSlide>
          <div className="container-fluid Hero Hero1">
            <div className="container gx-0">
              <div className="row gx-0 align-items-start">
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1 pt-md-4">
                    <h1>
                      Get<span> Healthy </span>Body With the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                    <p>
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness
                      solutions.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="play_btn">
                        <img src={icon1} alt="" /> Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col2">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
                {/* ********************************* */}
                {/*  <SwiperSlide>
          <div className="container-fluid Hero2">
            <div className="container gx-0">
              <div className="row gx-0">
                <div
                  className="col-md-12 col-lg-6 order-md-2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1 pt-md-5">
                    <h1>
                      Unlocked Your <span>Body</span> & <span>Mind</span> In
                      Prefect Balance
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate et similique quae iure.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="play_btn">
                        <img src={icon1} alt="" /> Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 col-lg-6 order-md-1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero2_col2">
                    <img src={img2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
            </Swiper>
            {/* ********************************* */}
            {/* ********************************* */}
            {/* <div className="container-fluid Hero Hero1">
        <div className="container gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="Hero_col1">
                <h1>
                  Get<span> Healthy </span>Body With the <span>Perfect</span>{" "}
                  Exercises
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate et similique quae iure.
                </p>
                <div className="hero_btns">
                  <button className="btn1 btn0">Get Started</button>
                  <button className="play_btn">
                    <img src={icon1} alt="" /> Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Hero_col2">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* ********************************* */}
            {/* <div className="container-fluid Hero2">
        <div className="container gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="Hero_col1">
                <h1>
                  Get<span> Healthy </span>Body With the <span>Perfect</span>{" "}
                  Exercises
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate et similique quae iure.
                </p>
                <div className="hero_btns">
                  <button className="btn1 btn0">Get Started</button>
                  <button className="play_btn">
                    <img src={icon1} alt="" /> Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="Hero2_col2">
                <img src={img2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* ********************************* */}
        </>
    );
};

export default Hero;
