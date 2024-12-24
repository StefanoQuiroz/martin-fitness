import logo from '../Assets/logo_main.png';

const Footer = () => {
    return (
        <>
            <div className='container-fluid Footer pt-5'>
                <div className='container'>
                    <div className='row gx-0 py-4 footer_row1'>
                        <div className='col-md-4 pb-md-4 pb-lg-0 col-lg-2'>
                            <div className='footer_col1'>
                                <h5 className='ft_h5'>Company</h5>
                                <ul>
                                    <li>
                                        <a href='#about'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='#program'>Why us</a>
                                    </li>
                                    <li>
                                        <a href='#membership'>Security</a>
                                    </li>
                                    <li>
                                        <a href='#testimonial'>Partnership</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 pb-md-4 pb-lg-0 col-lg-2'>
                            <div className='footer_col1'>
                                <h5 className='ft_h5'>Programs</h5>
                                <ul>
                                    <li>
                                        <a href='#program'>Core Yoga</a>
                                    </li>
                                    <li>
                                        <a href='#program'>Strength Training</a>
                                    </li>
                                    <li>
                                        <a href='#program'>Body Building</a>
                                    </li>
                                    <li>
                                        <a href='#program'>Weight Loss</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 pb-md-4 pb-lg-0 col-lg-2'>
                            <div className='footer_col1'>
                                <h5 className='ft_h5'>Help</h5>
                                <ul>
                                    <li>
                                        <a href='#membership'>Account</a>
                                    </li>
                                    <li>
                                        <a href='#contact'>Support</a>
                                    </li>
                                    <li>
                                        <a href='#privacy'>Privacy</a>
                                    </li>
                                    <li>
                                        <a href='#terms'>Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 py-md-4 py-lg-0'>
                            <div className='footer_col2'>
                                <h5 className='ft_h5'>Contact Us</h5>
                                <div className='row pb-3'>
                                    <div className='col-1'>
                                        <i className='fa-solid fa-phone'></i>
                                    </div>
                                    <div className='col-11'>
                                        <p>+1 (201) 744-1992</p>
                                    </div>
                                </div>
                                <div className='row pb-3'>
                                    <div className='col-1'>
                                        <i className='fa-solid fa-envelope'></i>
                                    </div>
                                    <div className='col-11'>
                                        <p>martin@martinfit.com</p>
                                    </div>
                                </div>
                                <div className='row pb-3'>
                                    <div className='col-1'>
                                        <i className='fa-solid fa-location-dot'></i>
                                    </div>
                                    <div className='col-11'>
                                        <p>Florida, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 py-md-4 py-lg-0'>
                            <div className='footer_col3'>
                                <h5 className='ft_h5'>Subscribe To Our Newsletter</h5>
                                <form action='#'>
                                    <div className='input-group mb-3'>
                                        <input
                                            className='form-control'
                                            type='email'
                                            placeholder='Enter Your Email'
                                            aria-label='Email subscription'
                                            aria-describedby='button-addon2'
                                            required
                                        />
                                        <button className='' type='submit' id='button-addon2'>
                                            <i className='fa-solid fa-paper-plane'></i>
                                        </button>
                                    </div>
                                </form>
                                <p>Get exclusive updates and training tips!</p>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 footer_row2 align-items-center py-3 py-md-4 py-lg-3'>
                        <div className='col-md-3'>
                            <a
                                href='#home'
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ color: '#ff5733', marginRight: '8px' }}>Martin</span>
                                Fitness
                            </a>
                        </div>
                        <div className='col-md-6 text-center'>
                            <p>
                                © 2024 Done by <span style={{ color: '#ff5733' }}>Nebulabs Studio</span>
                            </p>
                        </div>
                        <div className='col-md-3 text-md-end'>
                            <a
                                href='https://www.facebook.com/martin.nunes.7798'
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Visit our Facebook page'
                            >
                                <i className='fa-brands fa-facebook-f'></i>
                            </a>
                            <a
                                href='https://www.instagram.com/mnzmt97/'
                                className='social-link'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Follow us on Instagram'
                            >
                                <i className='fa-brands fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
