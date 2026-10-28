import { useState } from 'react';
import { SECTORS } from '../data/sectors.js';
import PhoneDemo from './PhoneDemo.jsx';

export default function Hero() {
  const [sector, setSector] = useState('cafeteria');

  return (
    <section className="hero container">
      <div className="hero-copy">
        <span className="tag tag-accent-2">Sin apps · Apple Wallet y Google Wallet</span>
        <h1 className="hero-title">Tu tarjeta de sellos, ahora en el móvil de tus clientes.</h1>
        <p className="hero-lead">
          Adiós a los cartoncitos que se pierden en la cartera. Tus clientes escanean un QR,
          guardan la tarjeta en su Wallet y tú les avisas de cada promo con una notificación.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#empezar">Crea tu tarjeta gratis</a>
          <a className="btn btn-secondary btn-lg" href="#como-funciona">Ver cómo funciona</a>
        </div>
        <span className="hero-note">Lista en 10 minutos. Sin tarjeta de crédito.</span>

        <fieldset className="sector-picker">
          <legend>Prueba la demo como:</legend>
          <div className="seg">
            {Object.entries(SECTORS).map(([key, s]) => (
              <label key={key} className="seg-opt">
                <input
                  type="radio"
                  name="sector"
                  value={key}
                  checked={sector === key}
                  onChange={() => setSector(key)}
                />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <PhoneDemo sector={SECTORS[sector]} />
    </section>
  );
}
