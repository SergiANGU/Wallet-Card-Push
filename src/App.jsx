import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import BusinessTypes from './components/BusinessTypes.jsx';
import FinalCta from './components/FinalCta.jsx';

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BusinessTypes />
        <FinalCta />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Segell</span>
        <span className="text-muted">Compatible con Apple Wallet y Google Wallet</span>
      </footer>
    </div>
  );
}
