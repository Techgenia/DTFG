import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Carrier';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <BrowserRouter basename="/techgenia"> {/* ✅ this is essential */}
      <CustomCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
