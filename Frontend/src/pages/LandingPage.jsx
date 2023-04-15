import About from './landing page-components/AboutSection';
import Contact from './landing page-components/Contact';
import FAQ from './landing page-components/FAQ';
import Footer from './landing page-components/Footer';
import Header from './landing page-components/Header';
import HeroSection from './landing page-components/HeroSection';
import Offers from './landing page-components/Offers';

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
