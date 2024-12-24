import bars from '../Assets/bars.png';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg Nav_main'>
            <div className='container nav_small'>
                <a
                    className='logo'
                    href='#home'
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        letterSpacing: '0.5px',
                        padding: '10px 0',
                    }}
                >
                    <span
                        style={{
                            color: '#ff5733',
                            marginRight: '8px',
                            fontSize: '2.5rem',
                        }}
                    >
                        Martin
                    </span>
                    Fitness
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <img src={bars} alt='Menu' style={{ display: 'block' }} />
                </button>
                <div className='collapse navbar-collapse py-3 py-md-0' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 py-2 py-md-3 py-lg-0'>
                        <li className='nav-item' data-aos='fade-down' data-aos-duration='800' data-aos-easing='ease-in-out'>
                            <a className='nav-link' href='#home'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item' data-aos='fade-down' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                            <a className='nav-link' href='#about'>
                                About Us
                            </a>
                        </li>
                        <li className='nav-item' data-aos='fade-down' data-aos-duration='1200' data-aos-easing='ease-in-out'>
                            <a className='nav-link' href='#program'>
                                Program
                            </a>
                        </li>
                        <li className='nav-item' data-aos='fade-down' data-aos-duration='1400' data-aos-easing='ease-in-out'>
                            <a className='nav-link' href='#membership'>
                                Memberships
                            </a>
                        </li>
                        <li className='nav-item' data-aos='fade-down' data-aos-duration='1600' data-aos-easing='ease-in-out'>
                            <a className='nav-link' href='#testimonial'>
                                Testimonials
                            </a>
                        </li>
                    </ul>
                    <form className='d-flex ms-lg-4 pb-md-3' role='search'>
                        <button
                            type='button'
                            className='btn1'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                            data-aos='fade-left'
                            data-aos-duration='1800'
                            data-aos-easing='ease-in-out'
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
