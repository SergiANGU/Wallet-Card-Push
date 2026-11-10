import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import BusinessTypes from './components/BusinessTypes.jsx';
import FinalCta from './components/FinalCta.jsx';
import Contact from './components/Contact.jsx';
import { LANGS, useI18n } from './i18n/index.jsx';

export default function App() {
  const { lang, page, t } = useI18n();

  return (
    <div className="page">
      <Nav />
      <main>
        {page === 'contact' ? (
          <Contact />
        ) : (
          <>
            <Hero />
            <HowItWorks />
            <Features />
            <BusinessTypes />
            <FinalCta />
          </>
        )}
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Segell</span>
        <a className="footer-link" href={LANGS[lang].contactPath}>{t.nav.contact}</a>
        <span className="text-muted">{t.footer.compat}</span>
      </footer>
    </div>
  );
}
