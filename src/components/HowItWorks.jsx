import { STEP_TONES } from '../data/sectors.js';
import { useI18n } from '../i18n/index.jsx';

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="como-funciona" className="band-surface">
      <div className="container section">
        <h2 className="section-title">{t.how.title}</h2>
        <ol className="steps">
          {t.how.steps.map((step, i) => (
            <li key={i} className="step">
              <span className={`step-num tone-${STEP_TONES[i]}`}>{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
