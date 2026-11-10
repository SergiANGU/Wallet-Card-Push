import { FEATURE_TONES } from '../data/sectors.js';
import { useI18n } from '../i18n/index.jsx';

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="funciones" className="container section">
      <h2 className="section-title">{t.features.title}</h2>
      <div className="features">
        {t.features.items.map((f, i) => (
          <article key={i} className={`card feature feature-${FEATURE_TONES[i]}`}>
            <span className="card-kicker">{f.kicker}</span>
            <h3 className="card-title">{f.title}</h3>
            <p className="card-body">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
