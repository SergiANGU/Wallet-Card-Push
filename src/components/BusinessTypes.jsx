import { BUSINESS_TYPES } from '../data/sectors.js';

export default function BusinessTypes() {
  return (
    <section className="container business">
      <h3>Hecho para negocios de barrio</h3>
      <ul className="business-tags">
        {BUSINESS_TYPES.map((b) => (
          <li key={b.label} className={`tag tag-lg tag-${b.tone}`}>{b.label}</li>
        ))}
      </ul>
    </section>
  );
}
