import { FEATURE_TONES } from '../data/sectors.js';
import { LANGS, useI18n } from '../i18n/index.jsx';

export default function Pilot() {
  const { lang, t } = useI18n();

  return (
    <section id="piloto" className="band-surface pilot">
      <div className="container section">
        <div className="pilot-head">
          <h2 className="section-title">{t.pilot.title}</h2>
          <p className="pilot-lead">{t.pilot.lead}</p>
        </div>
        <div className="features">
          {t.pilot.items.map((item, i) => (
            <article key={i} className={`card feature feature-${FEATURE_TONES[i]}`}>
              <span className="card-kicker">{item.kicker}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
        <a className="btn btn-primary btn-lg pilot-cta" href={LANGS[lang].contactPath}>{t.pilot.cta}</a>
      </div>
    </section>
  );
}
