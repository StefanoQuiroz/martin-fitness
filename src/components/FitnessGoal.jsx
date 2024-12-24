import img1 from '../Assets/partner1.png';
import img2 from '../Assets/partner2.png';
import img3 from '../Assets/partner3.png';
import img4 from '../Assets/martin_exercise.jpg';
import icon from '../Assets/min_icon.png';

const FitnessGoal = () => {
    return (
        <>
            <div className='container-fluid Fitness_Goal'>
                <div className='container'>
                    <div className='row gx-0 align-items-center'>
                        <div className='col-md-5 col-lg-5'>
                            <div className='fitness_col1'>
                                <h1 className=''>970k + More</h1>
                                <p>Trusted Companies Partner</p>
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-7'>
                            <div className='fitness_col2'>
                                <img src={img1} alt='' className='img-fluid px-3 py-md-2 py-lg-0' />
                                <img src={img2} alt='' className='img-fluid px-3 py-md-2 py-lg-0' />
                                <img src={img3} alt='' className='img-fluid px-3 py-md-2 py-lg-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ****************** */}
            <div className='container-fluid Fitness_Goal1'>
                <div className='container'>
                    <div className='row gx-0 align-items-center'>
                        <div className='col-md-5 col-lg-6' data-aos='fade-right' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                            <div className='fitness_col3'>
                                <img src={img4} alt='Professional Trainer in Action' className='img-fluid' />
                                <div className='popup'>
                                    <img src={icon} alt='Trainer Icon' />
                                    <h6 className='fw-bold'>Professional Trainer</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-6'>
                            <div className='fitness_col4'>
                                <h1 className='main_heading' data-aos='fade-left' data-aos-duration='1200' data-aos-easing='ease-in-out'>
                                    Transform Your Body, Elevate Your Life
                                </h1>
                                <div className='pt-3 pb-4' data-aos='fade-left' data-aos-duration='1400' data-aos-easing='ease-in-out'>
                                    <p>
                                        Welcome to Martin Fitness, where transformation isn't just a goal—it's a journey we'll master together. Our expert
                                        trainers combine cutting-edge techniques with personalized attention to help you achieve the results you've always
                                        dreamed of. Whether you're just starting or looking to break through plateaus, we're here to guide every step.
                                    </p>
                                    <p>
                                        Experience workouts tailored to your goals, nutritional guidance that fits your lifestyle, and a supportive community
                                        that keeps you motivated. Your fitness evolution starts here, and we're committed to making it happen.
                                    </p>
                                </div>
                                <button className='btn1 btn0' data-aos='fade-left' data-aos-duration='1600' data-aos-easing='ease-in-out'>
                                    Start Your Journey Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ****************** */}
            {/* ****************** */}
        </>
    );
};

export default FitnessGoal;
