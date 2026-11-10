import { BUSINESS_TONES } from '../data/sectors.js';
import { useI18n } from '../i18n/index.jsx';

export default function BusinessTypes() {
  const { t } = useI18n();

  return (
    <section className="container business">
      <h3>{t.business.title}</h3>
      <ul className="business-tags">
        {t.business.types.map((label, i) => (
          <li key={label} className={`tag tag-lg tag-${BUSINESS_TONES[i]}`}>{label}</li>
        ))}
      </ul>
    </section>
  );
}
