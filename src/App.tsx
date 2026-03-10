import HeroSection from './components/HeroSection';
import DemoOne from './components/demo';
import CustomCursor from './components/CustomCursor';
import FeaturedProjects from './components/FeaturedProjects';
import Qualifications from './components/Qualifications';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <HeroSection />
      <FeaturedProjects />
      <DemoOne />
      <Qualifications />
      <Experiences />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
