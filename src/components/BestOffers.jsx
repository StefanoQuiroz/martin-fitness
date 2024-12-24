import img1 from '../Assets/icons8-gym.png';
import img2 from '../Assets/icons8-yoga-60.png';
import img3 from '../Assets/icons8-fitness-50.png';
import img4 from '../Assets/icons8-run-50.png';

const BestOffers = () => {
    return (
        <>
            <div className='container-fluid BestOffers'>
                <div className='container'>
                    <div className='row gx-0 py-4 align-items-center'>
                        <div className='col-md-7 col-lg-7'>
                            <h1 className='main_heading pe-md-5 pe-lg-5 me-lg-5'>Elite Programs Designed for Your Success</h1>
                        </div>
                        <div className='col-md-5 col-lg-5'>
                            <p>
                                Experience transformation through our expertly crafted fitness programs. Each program is designed to push your limits, maximize
                                your potential, and deliver exceptional results. Your journey to excellence starts here.
                            </p>
                        </div>
                    </div>
                    <div className='row gx-0 py-4'>
                        <div className='col-md-6 col-lg-3' data-aos='fade-up' data-aos-duration='1000'>
                            <div className='bestoffer_col1'>
                                <img src={img1} alt='Strength Training Class' className='img-fluid pb-3' />
                                <h4>Strength Training</h4>
                                <p>
                                    Build power, enhance performance, and sculpt your body with our cutting-edge strength training program. Master techniques
                                    that deliver real results.
                                </p>
                                <button>
                                    Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3' data-aos='fade-up' data-aos-duration='1300'>
                            <div className='bestoffer_col1'>
                                <img src={img2} alt='Yoga Session' className='img-fluid pb-3' />
                                <h4>Core Yoga</h4>
                                <p>
                                    Combine strength and serenity with our dynamic yoga sessions. Perfect your form, boost flexibility, and find your inner
                                    balance.
                                </p>
                                <button>
                                    Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3' data-aos='fade-up' data-aos-duration='1700'>
                            <div className='bestoffer_col1'>
                                <img src={img3} alt='Body Building Training' className='img-fluid pb-3' />
                                <h4>Elite Body Building</h4>
                                <p>
                                    Transform your physique with professional guidance, advanced techniques, and proven strategies for maximum muscle growth and
                                    definition.
                                </p>
                                <button>
                                    Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3' data-aos='fade-up' data-aos-duration='2000'>
                            <div className='bestoffer_col1'>
                                <img src={img4} alt='Weight Loss Program' className='img-fluid pb-3' />
                                <h4>Total Body Transformation</h4>
                                <p>
                                    Achieve your dream body through our comprehensive approach combining targeted workouts, nutrition planning, and expert
                                    coaching.
                                </p>
                                <button>
                                    Learn More <i className='fa-solid fa-arrow-right ps-2'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestOffers;
