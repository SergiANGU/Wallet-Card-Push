import { STEPS } from '../data/sectors.js';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="band-surface">
      <div className="container section">
        <h2 className="section-title">Tan fácil como poner un sello. Literalmente.</h2>
        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.n} className="step">
              <span className={`step-num tone-${step.tone}`}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
