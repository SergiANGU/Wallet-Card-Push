import { useState } from 'react';
import { SECTOR_KEYS } from '../data/sectors.js';
import { useI18n } from '../i18n/index.jsx';
import PhoneDemo from './PhoneDemo.jsx';

export default function Hero() {
  const { t } = useI18n();
  const [sector, setSector] = useState('cafeteria');

  return (
    <section className="hero container">
      <div className="hero-copy">
        <span className="tag tag-accent-2">{t.hero.tag}</span>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#empezar">{t.hero.ctaPrimary}</a>
          <a className="btn btn-secondary btn-lg" href="#como-funciona">{t.hero.ctaSecondary}</a>
        </div>
        <span className="hero-note">{t.hero.note}</span>

        <fieldset className="sector-picker">
          <legend>{t.hero.pickerLegend}</legend>
          <div className="seg">
            {SECTOR_KEYS.map((key) => (
              <label key={key} className="seg-opt">
                <input
                  type="radio"
                  name="sector"
                  value={key}
                  checked={sector === key}
                  onChange={() => setSector(key)}
                />
                {t.sectors[key].label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <PhoneDemo sector={t.sectors[sector]} />
    </section>
  );
}
