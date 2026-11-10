import { createContext, useContext } from 'react';
import es from './es.js';
import ca from './ca.js';
import en from './en.js';

// Cada idioma vive en su propia ruta: / (castellano), /ca y /en.
export const LANGS = {
  es: { label: 'ES', name: 'Español', path: '/', contactPath: '/contacto', dict: es },
  ca: { label: 'CA', name: 'Català', path: '/ca', contactPath: '/ca/contacte', dict: ca },
  en: { label: 'EN', name: 'English', path: '/en', contactPath: '/en/contact', dict: en },
};

// Páginas: 'home' (landing) o 'contact'.
export function pageFromPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return Object.values(LANGS).some((l) => l.contactPath === clean) ? 'contact' : 'home';
}

// Ruta de una página en un idioma.
export function pathFor(lang, page) {
  return page === 'contact' ? LANGS[lang].contactPath : LANGS[lang].path;
}

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
export function applyDocumentMeta(lang, page = 'home') {
  const { meta, contact } = LANGS[lang].dict;
  const title = page === 'contact' ? contact.meta.title : meta.title;
  const description = page === 'contact' ? contact.meta.description : meta.description;
  document.documentElement.lang = lang;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://www.segell.cat${pathFor(lang, page)}`);
  // hreflang de la página actual.
  for (const code of Object.keys(LANGS)) {
    document
      .querySelector(`link[rel="alternate"][hreflang="${code}"]`)
      ?.setAttribute('href', `https://www.segell.cat${pathFor(code, page)}`);
  }
  document
    .querySelector('link[rel="alternate"][hreflang="x-default"]')
    ?.setAttribute('href', `https://www.segell.cat${pathFor('es', page)}`);
}

const I18nContext = createContext({ lang: 'es', page: 'home', t: es });

export function I18nProvider({ lang, page = 'home', children }) {
  return <I18nContext.Provider value={{ lang, page, t: LANGS[lang].dict }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
