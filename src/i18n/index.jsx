import { createContext, useContext } from 'react';
import es from './es.js';
import ca from './ca.js';
import en from './en.js';

// Cada idioma vive en su propia ruta: / (castellano), /ca y /en.
export const LANGS = {
  es: { label: 'ES', name: 'Español', path: '/', dict: es },
  ca: { label: 'CA', name: 'Català', path: '/ca', dict: ca },
  en: { label: 'EN', name: 'English', path: '/en', dict: en },
};

const STORAGE_KEY = 'segell-lang';

export function langFromPath(pathname) {
  const first = pathname.split('/')[1];
  return first === 'ca' || first === 'en' ? first : 'es';
}

export function getSavedLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v && LANGS[v] ? v : null;
  } catch {
    return null;
  }
}

export function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* sin almacenamiento disponible: no pasa nada */
  }
}

// Idioma preferido del navegador entre los que ofrecemos (o null).
export function browserLang() {
  const list = navigator.languages?.length ? navigator.languages : [navigator.language || ''];
  for (const l of list) {
    const code = l.toLowerCase().split('-')[0];
    if (LANGS[code]) return code;
  }
  return null;
}

// Aplica título, descripción y lang del documento.
export function applyDocumentMeta(lang) {
  const { meta } = LANGS[lang].dict;
  document.documentElement.lang = lang;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://www.segell.cat${LANGS[lang].path}`);
}

const I18nContext = createContext({ lang: 'es', t: es });

export function I18nProvider({ lang, children }) {
  return <I18nContext.Provider value={{ lang, t: LANGS[lang].dict }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
