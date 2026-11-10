import { useState } from 'react';
import { STAMPS_TOTAL } from '../data/sectors.js';
import { useI18n } from '../i18n/index.jsx';

export default function PhoneDemo({ sector }) {
  const { t } = useI18n();
  const [count, setCount] = useState(7);
  const full = count >= STAMPS_TOTAL;

  const addStamp = () => setCount((c) => (c >= STAMPS_TOTAL ? 0 : c + 1));

  return (
    <div className="phone-stage">
      <div className="blob blob-lg" aria-hidden="true" />
      <div className="blob blob-sm" aria-hidden="true" />

      <div className="phone" role="img" aria-label={t.demo.ariaLabel(sector.name, count, STAMPS_TOTAL)}>
        <div className="phone-screen">
          <span className="phone-title">Wallet</span>

          <div className="pass">
            <div className="pass-head">
              <span className="pass-name">{sector.name}</span>
              <span className="pass-kind">{sector.kind}</span>
            </div>
            <div className="pass-count">
              <span className="pass-label">{t.demo.stampsLabel}</span>
              <span className="pass-number">
                {count} / {STAMPS_TOTAL}
              </span>
            </div>
            <div className="stamps">
              {Array.from({ length: STAMPS_TOTAL }, (_, i) => (
                <span key={i} className={`stamp${i < count ? ' is-on' : ''}`} />
              ))}
            </div>
            <span className="pass-reward">
              {full ? t.demo.rewardReady : t.demo.remaining(STAMPS_TOTAL - count, sector.reward)}
            </span>
            <div className="pass-qr">{t.demo.qr}</div>
          </div>

          {full && (
            <div className="push" role="status">
              <span className="push-from">{sector.name} · {t.demo.now}</span>
              <span className="push-msg">{sector.rewardPush}</span>
            </div>
          )}
        </div>
      </div>

      <div className="stamp-cta">
        <button type="button" className="btn btn-primary btn-stamp" onClick={addStamp}>
          {full ? t.demo.reset : t.demo.stamp}
        </button>
        <span className="stamp-hint">{t.demo.hint}</span>
      </div>
    </div>
  );
}
