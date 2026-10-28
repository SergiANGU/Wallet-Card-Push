import { FEATURES } from '../data/sectors.js';

export default function Features() {
  return (
    <section id="funciones" className="container section">
      <h2 className="section-title">Todo lo que tu cartoncito no podía hacer</h2>
      <div className="features">
        {FEATURES.map((f) => (
          <article key={f.kicker} className={`card feature feature-${f.tone}`}>
            <span className="card-kicker">{f.kicker}</span>
            <h3 className="card-title">{f.title}</h3>
            <p className="card-body">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
