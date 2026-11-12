import { LANGS, pathFor, saveLang, useI18n } from '../i18n/index.jsx';

export default function Nav() {
  const { lang, page, t } = useI18n();
  // Fuera de la portada, las anclas apuntan a la portada del mismo idioma.
  const home = page === 'home' ? '' : LANGS[lang].path;

  return (
    <header className="nav container">
      <a className="nav-brand" href={LANGS[lang].path}>
        <span className="brand-dot" aria-hidden="true" />
        Segell
      </a>
      <nav className="nav-links" aria-label={t.nav.menuLabel}>
        <a href={`${home}#como-funciona`}>{t.nav.how}</a>
        <a href={`${home}#funciones`}>{t.nav.features}</a>
        <a href={`${home}#piloto`}>{t.nav.pilot}</a>
        <a
          href={LANGS[lang].contactPath}
          aria-current={page === 'contact' ? 'page' : undefined}
        >
          {t.nav.contact}
        </a>
      </nav>
      <nav className="lang-switch" aria-label={t.nav.langLabel}>
        {Object.entries(LANGS).map(([code, l]) => (
          <a
            key={code}
            href={pathFor(code, page)}
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
      <a className="btn btn-primary" href={page === 'contact' ? '#formulario' : LANGS[lang].contactPath}>{t.nav.cta}</a>
    </header>
  );
}
