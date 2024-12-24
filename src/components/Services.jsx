import img1 from '../Assets/services.jpg';

const Services = () => {
    return (
        <>
            <div className='container-fluid services'>
                <div className='container'>
                    <div className='row gx-0'>
                        <div className='col-md-12 col-lg-6' data-aos='fade-right' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                            <div className='services_col1'>
                                <h1 className='main_heading'>Elite Training Services For Maximum Results</h1>
                                <div className='services_main pt-3 pb-5'>
                                    <div className='form-check py-4'>
                                        <input className='form-check-input' type='checkbox' value='' id='personalTraining' />
                                        <label className='form-check-label' htmlFor='personalTraining'>
                                            <h5 className='ps-3'>Elite Personal Training</h5>
                                        </label>
                                    </div>
                                    <p>
                                        Experience transformation through customized 1-on-1 training sessions. Our elite program combines advanced exercise
                                        science with nutrition optimization for maximum muscle gain and fat loss. Master proper form and technique while pushing
                                        your limits safely.
                                    </p>

                                    <div className='form-check py-4'>
                                        <input className='form-check-input' type='checkbox' value='' id='expertCoaching' />
                                        <label className='form-check-label' htmlFor='expertCoaching'>
                                            <h5 className='ps-3'>Competition Preparation</h5>
                                        </label>
                                    </div>
                                    <p>
                                        Dominate your next competition with our comprehensive prep program. Benefit from precise periodization, peak week
                                        management, posing practice, and contest strategy. We'll guide you through every phase of your contest prep journey.
                                    </p>

                                    <div className='form-check py-4'>
                                        <input className='form-check-input' type='checkbox' value='' id='flexibleScheduling' />
                                        <label className='form-check-label' htmlFor='flexibleScheduling'>
                                            <h5 className='ps-3'>VIP Flexible Scheduling</h5>
                                        </label>
                                    </div>
                                    <p>
                                        Train on your terms with our adaptable scheduling system. Early morning or late evening, we accommodate your lifestyle.
                                        Priority booking, extended sessions, and 24/7 coach communication ensure you never miss a workout.
                                    </p>
                                </div>
                                <button className='btn1 btn0'>Start Your Transformation</button>
                            </div>
                        </div>
                        <div className='col-md-8 col-lg-6' data-aos='fade-left' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                            <div className='services_col2 pt-5 pt-md-5 pt-lg-0'>
                                <img src={img1} alt='Professional Training in Action' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
