import { LANGS, useI18n } from '../i18n/index.jsx';

export default function FinalCta() {
  const { lang, t } = useI18n();

  return (
    <section id="empezar" className="container">
      <div className="final-cta">
        <div>
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.body}</p>
        </div>
        <a className="btn btn-primary btn-xl" href={LANGS[lang].contactPath}>{t.finalCta.cta}</a>
      </div>
    </section>
  );
}
