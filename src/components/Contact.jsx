import { useState } from 'react';
import { CONTACT } from '../config/contact.js';
import { useI18n } from '../i18n/index.jsx';

const EMPTY = { name: '', business: '', sector: '', email: '', phone: '', message: '', privacy: false };

export default function Contact() {
  const { lang, t } = useI18n();
  const c = t.contact;
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error
  const [error, setError] = useState('');

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  const summary = () =>
    [
      `${c.form.name}: ${form.name}`,
      `${c.form.business}: ${form.business}`,
      form.sector && `${c.form.sector}: ${form.sector}`,
      form.email && `${c.form.email}: ${form.email}`,
      form.phone && `${c.form.phone}: ${form.phone}`,
      '',
      form.message,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    if (!form.email.trim() && !form.phone.trim()) {
      setError(c.form.needContact);
      return;
    }

    if (!CONTACT.formEndpoint) {
      const subject = `${c.mailSubject} · ${form.business}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary())}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, lang, _subject: `${c.mailSubject} · ${form.business}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  }

  const waText = encodeURIComponent(c.whatsappText);

  return (
    <section className="contact container">
      <div className="contact-intro">
        <span className="tag tag-accent-2">{c.tag}</span>
        <h1 className="contact-title">{c.title}</h1>
        <p className="contact-lead">{c.lead}</p>

        <ul className="contact-perks">
          {c.perks.map((perk) => (
            <li key={perk}>
              <span className="perk-dot" aria-hidden="true" />
              {perk}
            </li>
          ))}
        </ul>

        <div className="contact-direct">
          <span className="contact-direct-label">{c.directLabel}</span>
          <div className="contact-direct-links">
            <a className="btn btn-secondary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            {CONTACT.whatsapp && (
              <a
                className="btn btn-secondary"
                href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      <div id="formulario" className="contact-card">
        {status === 'sent' ? (
          <div className="contact-done" role="status">
            <h2>{c.sent.title}</h2>
            <p>{c.sent.body}</p>
            <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
              {c.sent.again}
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <h2 className="contact-form-title">{c.form.title}</h2>

            <div className="field-row">
              <label className="field">
                <span>{c.form.name} *</span>
                <input required autoComplete="name" value={form.name} onChange={set('name')} />
              </label>
              <label className="field">
                <span>{c.form.business} *</span>
                <input required autoComplete="organization" value={form.business} onChange={set('business')} />
              </label>
            </div>

            <label className="field">
              <span>{c.form.sector}</span>
              <select value={form.sector} onChange={set('sector')}>
                <option value="">{c.form.sectorPlaceholder}</option>
                {c.form.sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            <div className="field-row">
              <label className="field">
                <span>{c.form.email}</span>
                <input type="email" autoComplete="email" value={form.email} onChange={set('email')} />
              </label>
              <label className="field">
                <span>{c.form.phone}</span>
                <input type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} />
              </label>
            </div>
            <span className="field-hint">{c.form.contactHint}</span>

            <label className="field">
              <span>{c.form.message}</span>
              <textarea rows={4} placeholder={c.form.messagePlaceholder} value={form.message} onChange={set('message')} />
            </label>

            <label className="check">
              <input type="checkbox" required checked={form.privacy} onChange={set('privacy')} />
              <span>{c.form.privacy}</span>
            </label>

            {error && <p className="form-error" role="alert">{error}</p>}
            {status === 'error' && (
              <p className="form-error" role="alert">
                {c.form.sendError} <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            )}
            {status === 'mailto' && (
              <p className="form-note" role="status">
                {c.form.mailtoNote} <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            )}

            <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
              {status === 'sending' ? c.form.sending : c.form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
