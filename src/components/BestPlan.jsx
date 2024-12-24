import tick from '../Assets/tick.png';

const BestPlan = () => {
    return (
        <>
            <div className='container-fluid BestPlan'>
                <h1 className='main_heading'>Premium Transformation Programs</h1>
                <p className='py-4'>Experience exclusive, high-level training with customized programs designed for exceptional results.</p>
                <div className='container pt-5'>
                    <div className='row gx-0 align-items-center'>
                        <div className='col-md-6 col-lg-4' data-aos='fade-down' data-aos-duration='1000'>
                            <div className='bestplan_col1'>
                                <h5>Foundation Elite</h5>
                                <h1 className='pt-4'>
                                    $699 <span>/ Per Month</span>
                                </h1>
                                <div className='bestplan_detail py-3'>
                                    <p>
                                        <img src={tick} alt='' /> 8 Premium Training Sessions
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Body Composition Analysis
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Customized Workout Plan
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Basic Nutrition Guide
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Private Gym Access
                                    </p>
                                </div>
                                <button className='btn3'>Start Your Journey</button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4' data-aos='fade-down' data-aos-duration='1400'>
                            <div className='bestplan_col1 bestplan_col2'>
                                <h3 className='BestPlan_h3'>Most Popular</h3>
                                <h5>Pro Bodybuilding Elite</h5>
                                <h1 className='pt-4'>
                                    $1,299 <span>/ Per Month</span>
                                </h1>
                                <div className='bestplan_detail py-3'>
                                    <p>
                                        <img src={tick} alt='' /> 16 Elite Training Sessions
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Personalized Meal Planning
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Advanced Supplement Protocol
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Weekly Body Assessments
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> 24/7 Direct Coach Access
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Competition Prep Guidance
                                    </p>
                                </div>
                                <button className='btn4'>Elevate Now</button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4' data-aos='fade-down' data-aos-duration='1800'>
                            <div className='bestplan_col1'>
                                <h5>Performance Elite</h5>
                                <h1 className='pt-4'>
                                    $899 <span>/ Per Month</span>
                                </h1>
                                <div className='bestplan_detail py-3'>
                                    <p>
                                        <img src={tick} alt='' /> 12 Specialized Sessions
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Advanced Program Design
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Bi-weekly Assessments
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> Custom Nutrition Protocol
                                    </p>
                                    <p>
                                        <img src={tick} alt='' /> VIP Facility Access
                                    </p>
                                </div>
                                <button className='btn3'>Transform Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestPlan;
