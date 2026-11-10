import { LANGS, saveLang, useI18n } from '../i18n/index.jsx';

export default function Nav() {
  const { lang, t } = useI18n();

  return (
    <header className="nav container">
      <a className="nav-brand" href={LANGS[lang].path}>
        <span className="brand-dot" aria-hidden="true" />
        Segell
      </a>
      <nav className="nav-links" aria-label={t.nav.menuLabel}>
        <a href="#como-funciona">{t.nav.how}</a>
        <a href="#funciones">{t.nav.features}</a>
        <a href="#precios">{t.nav.pricing}</a>
      </nav>
      <nav className="lang-switch" aria-label={t.nav.langLabel}>
        {Object.entries(LANGS).map(([code, l]) => (
          <a
            key={code}
            href={l.path}
            hrefLang={code}
            lang={code}
            title={l.name}
            aria-current={code === lang ? 'true' : undefined}
            onClick={() => saveLang(code)}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-primary" href="#empezar">{t.nav.cta}</a>
    </header>
  );
}
