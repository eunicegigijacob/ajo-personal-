import About from '../Components/Landing page/AboutSection';
import Contact from '../Components/Landing page/Contact';
import FAQ from '../Components/Landing page/FAQ';
import Footer from '../Components/Landing page/Footer';
import Header from '../Components/Landing page/Header';
import HeroSection from '../Components/Landing page/HeroSection';
import Offers from '../Components/Landing page/Offers';

const LandingPage = () => {
  return (
    <div className="section">
      <div>
        <Header />
        <HeroSection />
        <About />
        <Offers />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
