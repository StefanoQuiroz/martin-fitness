import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitnessGoal from './components/FitnessGoal';
import BestOffers from './components/BestOffers';
import Services from './components/Services';
import BestPlan from './components/BestPlan';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Signup from './components/Signup';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
    return (
        <>
            <Navbar />
            <Signup />
            <div id='home'>
                <Hero />
            </div>
            <div id='about'>
                <FitnessGoal />
            </div>
            <div id='program'>
                <BestOffers />
            </div>
            <div id='membership'>
                <BestPlan />
            </div>
            <div id='testimonial'>
                <Testimonial />
            </div>
            <Services />
            <Footer />
        </>
    );
}

export default App;
